import styles from './Test.module.scss';
import {useState} from 'react';
import { toFruit, toImage,toImg } from '../components/Fruit';
import {Drop} from './RenderImage';
import { Image, Stage, Layer, Text, Rect } from 'react-konva';
import Drow from './Drow';
import {IMAGE} from './RenderImage';
import { KonvaEventObject } from 'konva/lib/Node';
// １つ目のStageしか描画されない。=>仕様
// Drow, RenderImage関数をクラスで返すようにする。

const Test = () => {
  const [img, setImg] = useState<IMAGE[]>([]);
  const fD = new Drop();
  return (
    <>
      <div>
        {
          toImg(toFruit("react"), 100, 100, true)
        }
      </div>
      <div
        onDrop={(e) => {
          setImg(fD.onDrop(e, img));
        }}
        onDragOver={(e) => {
          fD.onDragOver(e);
        }}

      >
        <Stage 
            x={0}
            y={0}
            width={window.innerWidth}
            height={900}
        >
          <Layer>
            {
              fD.RenderImage(img)
            }
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default Test
