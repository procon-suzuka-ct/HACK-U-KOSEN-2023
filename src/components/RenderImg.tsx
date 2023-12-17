import * as React from 'react';
import * as F from './Fruit'
import styles from './Test.module.scss';
// このファイルを読み込むとエラーが発生する。

type IMG = {
    scr: string;
    x: number;
    y: number;
}

// <img>タグを使ってドラッグした場合。
const RenderImg = () => {
    const [imgmap, setImgmap] = React.useState<IMG[]>([]);

    React.useEffect(() => {
        console.log("setImgmap", imgmap)
    }, [imgmap]);

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
        console.log(img, imgmap);
        setImgmap([...imgmap, img]);
        e.dataTransfer.clearData();
    }

    const DroppedImg = () => {
        return (
            imgmap.map((img) => {
                return <img src={img.scr} style={{ position: "absolute", left: img.x, top: img.y }} />
            })
        );
    }

    //最後の要素を削除
    const RemoveImg = () => {
        setImgmap([...imgmap.slice(0, imgmap.length - 1)])
    }

    //最も座標が近い要素を削除
    const DeleteImg = (x:number, y:number) => {
        let deleteImg: IMG;
        let deleteDistance: number;
        imgmap.map((img) => {
            if(deleteDistance  > Math.sqrt(Math.pow(2, x - img.x) + Math.pow(2, y - img.y)))
            {
                deleteDistance = Math.sqrt(Math.pow(2, x - img.x) + Math.pow(2, y - img.y));
                deleteImg = img;
            }
        });
        setImgmap([...imgmap.filter((img) => img != deleteImg)]);
    }

    return (
        <div 
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
                e.preventDefault();
                console.log("dragover");
            }}

            onDrop={(e: React.DragEvent<HTMLDivElement>) => {
                onDrop(e);
            }}

            className={styles.container}
        >
            <DroppedImg />
        </div>
    )
}


export default RenderImg;
export type { IMG };