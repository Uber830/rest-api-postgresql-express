import app from './src/app.js';

const port = process.env.PORT || 3000;

// star
app.listen(port, (req, res) => {
    console.log(`Listening in port! ${port}`)
});
