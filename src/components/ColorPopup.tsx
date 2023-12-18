import {Layer, Rect, Text} from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { useState } from 'react';

function ColorPopup(x: number, y: number){
    const pos = {x: x, y: y};
    const [color, setColor] = useState("");
    return (
        <Layer>
            <Rect x={Number(pos?.x) - 25} y={Number(pos?.y)-190} width={200} height={200} fill="#fffbf0" cornerRadius={20} stroke={"#63beff"} />
            <Text x={Number(pos?.x) - 10} y={Number(pos?.y)-180} text="いろをえらんでね" fontStyle='bold' fontFamily="sans-serif" fontSize={20} fill="black" />
            <Rect onClick={() => {setColor("red");}} x={Number(pos?.x) - 10} y={Number(pos?.y)-150} width={50} height={45} cornerRadius={10} fill="red" />
            <Rect onClick={() => {setColor("pink");}} x={Number(pos?.x) + 50} y={Number(pos?.y)-150} width={50} height={45} cornerRadius={10} fill="pink" />
            <Rect onClick={() => {setColor("orange");}} x={Number(pos?.x) + 110} y={Number(pos?.y)-150} width={50} height={45} cornerRadius={10} fill="orange" />
            <Rect onClick={() => {setColor("yellow");}} x={Number(pos?.x) - 10} y={Number(pos?.y)-100} width={50} height={45} cornerRadius={10} fill="yellow" />
            <Rect onClick={() => {setColor("yellowgreen");}} x={Number(pos?.x) + 50} y={Number(pos?.y)-100} width={50} height={45} cornerRadius={10} fill="yellowgreen" />
            <Rect onClick={() => {setColor("green");}} x={Number(pos?.x) + 110} y={Number(pos?.y)-100} width={50} height={45} cornerRadius={10} fill="green" />
            <Rect onClick={() => {setColor("cyan");}} x={Number(pos?.x) - 10} y={Number(pos?.y)-50} width={50} height={45} cornerRadius={10} fill="cyan" />
            <Rect onClick={() => {setColor("blue");}} x={Number(pos?.x) + 50} y={Number(pos?.y)-50} width={50} height={45} cornerRadius={10} fill="blue" />
            <Rect onClick={() => {setColor("yellow");}} x={Number(pos?.x) + 110} y={Number(pos?.y)-50} width={50} height={45} cornerRadius={10} fill="black" />
        </Layer>
    );
}
export default ColorPopup;