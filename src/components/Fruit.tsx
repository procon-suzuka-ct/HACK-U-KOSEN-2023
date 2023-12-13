import useImage from 'use-image';
import {Image} from 'react-konva';
/*フルーツの画像をインポート*/
import react from '../assets/react.svg';

type Fruit = {
    name: string;
    scr: string;
}

function toFruit(name: string) {

    let scr = react;
    switch(name) {
        case "apple":
            scr = "";
            break;
        default:
            scr = react;
            break;
    }

    let f: Fruit = {
        name: name,
        scr: scr
    }
    return f;
}

function toImg(fruit: Fruit, width?:number, height?:number, draggable?:boolean) {
    return (
        <img 
            src={fruit.scr}
            alt={fruit.name}
            width={width}
            height={height}
            draggable={draggable}
            onDragStart={(e) => {
                e.dataTransfer.setDragImage(e.currentTarget, 0, 0)
                e.dataTransfer.setData("fruit",fruit.name)
                console.log(e.currentTarget);
            }}
        />
    );
}

function toImage(fruit: Fruit, x:number, y:number, width?:number, height?:number, draggable?:boolean) {
    
    const [image] = useImage(fruit.scr);

    return (
        <Image
            image={image}
            x={x}
            y={y}
            width={width}
            height={height}
            draggable={draggable}
            onDragStart={(e) => {
                e.target.setAttrs({
                    Fruit : fruit,
                    width: width,
                    height: height
                });
            }}
        />
    );
}

export type {Fruit};
export {toFruit, toImg, toImage};