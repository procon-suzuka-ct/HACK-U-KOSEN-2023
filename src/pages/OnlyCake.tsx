import {useLayoutEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Layer, Stage} from 'react-konva';
import Konva from 'konva';
import {IMAGE, RenderImage} from '../components/RenderImage';
import {ToImage} from '../components/Cake';
import {Drow, typeline} from "../components/Line.tsx";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dataURL = stage.toDataURL();
        navigate("/confirmation", {
          state: {
            dataURL: dataURL,
            lines: location.state.lines,
            imgmap: location.state.imgmap,
            cakecolor: location.state.cakecolor,
            messsage: "ok"
          }
        });
      }
    }, 100)
  });
  return (
    <Stage ref={stageRef} width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <ToImage
          cake={{direction: "front", surface: cakeColor}}
          x={width10 / 2}
          y={height10 * 2}
          width={width / 1.3}
          height={width / 1.3}/>
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
