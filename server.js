const express = require('express');
const path = require('path');

const app = express ();
app.use(express.static());

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));