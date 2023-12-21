import saveImage from "../utils/saveImage";

function toBlob(base64: string): Blob | false {
  const bin = atob(base64.replace(/^.*,/, ''));
  const buffer = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }
  // Blobを作成
  try {
    return new Blob([buffer.buffer], {
      type: 'image/png'
    });
  } catch (e) {
    return false;
  }
}

function Upload(image: Blob) {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getMilliseconds();
  const filename = String(year) + String(month) + String(date) + String(hour) + String(min) + String(sec) + ".png";
  saveImage(image, filename);

}

export {toBlob, Upload};
