const express = require('express');
const app = express();
const router = require('./router/auth-router');

app.use("/api/auth", router);
// app.use("/api/register", router);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});