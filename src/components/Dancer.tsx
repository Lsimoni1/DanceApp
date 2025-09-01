import { Circle } from "react-konva";

interface DancerProps {
    x: number;
    y: number; 
    color?: string;
    name?: string;
    isPreview?: boolean; //true when following cursor before placement
}

const Dancer = ({x, y, color = "red", isPreview = false}: DancerProps) => {
    return (
        <Circle
            x={x}
            y={y}
            radius={12.5}
            fill={isPreview ? "rgba(255, 0 , 0, 0.5)" : color} //transparent if preview
        />
    );
};

export default Dancer;