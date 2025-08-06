import {useEffect, useState } from "react";
import type { Product } from "../models/product"
import Catalog from "../../features/catalog/Catalog";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./NavBar";


function App() {
    const[products, setPruducts] = useState<Product[]>([]);
    const [darkMode, setDarkMode] = useState(true);
    const paletteType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: (paletteType === 'light') ? '#eaeaea' : '#121212'
            }
        }
    }); 
        
    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(res => res.json())
            .then(data => setPruducts(data))
        return () => {};
    }, []);
   return (
       <>
           <ThemeProvider theme={theme}>
               <CssBaseline />
               <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Box sx={{ 
                    minHeight: '100vh',
                    backgroundColor: darkMode 
                        ? 'radial-gradient(circle, #1e3aBa, #111B27)'
                        : 'radial-gradient(circle, #baecf9, #f0f9ff)',
                        py:6
                        
                }}>
                    <Container maxWidth='xl' sx={{mt: 14}}>
                        <Catalog products={products}/>
                    </Container>
                </Box>
           </ThemeProvider>
       </>
  )
}

export default App
