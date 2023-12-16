import {useState} from 'react';
import { toFruit, toImg } from '../components/Fruit';
import {Drop} from './RenderImage';
import { Image, Stage, Layer, Text, Rect } from 'react-konva';
import {IMAGE} from './RenderImage';
import react from '../assets/react.svg';
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
            onClick={(e) => {
                setImg(fD.onClick(e, img, toFruit("react")));
            }}
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