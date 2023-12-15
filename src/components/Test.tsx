import styles from './Test.module.scss';
import { toFruit, toImage } from '../components/Fruit';
import RenderImage from './RenderImg';
import { Image, Stage, Layer, Text, Rect } from 'react-konva';
import Drow from './Drow';

// １つ目のStageしか描画されない。=>仕様
// Drow, RenderImage関数をクラスで返すようにする。

const Test = () => {
  return (
    <>
      <div>
        <Stage x={0} y={0} width={window.innerWidth} height={900}>
          <Layer>
            <Rect fill='red' x={100} y={100} width={300} height={200} />
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default Test
