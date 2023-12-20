import {storage} from "../firebase.ts";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {AppUser} from "./appUser.ts";
import {Cake} from "./cake.ts";

const saveImage = (image: Blob, fileName: string) => {
  const storageRef = ref(storage, "cakes/" + fileName);
  const uploadTask = uploadBytesResumable(storageRef, image);

  uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    }
    , (error) => {
      console.log(error);
    }
    , async () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const cake = new Cake(AppUser.uid, downloadURL);
        cake.save();
      });
    });
}

export default saveImage;
