// ToolContext.tsx
import React, { createContext, useContext, useState } from "react";

type Tool = "create" | "delete" | "move" | "rotate" | null;

interface ToolContextType {
  selectedTool: Tool;
  setSelectedTool: (tool: Tool) => void;
}

const ToolContext = createContext<ToolContextType | null>(null);

export const ToolProvider = ({ children }: { children: React.ReactNode })  => {
  const [selectedTool, setSelectedTool] = useState<Tool>("create");

  return (
    <ToolContext.Provider value={{ selectedTool, setSelectedTool }}>
      {children}
    </ToolContext.Provider>
  );
}

export const useTool = () => {
  const ctx = useContext(ToolContext);
  if (!ctx) throw new Error("useTool must be used inside ToolProvider");
  return ctx;
}