import * as React from 'react';
import * as F from './Fruit'

// このファイルを読み込むとエラーが発生する。

type IMG = {
    scr: string;
    x: number;
    y: number;
}

// <img>タグを使ってドラッグした場合。
let images: IMG[] = [];

const onDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    console.log("onDrop");
    e.preventDefault();
    const fruit_name = e.dataTransfer.getData("fruit");
    const fruit = F.toFruit(fruit_name);
    const img: IMG = {
        scr: fruit.scr,
        x: e.screenX,
        y: e.screenY
    }
    // imagemapに追加
    console.log(img, images);
    images.push(img);
    e.dataTransfer.clearData();
}

const DropZone = () => {
    return (
        images.map((img) => {
            return <img src={img.scr} style={{ position: "absolute", left: img.x, top: img.y }} />
        })
    );
}


export default DropZone;
export type { IMG };
export { images, onDrop };