import { Layer, Line, Text } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';

type line = {
  tool: string;
  points: number[];
  color: string;
};

export class Paint {
lines: line[];
isDrawing: Boolean;
color: string;

constructor(l: line[]){
  this.lines = l;
  this.isDrawing = false;
  this.color = "black";
}
  
  handleMouseDown(e: KonvaEventObject<MouseEvent>,tool: string){
    this.isDrawing = true;
    const pos = e.target.getStage()?.getPointerPosition();
    if (pos === undefined || pos === null) {
      console.log("pos is undefined || null");
    } else {
      this.lines = this.lines.concat([{tool: tool, points:[pos.x, pos.y], color: this.color}]);
    }
  };

  handleMouseMove(e: KonvaEventObject<MouseEvent>){
    // no drawing - skipping
    if (!this.isDrawing) {
      return;
    }
    const pos = e.target.getStage()?.getPointerPosition();
    let lastLine = this.lines[this.lines.length - 1];
    
    if (pos === undefined || pos === null) {
      console.log("pos is undefined || null");
    } else {
      lastLine.points = lastLine.points.concat([pos.x, pos.y]);
    }

    this.lines.splice(this.lines.length - 1, 1, lastLine);
    this.lines = this.lines.concat();
  };

  handleMouseUp(){
    this.isDrawing = false;
  };

  colorChange(color: string){
    this.color = color;
  };


  render(){
        <Layer>
          <Text text="Just start drawing" x={5} y={30} />
          {this.lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={this.color}
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
      }
    }


export default Paint;