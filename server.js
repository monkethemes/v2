const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Server started!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
