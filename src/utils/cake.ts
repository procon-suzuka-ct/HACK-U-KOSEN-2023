import {db} from "../firebase.ts";
import {addDoc, collection, getDocs} from "firebase/firestore";

export class Cake {
  userID: string;
  imageURL: string;

  constructor(userID: string, imageURL: string) {
    this.userID = userID;
    this.imageURL = imageURL;
  }

  static getCakes = async (): Promise<Cake[]> => {
    const col = this.getCollectionRef();
    return (await getDocs(col)).docs.map((doc) => {
      return new Cake(doc.data().id, doc.data().url);
    });
  }

  static getCollectionRef = () => {
    return collection(db, "cakes")
  }

  save = async () => {
    const col = Cake.getCollectionRef();
    await addDoc(col, {id: this.userID, url: this.imageURL});
  }
}
