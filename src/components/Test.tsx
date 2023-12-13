import * as F from '../components/Fruit';
const Test = () => {
  return (
    <div>
      <p>Draggable img</p>
      {
        F.toImg(F.toFruit("stroberry"), 100, 100, true)
      }
      <p>Dropzone div</p>
          <p>test</p>
          
    </div>
  )
}

export default Test
