import * as React from 'react';
import { Fruit, toImage, toFruit } from './Fruit'
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
    return <Image image={i} x={img.x} y={img.y} width={200} height={200} />
}

export class RenderImage {
    imagemap: IMAGE[] = [];

    constructor(imgmap: IMAGE[]) {
        this.imagemap = imgmap;
    };
    
    
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
    }

    onClick(e: KonvaEventObject<MouseEvent>, Fruit: Fruit){
        const pos = e.target.getStage()?.getPointerPosition();
        if(pos){
            const img: IMAGE = {
                scr: Fruit.scr,
                x: pos.x,
                y: pos.y
            }
            this.imagemap = this.imagemap.concat([img]);
        }
    }

    RenderImage(){
        console.log("start RenderImage");
        return (
            this.imagemap.map((image) => {
                return <URLImage img={image}/>
            })
        );
        
    }

    //最後の要素を削除
    RemoveImage(){
        this.imagemap = this.imagemap.slice(0, this.imagemap.length -1);
    }

    //最も座標が近い要素を削除
    DeleteImage(x: number, y: number){
        let deleteImage: IMAGE;
        let deleteDistance: number;
        this.imagemap.map((image) => {
            if (deleteDistance > Math.sqrt(Math.pow(2, x - image.x) + Math.pow(2, y - image.y))) {
                deleteDistance = Math.sqrt(Math.pow(2, x - image.x) + Math.pow(2, y - image.y));
                deleteImage = image;
            }
        });
        this.imagemap = this.imagemap.filter((image) => image != deleteImage);
    }

}

export type { IMAGE };