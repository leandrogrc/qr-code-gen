import QRCode from 'qrcode';

const gerarQRcode = async (req, res) => {
    const { text, tam } = req.body;
    
    if (!text) {
        return res.status(400).send('URL não informada');
    }

    const opt = {
        width: parseInt(tam),
        margin: 1
    };

    try {
        const url = await QRCode.toDataURL(text, opt);
        res.json(url);
    } catch (err) {
        res.status(500).json({ message: 'Erro', error: err.message });
    }
};

export default gerarQRcode;