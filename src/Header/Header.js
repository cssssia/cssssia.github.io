import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function Header(){

    return(
        <div>
            <AppBar position = "static">
                <Toolbar className = "header">
                    {/* <IconButton edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton> */}
                    <Button color="inherit" className = "button">home</Button>
                    <Button color="inherit" className = "button">resume</Button>
                    <Button color="inherit" className = "button">projects</Button>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Header;