import { Fruit, toFruit } from './Fruit'
import useImage from 'use-image';
import {Image} from 'react-konva';
// ケーキの画像をインポートする
import react from '../assets/react.svg';

type Cake = {
    base: string,
    surface: string,
}

function searchImg(cake?: Cake, base?: string, surface?: string): string{
    let name:string = "";
    if(base && surface)
    {
         name = base + '.' + surface;
    }else if(cake){
        name = cake.base + '.' + cake.surface;
        
    }

    let scr = react;
    
    switch(name){
        case "normal.chocolate":
            scr = "";
            break;
        default:
            scr = react;
            break;
    }
    return scr;
}


function toImg(cake: Cake, width?:number, height?:number) {
    return (
        <img 
            src={searchImg(cake)}
            width={width}
            height={height}
        />
    );
}

function toImage(cake: Cake, x:number, y:number, width?:number, height?:number) {
    const [image] = useImage(searchImg(cake));
    return (
        <Image
            image={image}
            x={x}
            y={y}
            width={width}
            height={height}
        />
    );
}

export {searchImg,toImg, toImage};
export type {Cake};