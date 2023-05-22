// Get the current timestamp
const currentTimestamp = Math.floor(Date.now() / 1000);

// Parse the expiration timestamp from the QR code data
const expirationTimestamp = 1684782418; // Replace with the actual expiration timestamp from the QR code

// Compare the current timestamp with the expiration timestamp
if (currentTimestamp > expirationTimestamp) {
  // QR code has expired
  console.log("QR code has expired.");
} else {
  // QR code is still valid
  console.log("QR code is still valid.");
}
