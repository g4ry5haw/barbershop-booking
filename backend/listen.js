const app = require("./app.js");
const database = require("./connection.js");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listen.js Server is listening on port ${PORT}`);
});
