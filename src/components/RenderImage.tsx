import {Fruit} from './Fruit'
import {Image} from 'react-konva';
import useImage from 'use-image';
import {KonvaEventObject} from 'konva/lib/Node';
// このファイルを読み込むとエラーが発生する。

type IMAGE = {
  id: number;
  scr: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

function URLImage(props: { img: IMAGE, candrag: boolean }) {
  const [i] = useImage(props.img.scr);
  return <Image
    image={i}
    x={props.img.x}
    y={props.img.y}
    width={props.img.width}
    height={props.img.height}
    name={String(props.img.id)}
    draggable={props.candrag}
    onDragEnd={(e) => {
      props.img.x = e.target.x();
      props.img.y = e.target.y();
    }}
  />
}

function UndragURLImage(props: { img: IMAGE }) {
  const [i] = useImage(props.img.scr);
  return <Image
    image={i}
    x={props.img.x}
    y={props.img.y}
    width={props.img.width}
    height={props.img.height}
    name={String(props.img.id)}
    onDragEnd={(e) => {
      props.img.x = e.target.x();
      props.img.y = e.target.y();
    }}
  />
}

export class RenderImage {
  now_erase_ = false;
  imagemap: IMAGE[] = [];

  constructor(imgmap: IMAGE[]) {
    this.now_erase_ = false;
    this.imagemap = imgmap;
  }

  /*
  通常のhtmlタグでのドラッグアンドドロップなので、使用しない。

  onDrop(e: React.DragEvent<HTMLDivElement>){
      console.log("onDrop");
      e.preventDefault();
      const fruit_name = e.dataTransfer.getData("fruit");
      const fruit = toFruit(fruit_name);
      const img: IMAGE = {
          scr: fruit.scr,
          x: e.screenX,
          y: e.screenY
      }
      // this.imagemapに追加
      console.log(img, this.imagemap);
      this.imagemap = this.imagemap.concat([img]);
      e.dataTransfer.clearData();
      console.log("canDrop");
  }

  onDragOver(e: React.DragEvent<HTMLDivElement>){
      e.preventDefault();
      console.log("onDragOver");
  }*/

  onClick(e: KonvaEventObject<MouseEvent>, Fruit: Fruit) {
    const pos = e.target.getStage()?.getPointerPosition();
    console.log(pos);
    if (pos) {
      const img: IMAGE = {
        id: pos.x + pos.y,
        scr: Fruit.scr,
        x: pos.x,
        y: pos.y,
        width: Fruit.width,
        height: Fruit.height
      }
      this.imagemap = this.imagemap.concat([img]);
    }
  }

  RenderImage() {
    return (
      this.imagemap.map((image) => {
        return <URLImage img={image} candrag={true}/>
      })
    );

  }

  //最後の要素を削除
  RemoveImage() {
    this.imagemap = this.imagemap.slice(0, this.imagemap.length - 1);
  }

  //クリックした要素を削除
  DeleteImage(e: KonvaEventObject<MouseEvent>) {
    if (this.now_erase_) {
      const id = Number(e.target.name());
      const item = this.imagemap.find((i) => i.id == id);
      if (!item) {
        return;
      }
      console.log(item);
      const index = this.imagemap.indexOf(item);
      //remove from the list:
      this.imagemap = this.imagemap.filter((_, i) => i !== index);
    }
    console.log(this.now_erase_);
  }

}

// eslint-disable-next-line react-refresh/only-export-components
export type {IMAGE};
export {URLImage, UndragURLImage};
