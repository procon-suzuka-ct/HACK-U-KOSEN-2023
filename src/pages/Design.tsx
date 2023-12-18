import styles from './Design.module.scss';
import { useState, useEffect } from 'react';
import { Stage, Layer, Image, Rect, Text, Line } from 'react-konva';
import { toFruit, toImg } from '../components/Fruit';
import { RenderImage, IMAGE } from '../components/RenderImage';
import { toImage } from '../components/Cake';
import useImage from 'use-image';
import sys_background from "../assets/system/background.png";
import sys_menu from "../assets/system/menu.png";
import fruit_strawberry from "../assets/fruits/strawberry.png";
import fruit_mango from "../assets/fruits/mango.png";
import fruit_blueberry from "../assets/fruits/blueberry.png";
import fruit_kiwi from "../assets/fruits/kiwi-fruit.png";
import sys_santa from "../assets/system/christmas_santa_hello.png";
import sys_hoip from "../assets/system/cream.png";
import sys_palette from "../assets/system/paint-palette.png";
import sys_palette_cake from "../assets/system/palette-cake.png";
import pen from "../assets/system/pen.png";
import eraser from "../assets/system/eraser.png";
import arrow from "../assets/system/yajirushi.png";
import { KonvaEventObject } from 'konva/lib/Node';

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
  const [pen_] = useImage(pen);
  const [eraser_] = useImage(eraser);
  const [arrow_]=useImage(arrow);
  const width = window.innerWidth;
  const height = document.body.clientHeight;
  const width10 = width / 7;
  const height10 = height / 10;
  const system_width = width10 * 0.8;
  const system_height = height10 * 0.8;
  const right_width = width - width10;
  const bottom_height = height - height10;

  const [bool_menu, setBool_menu] = useState(false);
  const [bool_hoipColor, setBool_hoipColor] = useState(false);
  const [bool_cakeColor, setBool_cakeColor] = useState(false);

  const [cakeColor, setCakeColor] = useState("normal");
  const [hoipColor, setHoipColor] = useState("white");
  const [img, setImg] = useState<IMAGE[]>([]);
  const [tool, setTool] = useState<string>("pen");
  const fD = new RenderImage(img);

  useEffect(() => {
    setBool_cakeColor(false);
  }, [cakeColor]);

  useEffect(() => {
    setBool_hoipColor(false);
  }, [hoipColor]);
  useEffect(() => {
      if(tool == "eraser")
      {
        fD.now_erase_ = true;
      }else{
        fD.now_erase_ = false;
      }
  }, [tool])
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} >
      <Layer >
        <Image image={background} x={0} y={0} width={width} height={height} />
      </Layer>

      <Layer>
        <Rect fill='pink' x={right_width} y={0} width={width10} height={height10} cornerRadius={20} />
        <Image onClick={() => { setBool_menu(true); }} image={menu} x={right_width + (width10 * 0.1)} y={height10 * 0.1} width={system_width} height={system_height} />
        <Rect fill='pink' x={0} y={0} width={width10 * 1.5} height={height10 * 1.8} cornerRadius={20} />
        <Rect fill='white' x={width10 * 0.1} y={height10 * 0.1} width={width10 * 1.3} height={height10 * 1.3} cornerRadius={20} />
        {
          //<Image image={cross} x={width10 * 0.1} y={0} width={width10 * 1.3} height={height10 * 1.3} />
          toImage({ direction: "cross", surface: cakeColor }, width10 * 0.1, 0, width10 * 1.3, height10 * 1.3)
        }
        <Text x={width10 * 0.3} y={height10 * 1.5} text="だんめん" fontFamily="sans-serif" fontSize={width / 30} fill="black" />
        <Rect fill='pink' x={width10 * 1.6} y={0} width={width10 * 1.5} height={height10 * 1.8} cornerRadius={20} />
        <Rect fill='white' x={width10 * 1.7} y={height10 * 0.1} width={width10 * 1.3} height={height10 * 1.3} cornerRadius={20} />
        {
          //<Image image={side} x={width10 * 1.7} y={0} width={width10 * 1.3} height={height10 * 1.3} />
          toImage({ direction: "side", surface: cakeColor }, width10 * 1.7, 0, width10 * 1.3, height10 * 1.3)
        }
        <Text x={width10 * 2.1} y={height10 * 1.5} text="よこ" fontFamily="sans-serif" fontSize={width / 30} fill="black" />
        <Rect fill='pink' x={right_width} y={height10 * 1.6} width={width10} height={height10 * 6.8} cornerRadius={30} />

        <Text x={width10 * 3.25} y={0} text={"ツール:" + tool} fontFamily="sans-serif" fontSize={width / 30} fill="black" />

        <Image onClick={() => { setTool("strawberry") }} image={strawberry} x={right_width} y={height10 * 1.50} width={width10} height={height10} />
        <Text x={right_width * 1.02} y={height10 * 2.4} text="いちご" fontFamily="sans-serif" fontSize={width / 30} fill="black" />
        <Line points={[right_width * 1.015, height10 * 2.8, right_width + width10 * 0.9, height10 * 2.8]} stroke="#E19191" strokeWidth={width * 0.004} />

        <Image onClick={() => { setTool("mango") }} image={mango} x={right_width} y={height10 * 2.7} width={width10} height={height10} />
        <Text x={right_width * 1.01} y={height10 * 3.5} text="まんごー" fontFamily="sans-serif" fontSize={width / 30} fill="black" />
        <Line points={[right_width * 1.015, height10 * 3.95, right_width + width10 * 0.9, height10 * 3.95]} stroke="#E19191" strokeWidth={width * 0.004} />

        <Image onClick={() => { setTool("blueberry") }} image={blueberry} x={right_width} y={height10 * 3.8} width={width10} height={height10} />
        <Text x={right_width} y={height10 * 4.6} text="ぶるーべりー" fontFamily="sans-serif" fontSize={width / 40} fill="black" />
        <Line points={[right_width * 1.015, height10 * 5, right_width + width10 * 0.9, height10 * 5]} stroke="#E19191" strokeWidth={width * 0.004} />

        <Image onClick={() => { setTool("kiwi") }} image={kiwi} x={right_width} y={height10 * 4.95} width={width10} height={height10} />
        <Text x={right_width * 1.02} y={height10 * 5.9} text="きうい" fontFamily="sans-serif" fontSize={width / 30} fill="black" />
        <Line points={[right_width * 1.015, height10 * 6.25, right_width + width10 * 0.9, height10 * 6.25]} stroke="#E19191" strokeWidth={width * 0.004} />

        <Image onClick={() => { setTool("pen") }} image={pen_} x={right_width*1.02} y={height10 * 6.2} width={width10*0.8} height={height10*0.8} />
        <Text x={right_width * 1.02} y={height10 * 7} text="えんぴつ" fontFamily="sans-serif" fontSize={width / 35} fill="black" />
        <Line points={[right_width * 1.015, height10 * 7.35, right_width + width10 * 0.9, height10 * 7.35]} stroke="#E19191" strokeWidth={width * 0.004} />
        

        <Image onClick={() => { setTool("eraser") }} image={eraser_} x={right_width*1.02} y={height10 * 7.35} width={width10*0.8} height={height10*0.8} />
        <Text x={right_width * 1.02} y={height10 * 8.15} text="けしごむ" fontFamily="sans-serif" fontSize={width / 35} fill="black" />

        <Rect fill='orange' x={right_width - (width10 * 0.5)} y={bottom_height - (height10 * 0.5)} width={width10 * 1.5} height={height10 * 1.5} cornerRadius={20} />
        <Image image={santa} x={right_width - (width10 * 0.25)} y={bottom_height - (height10 * 0.4)} width={width10} height={height10} />
        <Text x={right_width - (width10 * 0.45)} y={bottom_height + (height10 * 0.55)} text="かんせい" fontFamily="sans-serif" fontSize={width10 * 0.35} fill="black" />
        <Rect x={0} y={bottom_height - 20} width={width10 * 5.3} height={height10 + 30} cornerRadius={20} fill='pink' />

        <Image onClick={() => { setTool("hoip") }} image={hoip} x={0} y={bottom_height - 30} width={width10 * 0.8} height={height10} />
        <Text x={0} y={bottom_height - 30 + height10} text="ほいっぷ" fontFamily="sans-serif" fontSize={width / 30} fill="black" />
        <Line points={[width10 * 1.2, bottom_height - height10 * 0.09, width10 * 1.2, bottom_height + height10 * 0.95]} stroke="#E19191" strokeWidth={width * 0.004} />

        <Image
          onClick={() => {
            if (bool_hoipColor == true)
              setBool_hoipColor(false);
            else
              setBool_hoipColor(true);
          }}
          image={palette} x={width10 * 1.5} y={bottom_height - 30} width={width10 * 0.8} height={height10} />
        <Text x={width10 * 1.3} y={bottom_height - 30 + height10} text="ほいっぷのいろ" fontFamily="sans-serif" fontSize={width / 35} fill="black" />
        <Line points={[width10 * 2.7, bottom_height - height10 * 0.09, width10 * 2.7, bottom_height + height10 * 0.95]} stroke="#E19191" strokeWidth={width * 0.004} />

        <Image
          onClick={() => {
            if (bool_cakeColor == true)
              setBool_cakeColor(false);
            else
              setBool_cakeColor(true);
          }}
          image={palette_cake} x={width10 * 2.9} y={bottom_height - 30} width={width10 * 0.8} height={height10} />
        <Text x={width10 * 2.8} y={bottom_height - 30 + height10} text="けーきのいろ" fontFamily="sans-serif" fontSize={width / 35} fill="black" />
        <Line points={[width10 * 4.1, bottom_height - height10 * 0.09, width10 * 4.1, bottom_height + height10 * 0.95]} stroke="#E19191" strokeWidth={width * 0.004} />
        <Image onClick={() => {
          console.log("onclick");
          fD.RemoveImage();
          setImg(fD.imagemap);
          }}  image={arrow_} x={width10 * 4.3} y={bottom_height - 30} width={width10 * 0.8} height={height10} />
        <Text x={width10 * 4.45} y={bottom_height - 35 + height10} text="もどす" fontFamily="sans-serif" fontSize={width / 30} fill="black" />
      </Layer>
      <Layer onClick={(e: KonvaEventObject<MouseEvent>) => {
          console.log("onclick");
          if (tool != "pen" && tool != "hoip" && tool != "eraser") {
            fD.onClick(e, toFruit(tool));
            setImg(fD.imagemap);
          }else if(tool == "eraser"){
            console.log("eraser");
            fD.DeleteImage(e);
            setImg(fD.imagemap);
          }
        }}>
        {
          toImage({ direction: "front", surface: cakeColor }, width10 / 2, height10 * 2, width / 1.3, width / 1.3)
        }
        {
          fD.RenderImage()
        }
      </Layer>

      {bool_hoipColor &&
        <Layer>
          <Rect x={width10 * 1.5 - 25} y={bottom_height - 220} width={200} height={200} fill="#fffbf0" cornerRadius={20} stroke={"#63beff"} />
          <Text x={width10 * 1.5 - 10} y={bottom_height - 210} text="いろをえらんでね" fontStyle='bold' fontFamily="sans-serif" fontSize={20} fill="black" />
          <Rect onClick={() => { setHoipColor("red"); }} x={width10 * 1.5 - 10} y={bottom_height - 180} width={50} height={45} cornerRadius={10} fill="red" />
          <Rect onClick={() => { setHoipColor("pink"); }} x={width10 * 1.5 + 50} y={bottom_height - 180} width={50} height={45} cornerRadius={10} fill="pink" />
          <Rect onClick={() => { setHoipColor("orange"); }} x={width10 * 1.5 + 110} y={bottom_height - 180} width={50} height={45} cornerRadius={10} fill="orange" />
          <Rect onClick={() => { setHoipColor("yellow"); }} x={width10 * 1.5 - 10} y={bottom_height - 130} width={50} height={45} cornerRadius={10} fill="yellow" />
          <Rect onClick={() => { setHoipColor("yellowgreen"); }} x={width10 * 1.5 + 50} y={bottom_height - 130} width={50} height={45} cornerRadius={10} fill="yellowgreen" />
          <Rect onClick={() => { setHoipColor("green"); }} x={width10 * 1.5 + 110} y={bottom_height - 130} width={50} height={45} cornerRadius={10} fill="green" />
          <Rect onClick={() => { setHoipColor("cyan"); }} x={width10 * 1.5 - 10} y={bottom_height - 80} width={50} height={45} cornerRadius={10} fill="cyan" />
          <Rect onClick={() => { setHoipColor("blue"); }} x={width10 * 1.5 + 50} y={bottom_height - 80} width={50} height={45} cornerRadius={10} fill="blue" />
          <Rect onClick={() => { setHoipColor("yellow"); }} x={width10 * 1.5 + 110} y={bottom_height - 80} width={50} height={45} cornerRadius={10} fill="black" />
        </Layer>
      }
      {bool_cakeColor &&
        <Layer>
          <Rect x={width10 * 2.9 - 25} y={bottom_height - 220} width={200} height={200} fill="#ffe9ab" cornerRadius={20} stroke={"#63beff"} />
          <Text x={width10 * 2.9 - 10} y={bottom_height - 210} text="いろをえらんでね" fontStyle='bold' fontFamily="sans-serif" fontSize={20} fill="black" />
          <Rect onClick={() => { setCakeColor("chocolate"); }} x={width10 * 2.9 - 10} y={bottom_height - 180} width={75} height={45} cornerRadius={10} fill="#7B3F00" />
          <Text x={width10 * 2.9 + 80} y={bottom_height - 170} text="チョコ" fontStyle='bold' fontFamily="sans-serif" fontSize={20} fill="black" />
          <Rect onClick={() => { setCakeColor("strawberry"); }} x={width10 * 2.9 - 10} y={bottom_height - 130} width={75} height={45} cornerRadius={10} fill="#b45460" />
          <Text x={width10 * 2.9 + 80} y={bottom_height - 120} text="いちご" fontStyle='bold' fontFamily="sans-serif" fontSize={20} fill="black" />
          <Rect onClick={() => { setCakeColor("normal"); }} x={width10 * 2.9 - 10} y={bottom_height - 80} width={75} height={45} cornerRadius={10} fill="white" />
          <Text x={width10 * 2.9 + 80} y={bottom_height - 70} text="ふつう" fontStyle='bold' fontFamily="sans-serif" fontSize={20} fill="black" />
        </Layer>
      }
    </Stage>

  );
}


export default Design;
