import "./Header.css";
import { Link } from "react-router-dom";

function Header(){

    return(
        <div>
            <header className = "header">
                <Link to='/'>
                	<a>about me</a>
                </Link>
                <Link to='/codeProjects'>
                  <a>code projects</a>
                </Link>
                <Link to='/gameProjects'>
                  <a>game projects</a>
                </Link>
                <Link to='/art'>
                  <a>art</a>
                </Link>
                <Link to='/resume'>
                  <a>resume</a>
                </Link>
                <Link to='/portfolio'>
                  <a>portfolio</a>
                </Link>
                <Link to='/contact'>
                  <a>contact</a>
                </Link>
            </header>
        </div>
    );

}

export default Header;