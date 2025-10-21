import { Stage, Line, Layer } from "react-konva";
import { useState } from "react";
import Dancer from "./Dancer";
import { useTool } from "../contexts/ToolContext";

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
  const [dancers, setDancers] = useState<{ x: number; y: number }[]>([]);
  const [preview, setPreview] = useState<{ x: number; y: number } | null>(null);
  const { selectedTool } = useTool();

  const cellSize = 25;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const snapToGrid = (pos: number) => Math.round(pos / cellSize) * cellSize;

  const handleMouseMove = (e: any) => {
    const stage = e.target.getStage();
    const pointer = stage.getPointerPosition();
    if (pointer) {
      setPreview({
        x: snapToGrid(pointer.x),
        y: snapToGrid(pointer.y),
      });
    }
  };

  const handleClick = () => {
    console.log("stage clicked");

    if (preview && selectedTool === "delete") {
      //const dancer = dancers.find(dancer => dancer.x === preview.x && dancer.y === preview.y )

      setDancers((prev) =>
        prev.filter(
          (dancer) => !(dancer.x === preview.x && dancer.y === preview.y)
        )
      );
    }

    if (preview && selectedTool === "create") {
      const exists = dancers.some(
        (dancer) => dancer.x === preview.x && dancer.y === preview.y
      );

      if (exists) {
        console.log("helo");
        return;
      }

      setDancers([...dancers, preview]);
      setPreview(null); //stop preview until next click
    }
  };

  return (
    <Stage
      width={width}
      height={height}
      style={{ background: "gray" }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <Layer>
        <StageGrid cellSize={cellSize} width={width} height={height} />

        {dancers.map((d, i) => (
          <Dancer key={i} x={d.x} y={d.y} />
        ))}

        {selectedTool === "create" && preview && (
          <Dancer x={preview.x} y={preview.y} isPreview />
        )}
      </Layer>
    </Stage>
  );
};

export default StageDiagram;
