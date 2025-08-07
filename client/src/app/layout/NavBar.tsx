import {DarkMode, LightMode, ShoppingCart} from "@mui/icons-material";
import {AppBar, IconButton, ListItem, Toolbar, Typography, List, Badge, Box, LinearProgress} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector } from "../store/store";
import { setDarkMode } from "./uiSlice";

const midLinks = [
    {title: 'Home', path: '/'},
    {title: 'Catalog', path: '/catalog'},
    {title: 'About', path: '/about'},
    {title: 'Contact', path: '/contact'}
]

const rightLinks = [
    {title: 'Login', path: '/login'},
    {title: 'Register', path: '/register'},
]

const navStyle = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover':{
        color: "gray.500"
    },
    '&.active': {
        color:'#baecf9'
    }
}


const NavBar = () => {
    const {isLoading, darkMode} = useAppSelector(state => state.ui);
    const dispatch = useAppDispatch();
    return (
        <AppBar position={"fixed"}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display={'flex'} alignItems={'center'}>
                    <Typography component={NavLink} sx={navStyle} variant={'h6'}>RE-STORE</Typography>
                    <IconButton onClick={() => dispatch(setDarkMode())}>
                        {darkMode? <DarkMode/> : <LightMode sx={{color : 'yellow'}}/>}
                    </IconButton>
                </Box>

                <List sx={{display: 'flex', gap: 3}}>
                    {midLinks.map(({title, path})=>(
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyle}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display={'flex'} alignItems={'center'}>
                    <IconButton size={'large'} sx={{color: 'inherit'}}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    <List sx={{display: 'flex', gap: 3}}>
                        {rightLinks.map(({title, path})=>(
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
                
            </Toolbar>
            {isLoading && (
                <Box sx={{width: '100%', height: 3, mt: 2}}>
                    <LinearProgress color="secondary" />
                </Box>
            )}
        </AppBar>
    );
};

export default NavBar;