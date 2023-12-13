import * as React from 'react';
import * as F from './Fruit'

// このファイルを読み込むとエラーが発生する。

type IMG = {
    scr: string;
    x: number;
    y: number;
}

// <img>タグを使ってドラッグした場合。
    const [images, setImages] = React.useState<IMG[]>([]);
    
    const onDrop = (e: React.DragEvent<HTMLDivElement>):void => {
        e.preventDefault();
        const fruit_name = e.dataTransfer.getData("fruit");
        const fruit = F.toFruit(fruit_name);
        const img:IMG = {
            scr: fruit.scr,
            x: e.screenX,
            y: e.screenY
        }
        // imagemapに追加
        setImages(images.concat([img]))
        e.dataTransfer.clearData();
    }


export default onDrop;
export type {IMG};
export {images};