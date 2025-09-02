import * as React from "react";
import { Box, IconButton, Divider, Paper, Collapse } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import CachedIcon from '@mui/icons-material/Cached';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>

            {/* Remove Dancers */}
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>

            {/* Move Dancers */}
            <IconButton>
              <SwapHorizontalCircleIcon />
            </IconButton>

            {/* Rotate Dancers */}
            <IconButton>
              <CachedIcon />
            </IconButton>
          
          </Box>
        </Collapse>
      </Paper>
    </Draggable>
  );
}

export default FloatingToolbar;