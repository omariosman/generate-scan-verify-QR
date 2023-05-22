const functions = require("firebase-functions");
const qrcode = require("qrcode");

exports.generateQR = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    res.status(400).send("Invalid request method. Please use POST.");
  }

  // Get the data for the QR code from the request
  const data = req.query.data || "Hello, World!";

  // Calculate expiration timestamp (current timestamp + 90 seconds)
  const expirationTimestamp = Math.floor(Date.now() / 1000) + 90;

  // Add the expiration timestamp to the QR code data
  const dataWithExpiration = `${data}&expires=${expirationTimestamp}`;

  // Generate the QR code
  qrcode.toDataURL(dataWithExpiration, (err, qrCodeURL) => {
    if (err) {
      console.error("Error generating QR code:", err);
      res.status(500).send("Error generating QR code");
    } else {
      // Send the QR code URL in the response
      res.send(qrCodeURL);
    }
  });
});
