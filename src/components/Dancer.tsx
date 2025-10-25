import { Circle, Group, Arrow, } from "react-konva";

interface DancerProps {
    x: number;
    y: number; 
    color?: string;
    name?: string;
    isPreview?: boolean; 
}

const Dancer = ({x, y, color = "red", isPreview = false}: DancerProps) => {
    return (
        <Group x={x} y={y} rotation={180}>
            <Circle
                radius={12.5}
                fill={isPreview ? "rgba(255, 0, 0, 0.5)" : color}
            />
            <Arrow
                points={[0, 0, 0, -20]} 
                pointerLength={5}
                pointerWidth={9}
                fill={isPreview ? "rgba(0, 0, 0, 0.5)" : color}
                stroke={isPreview ? "rgba(0, 0, 0, 0.5)" : color}
                strokeWidth={2}
            />
        </Group>
    );
};

export default Dancer;