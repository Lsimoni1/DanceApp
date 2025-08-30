import { Stage, Line, Layer } from "react-konva";

interface GridProps {
  cellSize?: number;
  width: number;
  height: number;
}

const StageGrid = ({ cellSize = 50, width, height }: GridProps) => {
  const verticalLines: number[] = [];
  const horizontalLines: number[] = [];

  //vertical lines
  //what is being pushed is a line from one point to the next
  //first two params are start point, next two are end point
  for (let x = 0; x <= width; x += cellSize) {
    verticalLines.push(x);
  }

  //horizontal lines
  for (let y = 0; y <= height; y += cellSize) {
    horizontalLines.push(y);
  }

  return (
    <>
      {verticalLines.map((x) => (
        <Line points={[x, 0, x, height]} stroke="white" strokeWidth={1} />
      ))}

      {horizontalLines.map((y) => (
        <Line points={[0, y, width, y]} stroke="white" strokeWidth={1} />
      ))}
    </>
  );
};

const StageDiagram = () => {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ background: "gray" }}
    >
      <Layer>
        <StageGrid
          cellSize={25}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </Layer>
    </Stage>
  );
};

export default StageDiagram;
