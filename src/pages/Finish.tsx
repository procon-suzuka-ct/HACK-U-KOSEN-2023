import styles from './Finish.module.scss';
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { Stage, Layer, Image, Rect, Text, Line } from 'react-konva';
import useImage from 'use-image';

import per_givsanta from '../assets/person/present-santa.png';
import sys_background from '../assets/system/final-background.png';

function Change() {
    const [givsanta] = useImage(per_givsanta);
    const [background] = useImage(sys_background);
    const width = window.innerWidth;
  	const height = document.body.clientHeight;
  	const width10 = width / 7;
  	const height10 = height / 10;
  	const system_width = width10 * 0.8;
  	const system_height = height10 * 0.8;
  	const right_width = width - width10;
  	const bottom_height = height - height10;

    const navigate = useNavigate();
    const onClickHomepage = () => {
        navigate("/");
    }

    return(
        <Stage width={window.innerWidth} height={window.innerHeight} >
            <Layer>
                <Image image={background} x={0} y={0} width={width} height={height} />
            </Layer>
            <Layer>
                <Text text="ちゅうもんしたよ☆" x={width10*0.7} y={height10*0.5} fontSize={height10*0.7} />
                <Text text="とってもおいしそうなけーきができたね。"  x={right_width/2-height10*2.6} y={height10*1.5} fontSize={height10*0.35}  align='center'/>
                <Text text="あとはぼくたちサンタにまかせて。"  x={right_width/2-height10*2.2} y={height10*1.8} fontSize={height10*0.35}  align='center'/>
                <Text text="クリスマスのたのしいよるに"  x={right_width/2-height10*1.85} y={height10*2.1} fontSize={height10*0.35}  align='center'/>
                <Text text="きみのところにとどけにいくよ！"  x={right_width/2-height10*2.2} y={height10*2.4} fontSize={height10*0.35}  align='center'/>
                <Image image={givsanta} x={width10*1.5} y={height10*3} width={height10 * 5} height={height10 * 5} />
                <Rect onClick={onClickHomepage} fill='#BDCCA9' x={width*0.07} y={height10*8.3} width={width10 * 6} height={width10*1.2} cornerRadius={70} />
                <Text onClick={onClickHomepage} x={width*0.35} y={height10*8.65} text="おわる" fontSize={height10*0.7} />
            </Layer>
        </Stage>
    );
}

export default Change;