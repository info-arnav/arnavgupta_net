async function detectText(fileName) {
  const vision = require("@google-cloud/vision");
  const client = new vision.ImageAnnotatorClient();
  const [result] = await client.textDetection(
    "C:/Users/arnav/websites/daisforall.com/public/logo.webp"
  );
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach((text) => console.log(text));
}

detectText();
