const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "ok" });
});

app.get("/atualizou", (request, response) => {
  return response.json({ message: "atualizou" });
});
app.post("/teste", (request, response) => {
  const { name, date } = request.body;
  return response.json({ name, date });
});

app.listen(3333, () => console.log(`Server running or port 3333`));
