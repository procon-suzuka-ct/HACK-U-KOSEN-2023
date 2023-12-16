import * as React from 'react';
import { Fruit, toImage, toFruit } from './Fruit'
import styles from './Test.module.scss';
import { Image, Stage, Layer, Text, Rect } from 'react-konva';
import useImage from 'use-image';
import { KonvaEventObject } from 'konva/lib/Node';
// このファイルを読み込むとエラーが発生する。

type IMAGE = {
    scr: string;
    x: number;
    y: number;
};

function URLImage({img}:any)
{
    const [i] = useImage(img.scr);
    return <Image image={i} x={img.x} y={img.y} />
}

export class Drop {

    constructor() {};
    
    onDrop(e: React.DragEvent<HTMLDivElement>, ImageMap: IMAGE[]){
        console.log("onDrop");
        e.preventDefault();
        const fruit_name = e.dataTransfer.getData("fruit");
        const fruit = toFruit(fruit_name);
        const img: IMAGE = {
            scr: fruit.scr,
            x: e.screenX,
            y: e.screenY
        }
        // imagemapに追加
        console.log(img, ImageMap);
        ImageMap = ImageMap.concat([img]);
        e.dataTransfer.clearData();
        console.log("canDrop");
        return ImageMap;
    }

    onDragOver(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        console.log("onDragOver");
    }

    onClick(e: KonvaEventObject<MouseEvent>, ImageMap: IMAGE[], Fruit: Fruit){
        const pos = e.target.getStage()?.getPointerPosition();
        if(pos){
            const img: IMAGE = {
                scr: Fruit.scr,
                x: pos.x,
                y: pos.y
            }
            ImageMap = ImageMap.concat([img]);
        }
        return ImageMap;
    }

    RenderImage(ImageMap: IMAGE[]){
        console.log("start RenderImage");
        return (
            ImageMap.map((image) => {
                return <URLImage img={image}/>
            })
        );
        
    }

    //最後の要素を削除
    RemoveImage(ImageMap: IMAGE[]){
        ImageMap = ImageMap.slice(0, ImageMap.length -1)
        return ImageMap;
    }

    //最も座標が近い要素を削除
    DeleteImage(ImageMap:IMAGE[], x: number, y: number){
        let deleteImage: IMAGE;
        let deleteDistance: number;
        ImageMap.map((image) => {
            if (deleteDistance > Math.sqrt(Math.pow(2, x - image.x) + Math.pow(2, y - image.y))) {
                deleteDistance = Math.sqrt(Math.pow(2, x - image.x) + Math.pow(2, y - image.y));
                deleteImage = image;
            }
        });
        ImageMap = ImageMap.filter((image) => image != deleteImage);
        return ImageMap;
    }

}

export type { IMAGE };