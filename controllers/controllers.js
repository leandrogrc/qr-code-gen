import QRCode from 'qrcode';
const gerarQRcode = async (req, res) => {
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
}

export default gerarQRcode