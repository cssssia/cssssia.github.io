import "./Header.css";
import { Link } from "react-router-dom";

function Header(){

    return(
        <div>
            <header className = "header">
                <Link to='/'>
                	<a>home</a>
                </Link>
                <Link to='/resume'>
                  <a>resume</a>
                </Link>
                <Link to='/projects'>
                  <a>projects</a>
                </Link>
            </header>
        </div>
    );

}

export default Header;