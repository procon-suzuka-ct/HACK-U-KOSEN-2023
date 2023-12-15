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
}

// <image>タグを使ってドラッグした場合。
const RenderImage = () => {
    const [imagemap, setImagemap] = React.useState<IMAGE[]>([]);

    React.useEffect(() => {
        console.log("setImagemap", imagemap)
    }, [imagemap]);

    /*
    // <img>タグを使ってドラッグした場合。
    const onDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        console.log("onDrop");
        e.preventDefault();
        const fruit_name = e.dataTransfer.getData("fruit");
        
        const fruit = F.toFruit(fruit_name);
        const image: IMAGE = {
            scr: fruit.scr,
            x: e.screenX,
            y: e.screenY
        }
        // imagemapに追加
        console.log(image, imagemap);
        setImagemap([...imagemap, image]);
        e.dataTransfer.clearData();
    }
    */

    const onDrop = (e: KonvaEventObject<DragEvent>) => {
        console.log("onDrop");
        e.evt.preventDefault();
        const data = e.target.getAttrs();

        const fruit: Fruit = data.Fruit;
        const width: number = data.width;
        const height: number = data.height;

        const image: IMAGE = {
            scr: fruit.scr,
            x: e.evt.screenX,
            y: e.evt.screenY
        }

        // imagemapに追加
        console.log(image, imagemap);
        setImagemap([...imagemap, image]);

    }

    const onDragOver = (e: KonvaEventObject<DragEvent>) => {
        e.evt.preventDefault();
        console.log("onDragOver");
    }

    const DroppedImage = () => {
        return (
            imagemap.map((image) => {
                const [fruitImage] = useImage(image.scr);
                return <Image image={fruitImage} x={image.x} y={image.y} />
            })
        );
    }

    //最後の要素を削除
    const RemoveImage = () => {
        setImagemap([...imagemap.slice(0, imagemap.length - 1)])
    }

    //最も座標が近い要素を削除
    const DeleteImage = (x: number, y: number) => {
        let deleteImage: IMAGE;
        let deleteDistance: number;
        imagemap.map((image) => {
            if (deleteDistance > Math.sqrt(Math.pow(2, x - image.x) + Math.pow(2, y - image.y))) {
                deleteDistance = Math.sqrt(Math.pow(2, x - image.x) + Math.pow(2, y - image.y));
                deleteImage = image;
            }
        });
        setImagemap([...imagemap.filter((image) => image != deleteImage)]);
    }

    return (
        <Stage
            onDragOver={onDragOver}
            onDrop={onDrop}
            width={window.innerWidth}
            height={window.innerHeight}
            x={0}
            y={1500}
        >
            <Layer>
                <DroppedImage />
            </Layer>
            <Layer>
                <Rect fill='red' x={100} y={100} width={300} height={200} />
            </Layer>
        </Stage>
    )
}


export default RenderImage;
export type { IMAGE };