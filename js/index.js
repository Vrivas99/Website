const fs = require('fs');
const qrcode = require('qrcode');

const urlApk = "https://github.com/Vrivas99/APK_Registrapp/raw/main/app-release.apk";

const run = async() => {
    const QR = await qrcode.toDataURL(urlApk)
    const htmlContent = `
    <div class="qr-container">
    <h2>Esnanea para Descargar</h2>
    <img src="${QR}">
    </div>
    `;
    fs.writeFileSync('../index.html', `${htmlContent}`)
}

run()


