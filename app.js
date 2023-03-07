const form = document.querySelector('form');
const input = document.querySelector('input[type="file"]');
const uploadedLink = document.querySelector('#uploaded-link');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
        const data = new Uint8Array(reader.result);

        try {
            const ipfs = window.IpfsHttpClient({ host: 'localhost', port: '5001', protocol: 'http' });
            const { cid } = await ipfs.add(data);
            const url = `https://ipfs.io/ipfs/${cid.toString()}`;

            uploadedLink.href = url;
            uploadedLink.textContent = url;
        } catch (error) {
            console.error(error);
        }
    };

    reader.readAsArrayBuffer(file);
});
