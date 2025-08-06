import {DarkMode, LightMode} from "@mui/icons-material";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
type Props = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const NavBar = (darkMode : Props) => {
    return (
        <AppBar position={"fixed"}>
            <Toolbar>
                <Typography variant={'h6'}>RE-STORE</Typography>
                <IconButton onClick={() => darkMode.setDarkMode(!darkMode.darkMode)}>
                    {darkMode.darkMode ? <DarkMode/> : <LightMode sx={{color : 'yellow'}}/>}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;