import React from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { useState } from 'react';

const Drow = () => {
  const [tool, setTool] = React.useState('pen');
  const [lines, setLines] = React.useState<line[]>([]);
  const [color, setColor] = useState("black");
  const isDrawing = React.useRef(false);

  type line = {
    tool: string;
    points: number[]
  };

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;
    const pos = e.target.getStage()?.getPointerPosition();
    if (pos === undefined || pos === null) {
      console.log("pos is undefined || null");
    } else {
      setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    }
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const pos = e.target.getStage()?.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    
    if (pos === undefined || pos === null) {
      console.log("pos is undefined || null");
    } else {
      lastLine.points = lastLine.points.concat([pos.x, pos.y]);
    }

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const colorChange = (color: string) => {
    setColor(color);
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
              stroke={color}
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
};

export default Drow;