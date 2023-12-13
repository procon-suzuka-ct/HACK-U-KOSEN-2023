import styles from './Test.module.scss';
import * as F from '../components/Fruit';
import DropZone, { onDrop } from '../components/Drop';

const Test = () => {
  return (
    <div>
      <p>Draggable img</p>
      {
        F.toImg(F.toFruit("stroberry"), 100, 100, true)
      }
      <p>Dropzone div</p>
      <p>test</p>
      <div className={styles.container}
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          console.log("dragover");
        }}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => {
          onDrop(e);
        }}
      >
        <p>test<br /></p>
        <p>test<br /></p>
        <p>test<br /></p>
        <p>test<br /></p>
        <DropZone />
      </div>
    </div>
  )
}

export default Test
