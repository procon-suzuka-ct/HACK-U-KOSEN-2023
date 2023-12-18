import styles from'./Confirmation.module.scss';
import { useState, useEffect } from 'react';
import { Stage, Layer, Image, Rect, Text, Line } from 'react-konva';
import { toFruit, toImg } from '../components/Fruit';
import { RenderImage, IMAGE } from '../components/RenderImage';
import { toImage } from '../components/Cake';
import useImage from 'use-image';
import cakes_nomal from '../assets/cakes/normal.png';
import cakes_side from '../assets/cakes/side.png';
import cakes_cross from '../assets/cakes/cross.png';
import sys_yajirushi from '../assets/system/yajirushi.png';
import sys_background from '../assets/system/background.png';
import sys_santa from '../assets/system/christmas_santa_hello.png';

function Confirmation() {
	
	const [background] = useImage(sys_background);
	const [cake_nomal] = useImage(cakes_nomal);
	const [cake_side] = useImage(cakes_side);
	const [cake_cross] = useImage(cakes_cross);
    const [yajirushi] = useImage(sys_yajirushi);
    const [santa] = useImage(sys_santa);
	const width = window.innerWidth;
  	const height = document.body.clientHeight;
  	const width10 = width / 7;
  	const height10 = height / 10;
  	const system_width = width10 * 0.8;
  	const system_height = height10 * 0.8;
  	const right_width = width - width10;
  	const bottom_height = height - height10;

	return(
		<Stage width={window.innerWidth} height={window.innerHeight} >
     		<Layer >
        		<Image image={background} x={0} y={0} width={width} height={height} />
      		</Layer>
            <Layer>
                <Text text="これでいい？" x={width10} y={height10*0.5} fontSize={height10*0.9} />
                <Rect fill='pink' x={width10*0.8} y={height10*1.4} width={width10 * 2.5} height={height10 * 2.8} cornerRadius={20} />
                <Rect fill='white' x={width10*1} y={height10*1.7} width={width10 * 2.1} height={height10 * 2} cornerRadius={20} />
                <Image image={cake_cross} x={width10*1} y={height10*1.6} width={width10 * 2.1} height={height10 * 2} />
                <Text x={width10*1.15} y={height10*3.8} text="だんめん" fontSize={height10*0.45} />
                <Rect fill='pink' x={width10*3.9} y={height10*1.5} width={width10 * 2.5} height={height10 * 2.8} cornerRadius={20} />
                <Rect fill='white' x={width10*4.1} y={height10*1.7} width={width10 * 2.1} height={height10 * 2} cornerRadius={20} />
                <Image image={cake_side} x={width10*4.1} y={height10*1.6} width={width10 * 2.1} height={height10 * 2} />
                <Text x={width10*4.7} y={height10*3.8} text="よこ" fontSize={height10*0.45} />
                <Image image={cake_nomal} x={width10*1.5} y={height10*4} width={height10 * 4} height={height10 * 4} />
                <Rect fill='#E58E4F' x={width*0.03} y={height10*7.7} width={width10 * 2} height={width10*2} cornerRadius={70} />
                <Image image={yajirushi} x={width*0.03} y={height10*7.6} width={width10 * 2} height={width10*2} />
                <Text x={width*0.09} y={height10*9.45} text="もどる" fontSize={height10*0.4} />
                <Rect fill='#E58E4F' x={width*0.68} y={height10*7.7} width={width10 * 2} height={width10*2} cornerRadius={70} />
                <Image image={santa} x={width*0.71} y={height10*7.7} width={width10 * 1.6} height={width10*1.6} />
                <Text x={width*0.75} y={height10*9.45} text="おくる" fontSize={height10*0.4} />
            </Layer>
		</Stage>
			
				
		
		
		
		
	);
}

export default Confirmation;