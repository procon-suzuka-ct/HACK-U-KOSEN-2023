import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { RenderImage, IMAGE } from '../components/RenderImage';
import { Drow, typeline } from "../components/Line.tsx"
import { toImage } from '../components/Cake';

function Design() {
  const width = window.innerWidth;
  const height = document.body.clientHeight;
  const width10 = width / 7;
  const height10 = height / 10;
  const stageRef = useRef<Konva.Stage>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [lines, setlines] = useState<typeline[]>([]);
  const [imgmap, setImgmap] = useState<IMAGE[]>([])
  const [cakeColor, setCakeColor] = useState<string>("");
  const fR = new RenderImage(imgmap);
  const fP = new Drow(lines);

  let dataURL: string = "";

  useLayoutEffect(() => {
    if (location.state) {
      setlines(location.state.lines);
      setImgmap(location.state.imgmap);
      setCakeColor(location.state.cakecolor);
      fR.imagemap = imgmap;
      fP.lines = lines;
    } else {
      navigate("/");
    }
    setTimeout(() => {
      const stage = stageRef.current;
      if (stage != null) {
        dataURL = stage.toDataURL();
        navigate("/confirmation", { state: { dataURL: dataURL, imgmap: fR.imagemap, lines: fP.lines, cakecolor: location.state.cakecolor, messsage: "ok" } });
      }
    }, 100)
  });
  return (
    <Stage ref={stageRef} width={window.innerWidth} height={window.innerHeight} >
      <Layer>
        {
          toImage({ direction: "front", surface: cakeColor }, width10 / 2, height10 * 2, width / 1.3, width / 1.3)
        }
        {
          fR.RenderImage()
        }
      </Layer>
      {
        fP.render()
      }
    </Stage>

  );
}


export default Design;
