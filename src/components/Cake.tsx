import useImage from 'use-image';
import {Image} from 'react-konva';
// ケーキの画像をインポートする
import react from '../assets/react.svg';
import front_chocolate from '../assets/cakes/normal_2.png';
import front_strawberry from '../assets/cakes/normal_3.png';
import front_normal from '../assets/cakes/normal.png';
import side_chocolate from '../assets/cakes/side_2.png';
import side_strawberry from '../assets/cakes/side_3.png';
import side_normal from '../assets/cakes/side.png';
import cross_chocolate from '../assets/cakes/cross_2.png';
import cross_strawberry from '../assets/cakes/cross_3.png';
import cross_normal from '../assets/cakes/cross.png';

type Cake = {
    direction: string,
    surface: string,
}

function searchImg(cake?: Cake, direction?: string, surface?: string): string{
    let name:string = '';
    if(direction && surface)
    {
         name = direction + '.' + surface;
    }else if(cake){
        name = cake.direction + '.' + cake.surface;
    }

    let scr = react;
    
    switch(name){
        case 'front.chocolate':
            scr = front_chocolate;
            break;
        case 'front.strawberry':
            scr = front_strawberry;
            break;
        case 'front.normal':
            scr = front_normal;
            break;
        case 'side.chocolate':
            scr = side_chocolate;
            break;
        case 'side.strawberry':
            scr = side_strawberry;
            break;
        case 'side.normal':
            scr = side_normal;
            break;
        case 'cross.chocolate':
            scr = cross_chocolate;
            break;
        case 'cross.strawberry':
            scr = cross_strawberry;
            break;
        case 'cross.normal':
            scr = cross_normal;
            break;
        default:
            scr = react;
            break;
    }
    return scr;
}

/*
function toImg(cake: Cake, width?:number, height?:number) {
    return (
        <img 
            src={searchImg(cake)}
            width={width}
            height={height}
        />
    );
}*/

function toImage(cake: Cake, x:number, y:number, width?:number, height?:number){
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

export {searchImg, toImage};
export type {Cake};