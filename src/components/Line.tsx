import { Layer, Line } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';

type typeline = {
  tool: string;
  points: number[];
  color: string;
};

export class Drow {
  lines: typeline[];
  color: string;

  constructor(l: typeline[]) {
    this.lines = l;
    this.color = "black";
  }

  handleMouseDown(e: KonvaEventObject<MouseEvent>, tool: string) {
    const pos = e.target.getStage()?.getPointerPosition();
    if (pos === undefined || pos === null) {
      console.log("pos is undefined || null");
    } else {
      //add line
      const currentline: typeline[] = [{ tool: tool, points: [pos.x, pos.y], color: this.color }];
      this.lines.push(currentline[0]);
    }
  }

  handleMouseMove(e: KonvaEventObject<MouseEvent>) {
    const pos = e.target.getStage()?.getPointerPosition();
    const lastLine = this.lines[this.lines.length - 1];

    if (pos == undefined || pos == null) {
      console.log("pos is undefined || null");
    } else {
      lastLine.points = lastLine.points.concat([pos.x, pos.y]);
    }

    this.lines.splice(this.lines.length - 1, 1, lastLine);
    this.lines = this.lines.concat();
  }

  colorChange(color: string) {
    this.color = color;
  }

  RemoveImage() {
    this.lines = this.lines.slice(0, this.lines.length - 1);
  }


  render() {
    return (
      <Layer>
        {this.lines.map((line, i) => (
          <Line
            key={i}
            points={line.points}
            stroke={line.color}
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
    );
  }
}

export type { typeline };

/*


*/
