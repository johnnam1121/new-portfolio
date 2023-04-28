import { Container, Grid, Typography, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import Landing from '../components/Landing'
import SideBar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import '../pages/AboutPage.css'
import Aboutme from '../components/Aboutme'
import SlideTransition from '../components/SlideTransition'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8495A5',
    },
    secondary: {
      main: '#e5e5e5',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    h1: {
      color: '#e5e5e5',
      fontSize: '10vh'
    },
    h2: {
      color: 'blue',
    },
    h3: {
      color: 'green',
    },
    h4: {
      color: 'red',
    },
    h5: {
      color: 'blue',
    },
    h6: {
      color: '#e5e5e5',
      fontSize: '3vh'
    },
    body1: {
      color: '#e5e5e5',
      fontSize: '2.3vh'
    },
  },
});
//#4D525F smoky blue-gray shade
//#536878 medium slate blue color

function AboutPage() {
  return (
    <SlideTransition>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Box className='remove'>
            <SideBar />
          </Box>
          <Aboutme />
        </Container>
      </ThemeProvider>
    </SlideTransition>
  )
}

export default AboutPage