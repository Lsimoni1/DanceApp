import * as React from "react";
import { Box, IconButton, Divider, Paper, Collapse } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CircleIcon from "@mui/icons-material/Circle";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import Draggable from "react-draggable";

const FloatingToolbar = () => {
  const [open, setOpen] = React.useState(true);
  const nodeRef = React.useRef(null); 

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
        {/* Drag + toggle button */}
        <IconButton
          className="drag-handle"
          size="small"
          onDoubleClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>

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
            <IconButton>
              <BrushIcon />
            </IconButton>
            <IconButton>
              <CropSquareIcon />
            </IconButton>
            <IconButton>
              <CircleIcon />
            </IconButton>
            <Divider flexItem sx={{ my: 1 }} />
            <IconButton>
              <FormatColorFillIcon />
            </IconButton>
            <Divider flexItem sx={{ my: 1 }} />
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Collapse>
      </Paper>
    </Draggable>
  );
}

export default FloatingToolbar;