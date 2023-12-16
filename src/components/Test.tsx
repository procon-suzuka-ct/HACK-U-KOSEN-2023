import styles from './Test.module.scss';
import * as F from '../components/Fruit';
import RenderImg from './RenderImg';

const Test = () => {
  return (
    <div>
      <p>Draggable img</p>
      {
        F.toImg(F.toFruit("stroberry"), 100, 100, true)
      }
      <p>Dropzone div</p>
      <RenderImg />
    </div>
  )
}

export default Test
