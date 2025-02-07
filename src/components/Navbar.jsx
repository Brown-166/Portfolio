import { Link } from "react-router-dom";

function Navbar ({ptChange, enChange, mainProjects, latestProjects, technologies, showAllTech, searchBar, 
    searchButton, contact}) {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom border-3 border-warning p-3">
            <div className="container-fluid">
                <div>
                    <button className="btn btn-dark" type="button" onClick={ptChange}>Pt</button>
                    <button className="btn btn-dark" type="button" onClick={enChange}>En</button>
                </div>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <Link className="nav-link " to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/MainProjects">{mainProjects}</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/LatestProjects">{latestProjects}</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{technologies}</a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/C#">C#</Link></li>
                            <li><Link className="dropdown-item" to="/Godot">Godot</Link></li>
                            <li><Link className="dropdown-item" to="/React">React</Link></li>
                            <li><Link className="dropdown-item" to="/Technologies">{showAllTech}</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Contact">{contact}</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" style={{width : "260px"}} type="text" placeholder={searchBar}/>
                    <button className="btn btn-primary" type="button">{searchButton}</button>
                </form>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;