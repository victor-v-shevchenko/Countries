import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Selector } from './components/Selector';
import ThemeSwitch, { ColorModeContext } from './components/ThemeSwitch';
import { City, Country } from './dto/NamedItem';

function App() {
  const [countries, setCountries] = useState<Country[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string>("")
  const [selectedCity, setSelectedCity] = useState<string>("")
  
  useEffect(() => {
       fetch("http://localhost:5000/countries", { mode: 'cors' })
       .then(res => res.json()).then(result => {
          setCountries(result);
          setSelectedCountry(result.at(0)?.id)
        })

    }, []
  )

  useEffect(() => {
    if (!selectedCountry){
      setSelectedCity('')
      setCities([])
      return;
    }
    fetch(`http://localhost:5000/country/${selectedCountry}/cities`, { mode: 'cors' })
    .then(res => res.json()).then(result => {
       setSelectedCity('')
       setCities(result);
       setSelectedCity(result.at(0)?.id)
     })

 }, [selectedCountry]
)

const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <Box sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'background.default',
          color: 'text.primary'
        }}>
        <Stack sx={{
          display: 'flex',
          width: '50%',
          margin: "auto",
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: ".25em",
          p: "2em",
        }}>        
          <Selector
            id="country-select"
            label='Select Country'
            options={countries}
            value = {selectedCountry}
            setValue = { setSelectedCountry }      
          />
          <Selector
            id="city-select"
            label='Select City'
            value={selectedCity}
            setValue={setSelectedCity}
            options={cities}
          />
          <ThemeSwitch/>
        </Stack>
      </Box>      
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
