import { useState } from 'react';
import QRCode from 'qrcode';

function App() {
  const [qrcode, setQrcode] = useState('');
  const [url, setUrl] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 500,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.log(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <>
      <div className='app'>
        <h1> Enter Your URL to generate QR code</h1>
        <input
          type='text'
          value={url}
          placeholder='e.g www.google.com'
          onChange={e => setUrl(e.target.value)}
        />
        <button onClick={GenerateQRCode}> Generate</button>
        {qrcode && (
          <>
            <img src={qrcode} alt='qrcode.png' />

            <a href={qrcode} download='qrcode.png' className='button'>
              Download
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default App;
