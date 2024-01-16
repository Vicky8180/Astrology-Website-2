import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
<div>

<h1>Its better move to home page !</h1>
<Link to="/" style={{ textDecoration: "none" }}>
<button>Click </button>
</Link>
</div>
    
    </Box>
  );
}