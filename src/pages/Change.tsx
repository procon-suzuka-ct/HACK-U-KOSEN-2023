import {useNavigate} from "react-router-dom"
import {Image, Layer, Rect, Stage, Text} from 'react-konva';
import useImage from 'use-image';

import per_family from '../assets/person/family.png';
import sys_background from '../assets/system/background.png';

function Change() {
  const [family] = useImage(per_family);
  const [background] = useImage(sys_background);
  const width = window.innerWidth;
  const height = document.body.clientHeight;
  const width10 = width / 7;
  const height10 = height / 10;
  /*
  const system_width = width10 * 0.8;
  const system_height = height10 * 0.8;
  const bottom_height = height - height10;
  */
  const right_width = width - width10;

  const navigate = useNavigate();
  const onClickPaymentpage = () => {
    navigate("/payment");
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={background} x={0} y={0} width={width} height={height}/>
      </Layer>
      <Layer>
        <Text text="ちゅうもんするよ" x={width10 * 0.7} y={height10 * 1.2} fontSize={height10 * 0.7}/>
        <Text text="おかあさん、おとうさん" x={right_width / 2 - height10 * 1.5} y={height10 * 2}
              fontSize={height10 * 0.35} align='center'/>
        <Text text="と" x={right_width * 0.55} y={height10 * 2.5} fontSize={height10 * 0.35} align='center'/>
        <Text text="こうたいしてね！" x={right_width * 0.35} y={height10 * 3} fontSize={height10 * 0.35} align='center'/>
        <Image image={family} x={width10 * 1} y={height10 * 3.5} width={height10 * 5} height={height10 * 4}/>
        <Rect onClick={onClickPaymentpage} onTouchStart={onClickPaymentpage} fill='#BDCCA9' x={width * 0.07} y={height10 * 8.3} width={width10 * 6}
              height={width10 * 1.2} cornerRadius={70}/>
        <Text onClick={onClickPaymentpage} onTouchStart={onClickPaymentpage} x={width * 0.35} y={height10 * 8.65} text="すすむ"
              fontSize={height10 * 0.7}/>
      </Layer>
    </Stage>

  )
}

export default Change;
