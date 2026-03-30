const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.post("/validate-license", (req, res) => {
  const { code } = req.body;

  if (code === "123") {
    return res.json({ valid: true });
  }

  return res.json({ valid: false });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
