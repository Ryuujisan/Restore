import {DarkMode, LightMode, ShoppingCart} from "@mui/icons-material";
import {AppBar, IconButton, ListItem, Toolbar, Typography, List, Badge, Box} from "@mui/material";
import {NavLink} from "react-router-dom";

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

type Props = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const NavBar = (darkMode : Props) => {
    return (
        <AppBar position={"fixed"}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display={'flex'} alignItems={'center'}>
                    <Typography component={NavLink} sx={navStyle} variant={'h6'}>RE-STORE</Typography>
                    <IconButton onClick={() => darkMode.setDarkMode(!darkMode.darkMode)}>
                        {darkMode.darkMode ? <DarkMode/> : <LightMode sx={{color : 'yellow'}}/>}
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
        </AppBar>
    );
};

export default NavBar;