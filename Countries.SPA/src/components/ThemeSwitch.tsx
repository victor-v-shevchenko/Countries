import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, Theme, useTheme } from '@mui/material';
import React from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ThemeSwitch() {
    const theme : Theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
      <Box>
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    );
  }

export default ThemeSwitch;
export {ColorModeContext} 