// This is a simple Express server that listens on port 3003
const express = require('express');

const app = express();


app.use((req, res, next) => {
  console.log('First middleware', req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware', req.method, req.url);
  res.send("<h1>Welcome to the Express server</h1><h2>this is a simple server that listens on port 3003</h2>"
  );
});


const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});