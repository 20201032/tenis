import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({toggleTheme}){
    return(
        <div className="navbar">
            <nav>
            <Link to="/" className='brand'><h1>ATP TOUR TOP 20</h1></Link> 
			<Link to="/">Home</Link>
			<Link to="/contact">Contact</Link>  
            <button className="btn" onClick={toggleTheme}>
            toggle dark theme
          </button>
            </nav>
          
		</div>
    )
}
export default Navbar;