import { Stage, Layer, Line, Text } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import { useState, useRef } from 'react';

type line = {
  tool: string;
  points: number[]
};

function Drow() {
  const [lines, setlines] = useState<line[]>([]);
  const [tool, setTool] = useState("pen");
  const isDrowing = useRef(false);

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    isDrowing.current = true;
    const pos = e.target.getStage()?.getPointerPosition()
    if (pos === undefined || pos === null) {
      console.log("pos is undefined || null");
    } else {
      setlines([...lines, { tool, points: [pos.x, pos.y] }]);
    }
  }

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isDrowing.current) {
      return;
    }
    const pos = e.target.getStage()?.getPointerPosition()
    const lastLine = lines[lines.length - 1];

    if (pos === undefined || pos === null) {
      console.log("pos is undefined || null");
    } else {
      lastLine.points = lastLine.points.concat([pos.x, pos.y]);
    }
    lines.splice(lines.length - 1, 1, lastLine);
    setlines(lines.concat());

  }

  const handleMouseUp = () => {
    isDrowing.current = false;
  }

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text text="Just start drawing" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
    </div>
  );
}

export default Drow;