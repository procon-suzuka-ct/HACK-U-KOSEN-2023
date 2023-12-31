import useImage from 'use-image';
import {Image} from 'react-konva';
/*フルーツの画像をインポート*/
import strawberry from "../assets/fruits/strawberry.png";
import mango from "../assets/fruits/mango.png";
import blueberry from "../assets/fruits/blueberry.png";
import kiwi from "../assets/fruits/kiwi-fruit.png";
import cream_stroberry from "../assets/system/cream_2.png";
import cream_chocolate from "../assets/system/cream_3.png";
import cream_normal from "../assets/system/cream.png";
import eraser from "../assets/system/eraser.png"
import pen from "../assets/system/pen.png";

type Fruit = {
  name: string;
  scr: string;
  width: number;
  height: number;
}

function toFruit(name: string) {
  let scr = "";
  let width = 100;
  let height = 100;
  const system_width = window.innerWidth;
  const system_height = document.body.clientHeight;
  const width10 = system_width / 7;
  const height10 = system_height / 10;


  switch (name) {
    case "strawberry":
      scr = strawberry;
      width = width10;
      height = height10;
      break;
    case "mango":
      scr = mango;
      width = width10;
      height = height10;
      break;
    case "blueberry":
      scr = blueberry;
      width = width10;
      height = height10;
      break;
    case "kiwi":
      scr = kiwi;
      width = width10 * 0.8;
      height = height10 * 0.8;
      break;
    case "cream_strawberry":
      scr = cream_stroberry;
      width = width10 * 0.7;
      height = height10 * 0.7;
      break;
    case "cream_chocolate":
      scr = cream_chocolate;
      width = width10 * 0.7;
      height = height10 * 0.7;
      break;
    case "cream_normal":
      scr = cream_normal;
      width = width10 * 0.7;
      height = height10 * 0.7;
      break;
    case "eraser":
      scr = eraser;
      width = width10;
      height = height10;
      break;
    case "pen":
      scr = pen;
      width = width10;
      height = height10;
      break;
    default:
      scr = "";
      break;
  }
  const f: Fruit = {
    name: name,
    scr: scr,
    width: width,
    height: height
  }
  return f;
}

/*
function toImg(fruit: Fruit, draggable?: boolean) {
    return (
        <img
            src={fruit.scr}
            alt={fruit.name}
            width={fruit.width}
            height={fruit.height}
            draggable={draggable}
            onDragStart={(e: React.DragEvent<HTMLImageElement>) => {
                e.dataTransfer.setDragImage(e.currentTarget, 0, 0)
                e.dataTransfer.setData("fruit", fruit.name)
                console.log(e.currentTarget);
            }}
        />
    );
}
*/

function ToImage(props: {
  fruit: Fruit, x: number, y: number, draggable?: boolean
}) {

  const [image] = useImage(props.fruit.scr);
  return (
    <Image
      image={image}
      x={props.x}
      y={props.y}
      width={props.fruit.width}
      height={props.fruit.height}
      draggable={props.draggable}
    />
  );
}

export type {Fruit};
// eslint-disable-next-line react-refresh/only-export-components
export {ToImage, toFruit};
