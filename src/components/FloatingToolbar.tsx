import * as React from "react";
import { Box, IconButton, Divider, Paper, Collapse } from "@mui/material";
import { useTool,  } from "../contexts/ToolContext";

// MaterialUI icon imports
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import SwapHorizontalCircleOutlineIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateLeftOutlineIcon from '@mui/icons-material/RotateLeftOutlined';
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Draggable from "react-draggable";

const FloatingToolbar = () => {
  const [open, setOpen] = React.useState(true);
  const nodeRef = React.useRef(null); 
  const { selectedTool, setSelectedTool } = useTool();

  return (
    <Draggable handle=".drag-handle" nodeRef={nodeRef}>
      <Paper
        ref={nodeRef}
        elevation={4}
        sx={{
          position: "absolute",
          top: 100,
          left: 100,
          width: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 1,
          borderRadius: 2,
        }}
      >
        {/* Drag Button */}
        <IconButton
          className="drag-handle"
          size="small"
        >
          <OpenWithOutlinedIcon />
        </IconButton>

        {/* Collapse Button */}
        <IconButton
          className="collapse-handle"
          size="large"
          onClick={() => setOpen(!open)}
        >
          {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </IconButton>
        
        {/* If toolbar is open, divider between tool and collapse/drag buttons */}
        {open ? <Divider flexItem sx={{ my: 1 }} /> : null}

        {/* Tool buttons */}
        <Collapse in={open}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              mt: 1,
            }}
          >
            {/* Add Dancers */}
            <IconButton
              onClick={() => setSelectedTool("create")}
              sx = {{color: selectedTool === "create" ? "red" : "default",
                    bgcolor: selectedTool === "create" ? "rgba(212,214,211, 0.3)" : "transparent"
                }}
            >
              { selectedTool === "create" ? <AddCircleOutlineIcon/> : <AddCircleIcon/> }
            </IconButton>

            {/* Remove Dancers */}
            <IconButton
              onClick={() => setSelectedTool("delete")}
              sx = {{color: selectedTool === "delete" ? "red" : "default",
                    bgcolor: selectedTool === "delete" ? "rgba(212,214,211, 0.3)" : "transparent"
                }}
            >
              { selectedTool === "delete" ? <RemoveCircleOutlineIcon/> : <RemoveCircleIcon/> }
            </IconButton>

            {/* Move Dancers */}
            <IconButton
              onClick={() => setSelectedTool("move")}
              sx = {{color: selectedTool === "move" ? "red" : "default",
                    bgcolor: selectedTool === "move" ? "rgba(212,214,211, 0.3)" : "transparent"
                }}
            >
              { selectedTool === "move" ? <SwapHorizontalCircleOutlineIcon/> : <SwapHorizontalCircleIcon/> }
            </IconButton>

            {/* Rotate Dancers */}
            <IconButton
              onClick={() => setSelectedTool("rotate")}
              sx = {{color: selectedTool === "rotate" ? "red" : "default",
                    bgcolor: selectedTool === "rotate" ? "rgba(212,214,211, 0.3)" : "transparent"
                }}
            >
              { selectedTool === "rotate" ? <RotateLeftOutlineIcon/> : <RotateLeftIcon/> }
            </IconButton>
          
          </Box>
        </Collapse>
      </Paper>
    </Draggable>
  );
}

export default FloatingToolbar;