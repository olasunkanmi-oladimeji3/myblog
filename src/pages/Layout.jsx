import { Outlet, Link } from "react-router-dom";

function LayoutPage(params) {
    return(
        <>
            <nav className="navbar">
                <Link to='/' className="nav-brand">Myblog</Link>
                <div>
                <Link to='/About' className="nav-link">About</Link>
                <Link to='/services' className="nav-link" >Services</Link>
                <Link to='/Contact'className="nav-link" >Contact</Link>
                </div>

            </nav>
            <div>
                <Outlet/>
            </div>
            <footer className="footer">
                <p>Footer Content</p>
            </footer>
        </>
    )
    
}

export default LayoutPage;