import {useState, useEffect} from 'react';
import { toFruit, toImg } from '../components/Fruit';
import {RenderImage} from './RenderImage';
import { Image, Stage, Layer, Text, Rect } from 'react-konva';
import {IMAGE} from './RenderImage';
// １つ目のStageしか描画されない。=>仕様
// Drow, RenderImage関数をクラスで返すようにする。

const Test = () => {
  const [img, setImg] = useState<IMAGE[]>([]);
  const fD = new RenderImage(img);

  return (
    <>
      <div>
        {
          toImg(toFruit("react"), 100, 100, true)
        }
      </div>
      <div
        onDrop={(e) => {
          fD.onDrop(e);
          setImg(fD.imagemap);
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
              fD.onClick(e, toFruit("react"));
              setImg(fD.imagemap);
            }}
        >
          <Layer>
            {
              fD.RenderImage()
            }
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default Test