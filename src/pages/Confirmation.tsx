import {IMAGE, UndragURLImage} from '../components/RenderImage';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Image, Layer, Rect, Stage, Text} from 'react-konva';
import {ToImage} from '../components/Cake';
import useImage from 'use-image';
import sys_yajirushi from '../assets/system/yajirushi.png';
import sys_background from '../assets/system/background.png';
import sys_santa from '../assets/system/christmas_santa_hello.png';
import { typeline } from '../components/Line';

function Confirmation() {

  const [background] = useImage(sys_background);
  const [yajirushi] = useImage(sys_yajirushi);
  const [santa] = useImage(sys_santa);
  const width = window.innerWidth;
  const height = document.body.clientHeight;
  const width10 = width / 7;
  const height10 = height / 10;
  const location = useLocation();
  const navigate = useNavigate();
  const [img, setImgmap] = useState<IMAGE[]>([]);
  const [lines, setLines] = useState<typeline[]>([]);
  const [cakeColor, setCakeColor] = useState<string>("normal");
  const [dataURL, setDataURL] = useState<string>("");

  useEffect(() => {
    if (location.state) {
      setImgmap(location.state.imgmap);
      setLines(location.state.lines);
      setCakeColor(location.state.cakecolor);
      setDataURL(location.state.dataURL);
      //downloadURI(location.state.dataURL, "test.png")
      console.log("testcolor", location.state.cakecolor);
      console.log("testlocal", cakeColor);
      console.log("dataURL", dataURL);
      console.log("imgmap", img);
    } else {
      navigate("/");
    }
  }, [location.state, cakeColor, dataURL, img, navigate]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={background} x={0} y={0} width={width} height={height}/>
      </Layer>
      <Layer>
        <Text text="これでいい？" x={width10} y={height10 * 0.5} fontSize={height10 * 0.9}/>
        <Rect fill='pink' x={width10 * 0.8} y={height10 * 1.4} width={width10 * 2.5} height={height10 * 2.8}
              cornerRadius={20}/>
        <Rect fill='white' x={width10} y={height10 * 1.7} width={width10 * 2.1} height={height10 * 2}
              cornerRadius={20}/>
        <ToImage
          cake={{direction: "cross", surface: cakeColor}}
          x={width10} y={height10 * 1.6}
          width={width10 * 2.1}
          height={height10 * 2}/>
        <Text x={width10 * 1.15} y={height10 * 3.8} text="だんめん" fontSize={height10 * 0.45}/>
        <Rect fill='pink' x={width10 * 3.9} y={height10 * 1.5} width={width10 * 2.5} height={height10 * 2.8}
              cornerRadius={20}/>
        <Rect fill='white' x={width10 * 4.1} y={height10 * 1.7} width={width10 * 2.1} height={height10 * 2}
              cornerRadius={20}/>
        <ToImage
          cake={{direction: "side", surface: cakeColor}}
          x={width10 * 4.1} y={height10 * 1.6}
          width={width10 * 2.1}
          height={height10 * 2.1}/>
        <Text x={width10 * 4.7} y={height10 * 3.8} text="よこ" fontSize={height10 * 0.45}/>
        <UndragURLImage img={
          {
            id: 0,
            scr: dataURL,
            x: width10 * 1.5,
            y: height10 * 3,
            width: width10 * 4,
            height: height * 0.6
          }}
        />
        <Rect fill='#E58E4F' x={width * 0.03} y={height10 * 7.7} width={width10 * 2} height={width10 * 2}
              cornerRadius={70}/>
        <Image onClick={() => {
          navigate("/design", {state: {imgmap: img, lines: lines, cakecolor: cakeColor, message: "return"}});
        }} image={yajirushi} x={width * 0.03} y={height10 * 7.6} width={width10 * 2} height={width10 * 2}/>
        <Text x={width * 0.09} y={height10 * 9.45} text="もどる" fontSize={height10 * 0.4}/>
        <Rect fill='#E58E4F' x={width * 0.68} y={height10 * 7.7} width={width10 * 2} height={width10 * 2}
              cornerRadius={70}/>
        <Image image={santa} x={width * 0.71} y={height10 * 7.7} width={width10 * 1.6} height={width10 * 1.6}/>
        <Text x={width * 0.75} y={height10 * 9.45} text="おくる" fontSize={height10 * 0.4}/>
      </Layer>
    </Stage>
  );
}

export default Confirmation;
