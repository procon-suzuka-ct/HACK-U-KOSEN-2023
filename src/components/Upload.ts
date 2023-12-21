import saveImage from "../utils/saveImage";

function toBlob(base64: string): Blob | false {
    var bin = atob(base64.replace(/^.*,/, ''));
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    // Blobを作成
    try {
        var blob = new Blob([buffer.buffer], {
            type: 'image/png'
        });
    } catch (e) {
        return false;
    }
    return blob;
}

function Upload(image: Blob) {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getMilliseconds();
    let filename = String(year) + String(month) + String(date) + String(hour) + String(min) + String(sec) + ".png";
    saveImage(image, filename);

}

export {toBlob, Upload};