const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.post("/validate-license", (req, res) => {
  const { code } = req.body;

  if (code === "123") {
    return res.json({ valid: true });
  }

  res.json({ valid: false });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
