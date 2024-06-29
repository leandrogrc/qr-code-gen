import express from 'express';
import QRCode from 'qrcode';
import cors from 'cors'

const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (from form submissions)
app.use(express.json());
app.use(cors())
// Serve static files from the "public" directory
app.use(express.static('./client'));

// Handle form submission and generate QR code
app.post('/generate', async (req, res) => {
    const { text, tam } = req.body;

    if (!text) {
        return res.status(400).send('Text input is required');
    }

    const opt = {
        width: tam,
        height: tam,
        margin: 1
    }

    try {
        const url = await QRCode.toDataURL(text, opt);
        res.json(url);
    } catch (err) {
        res.status(500).send('Error generating QR code', err);
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});