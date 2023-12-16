import { Fruit, toFruit } from './Fruit'
import useImage from 'use-image';
import {Image} from 'react-konva';
// ケーキの画像をインポートする
import react from '../assets/react.svg';

type Cake = {
    name: string,
    taste: string,
    scr: string,
    into_fruit: Fruit,
}

function searchImg(name: string): string{
    let scr = react;
    switch(name){
        case "apple.chocolate":
            scr = "";
            break;
        default:
            scr = react;
            break;
    }
    return scr;
}

function toCake(fruit: Fruit, taste: string): Cake{
    let name = fruit.name + '.' + taste;
    let scr = searchImg(name);
    return {
        name: name,
        taste: taste,
        scr: scr,
        into_fruit: fruit
    }
}

function FruitNameToCake(fruitname:string, taste: string): Cake{
    let name = fruitname + '.' + taste;
    let scr = searchImg(name);
    const fruit = toFruit(fruitname);
    return {
        name: name,
        taste: taste,
        scr: scr,
        into_fruit: fruit
    }
}

function toImg(cake: Cake, width?:number, height?:number) {
    return (
        <img 
            src={cake.scr}
            alt={cake.name}
            width={width}
            height={height}
        />
    );
}

function toImage(fruit: Fruit, x:number, y:number, width?:number, height?:number) {
    const [image] = useImage(fruit.scr);
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

export {toCake, FruitNameToCake, toImg, toImage};
export type {Cake};