const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = 3001 || process.env.PORT;
const app = express();
const PUB_DIR = path.resolve(__dirname, '..', '..', 'public');

app.use(express.static(PUB_DIR));
app.use(morgan('dev'));
app.use(express.json()); // only needed for PUT/POST


app.listen(PORT, () => {
  console.log(`express server running on port ${PORT}`);
});
