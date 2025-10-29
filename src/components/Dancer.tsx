import { Circle, Group, Arrow, } from "react-konva";

export interface DancerProps {
    x: number;
    y: number; 
    id?: string;
    color?: string;
    name?: string;
    isPreview?: boolean; 
    rotation: number;
}

export const createDancer = (x: number, y: number) => {
    return {
        x,
        y, 
        id: crypto.randomUUID(),
        color: "red",
        isPreview: false,
        rotation: 0
    }
}

const Dancer = ({x, y, color, isPreview, rotation}: DancerProps) => {
    return (
        <Group x={x} y={y} rotation={rotation}>
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