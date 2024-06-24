const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASS || "12345",
  database: process.env.DB_NAME || "db",
});

db.connect((err) => {
  if (err) throw err;

  console.log("Connected to database in MySQL");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.get("/api", (req, res) => {
  res.send("Hola mundo");
});

app.get("/api/create-table", (req, res) => {
  const sql =
    "create table customer (id INT AUTO_INCREMENT, name VARCHAR(200), email VARCHAR(200), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send("Table customer created");
  });
});

app.post("/api/insert", (req, res) => {
  const { name, email } = req.body;
  const sql = "insert into customer set ?";
  db.query(sql, { name, email }, (err, result) => {
    if (err) throw err;
    res.send("Customer added");
  });
});

app.get("/api/select", (req, res) => {
  const sql = "select * from customer";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
