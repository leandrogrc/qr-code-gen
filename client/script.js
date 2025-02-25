document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form");
    const generated = document.getElementById("generated");
  
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const url = document.getElementById('url').value;
        const tam = document.getElementById('tamanho').value;
        
        const fetchOpts = {
            method: 'POST',
            body: JSON.stringify({ text: url, tam: tam }),
            headers: { "Content-Type": "application/json" }
        };

        const url_fetch = "http://localhost:3000/generate";
  
        await fetch(url_fetch, fetchOpts)
            .then(res => res.json())
            .then(qrcode => {
                clearUI();
                generated.innerHTML += `
                    <img class="mt-5" src='${qrcode}'>
                    <p>${tam} x ${tam} px</p>
                    <a class="my-3 btn btn-success" download="qrcode.png" href='${qrcode}'>Download</a>
                `;
            })
            .catch(err => console.error(err));
    });
  
    const clearUI = () => {
        generated.innerHTML = '';
    };
});
