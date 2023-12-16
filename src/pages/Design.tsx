import styles from './Design.module.scss';
import React,{useState} from 'react';
import { Stage, Layer, Image, Rect, Text ,Line} from 'react-konva';
import useImage from 'use-image'
import cakes_cake from "../assets/cakes/normal.png"
import cakes_cross from "../assets/cakes/cross.png"
import cakes_side from "../assets/cakes/side.png"
import sys_background from "../assets/system/background.png"
import sys_menu from "../assets/system/menu.png"
import fruit_strawberry from "../assets/fruits/strawberry.png"
import fruit_mango from "../assets/fruits/mango.png"
import fruit_blueberry from "../assets/fruits/blueberry.png"
import fruit_kiwi from "../assets/fruits/kiwi-fruit.png"
import sys_santa from "../assets/system/christmas_santa_hello.png"
import sys_hoip from "../assets/system/cream.png"
import sys_palette from "../assets/system/paint-palette.png"
import sys_palette_cake from "../assets/system/palette-cake.png"
import pen from "../assets/system/pen.png"

function Design() {

  const [background] = useImage(sys_background);
  const [menu] = useImage(sys_menu);
  const [strawberry] = useImage(fruit_strawberry);
  const [mango] = useImage(fruit_mango);
  const [blueberry] = useImage(fruit_blueberry);
  const [kiwi] = useImage(fruit_kiwi);
  const [santa] = useImage(sys_santa);
  const [hoip] = useImage(sys_hoip);
  const [palette] = useImage(sys_palette);
  const [palette_cake] = useImage(sys_palette_cake);
  const [cake] = useImage(cakes_cake);
  const [cross] = useImage(cakes_cross);
  const [side] = useImage(cakes_side);
  const [pen_] = useImage(pen);
  const width = window.innerWidth;
  const height = document.body.clientHeight;
  const width10 = width / 7;
  const height10 = height / 10;
  const system_width = width10 * 0.8;
  const system_height = height10 * 0.8;
  const right_width = width - width10;
  const bottom_height = height - height10;
  
  const [bool_menu, setBool_menu] = useState(false);
  const [operatingfrite_, setOperatingfrite_] = useState(false);
 
  interface ImageMapType {
    name: string,
    x: number,
    y: number,
    width: number,
    height: number
  }

  let ImageMap: ImageMapType[] = [];


  const OperatingFrite = (name:string) => {
    let op:ImageMapType = {
      name: name,
      x: 0,
      y: 0,
      width: 10,
      height: 10,
    };
  }

  const PutedFrite = (name:string) =>{
    ImageMap.push({
      name: name,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    })
  }


  return (
    
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={background} x={0} y={0} width={width} height={height} />
      </Layer>
      <Layer>
        <Rect fill='pink' x={right_width} y={0} width={width10} height={height10} cornerRadius={20} />
        <Image onClick={() => {setBool_menu(true);}} image={menu} x={right_width + (width10 * 0.1)} y={height10 * 0.1} width={system_width} height={system_height} />
        <Rect fill='pink' x={0} y={0} width={width10*1.5} height={height10*1.8} cornerRadius={20} />
        <Rect fill='white' x={width10*0.1} y={height10*0.1} width={width10*1.3} height={height10*1.3} cornerRadius={20} />
        <Image image={cross} x={width10*0.1} y={0} width={width10*1.3} height={height10*1.3} />
        <Text x={width10*0.3} y={height10*1.5} text="だんめん" fontFamily="sans-serif"  fontSize={width/30} fill="black" />
        <Rect fill='pink' x={width10*1.6} y={0} width={width10*1.5} height={height10*1.8} cornerRadius={20} />
        <Rect fill='white' x={width10*1.7} y={height10*0.1} width={width10*1.3} height={height10*1.3} cornerRadius={20} /> 
        <Image image={side} x={width10*1.7} y={0} width={width10*1.3} height={height10*1.3} />
        <Text x={width10*2.1} y={height10*1.5} text="よこ" fontFamily="sans-serif" fontSize={width/30} fill="black" />
        <Rect fill='pink' x={right_width} y={height10 * 1.80} width={width10} height={height10 * 6.45} cornerRadius={30} />
        <Image onClick={() => {}} image={strawberry} x={right_width} y={height10 * 2.00} width={width10} height={height10} />
        <Text x={right_width*1.02} y={height10 * 2.8} text="いちご" fontFamily="sans-serif" fontSize={width/30} fill="black" />
        <Line points={[right_width*1.015, height10 * 3.3, right_width + width10*0.9, height10 * 3.3]} stroke="#E19191" strokeWidth={width*0.004} />
        <Image image={mango} x={right_width} y={height10 * 3.25} width={width10} height={height10} />
        <Text x={right_width*1.01} y={height10 * 4.15} text="まんごー" fontFamily="sans-serif" fontSize={width/30} fill="black" />
        <Line points={[right_width*1.015, height10 * 4.6, right_width + width10*0.9, height10 * 4.6]} stroke="#E19191" strokeWidth={width*0.004} />
        <Image image={blueberry} x={right_width} y={height10 * 4.50} width={width10} height={height10} />
        <Text x={right_width} y={height10 * 5.40} text="ぶるーべりー" fontFamily="sans-serif" fontSize={width/40} fill="black" />
        <Line points={[right_width*1.015, height10 * 5.85, right_width + width10*0.9, height10 * 5.85]} stroke="#E19191" strokeWidth={width*0.004} />
        <Image image={kiwi} x={right_width} y={height10 * 5.75} width={width10} height={height10} />
        <Text x={right_width*1.02} y={height10 * 6.75} text="きうい" fontFamily="sans-serif" fontSize={width/30} fill="black" />
        <Line points={[right_width*1.015, height10 * 7.1, right_width + width10*0.9, height10 * 7.1]} stroke="#E19191" strokeWidth={width*0.004} />
        <Image image={pen_} x={right_width} y={height10 * 7.00} width={width10} height={height10} />
        <Text x={right_width*1.02} y={height10 * 8.00} text="えんぴつ" fontFamily="sans-serif" fontSize={width/35} fill="black" />
        <Rect fill='orange' x={right_width - (width10 * 0.5)} y={bottom_height - (height10 * 0.5)} width={width10 * 1.5} height={height10 * 1.5} cornerRadius={20} />
        <Image image={santa} x={right_width - (width10 * 0.25)} y={bottom_height - (height10 * 0.4)} width={width10 } height={height10} />
        <Text x={right_width - (width10 * 0.45)} y={bottom_height + (height10 * 0.55)} text="かんせい" fontFamily="sans-serif" fontSize={width10 * 0.35} fill="black" />
        <Rect x={0} y={bottom_height -20} width={width10 * 5} height={height10 + 30} cornerRadius={20} fill='pink'></Rect>
        <Image image={hoip} x={0} y={bottom_height -30} width={width10 * 0.8} height={height10} />
        <Text x={0} y={bottom_height - 30 + height10} text="ほいっぷ" fontFamily="sans-serif" fontSize={width/30} fill="black" />
        <Line points={[width10*1.2, bottom_height - height10*0.09 , width10*1.2, bottom_height +height10*0.95]} stroke="#E19191" strokeWidth={width*0.004} />
        <Image image={palette} x={width10 * 1.5} y={bottom_height -30} width={width10 * 0.8} height={height10} />
        <Text x={width10 * 1.3} y={bottom_height - 30 + height10} text="ほいっぷのいろ" fontFamily="sans-serif" fontSize={width/35} fill="black" />
        <Line points={[width10*2.7, bottom_height - height10*0.09 , width10*2.7, bottom_height +height10*0.95]} stroke="#E19191" strokeWidth={width*0.004} />
        <Image image={palette_cake} x={width10 * 2.9} y={bottom_height -30} width={width10 * 0.8} height={height10} />
        <Text x={width10 * 2.8} y={bottom_height - 30 + height10} text="けーきのいろ" fontFamily="sans-serif" fontSize={width/30} fill="black" />
      </Layer>
      <Layer>
        <Image image={cake} x={width10/2} y={height10*2} width={width/1.3} height={width/1.3}/>
      </Layer>
    </Stage>
    
  );
}


export default Design;
