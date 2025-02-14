import { Link } from "react-router-dom";

function Navbar ({ptChange, enChange, mainProjects, latestProjects, technologies, showAllTech, searchBar, 
    searchButton, contact, cell}) {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom border-3 border-warning p-3">
            <div className="container-fluid">
                <div class="btn-group me-2" role="group" aria-label="Basic radio toggle button group">   
                    <input type="radio" className="btn-check" onClick={ptChange} name="btnradio" id="btnradio1" autoComplete="off" defaultChecked/>
                    <label class="btn btn-outline-primary" for="btnradio1">Pt</label>
                    <input type="radio" className="btn-check" onClick={enChange} name="btnradio" id="btnradio2" autoComplete="off"/>
                    <label class="btn btn-outline-primary" for="btnradio2">En</label>
                </div>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">{contact}</a>
                            <ul className="dropdown-menu bg-light rounded">
                                <li className="dropdown-item d-flex align-items-center">
                                    <h6 className="mb-0 me-auto">LinkedIn: <a id="linkedin" className="link-info" href="https://www.linkedin.com/in/pedro-brown-ab085a2ba/" target="_blank" rel="noopener noreferrer">linkedin.com/pedro-brown</a></h6>
                                    <button className="btn btn-light ms-2" onClick={()=>navigator.clipboard.writeText(linkedin.href)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                                        </svg>
                                    </button>
                                </li>
                                <li className="dropdown-item d-flex align-items-center">
                                    <h6 className="mb-0 me-auto">GitHub: <a id="gitHub" className="link-info" href="https://github.com/Brown-166" target="_blank" rel="noopener noreferrer">github.com/Brown-166</a></h6>
                                    <button className="btn btn-light ms-2" onClick={()=>navigator.clipboard.writeText(gitHub.href)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                                        </svg>
                                    </button>
                                </li>
                                <li className="dropdown-item d-flex align-items-center">
                                    <h6 className="mb-0 me-auto">Email: <a id="email" className="link-info" href="mailto:pedrobrown.br@gmail.com" target="_blank" rel="noopener noreferrer">pedrobrown.br@gmail.com</a></h6>
                                    <button className="btn btn-light ms-2" onClick={()=>navigator.clipboard.writeText(email.href)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                                        </svg>
                                    </button>
                                </li>
                                <li className="dropdown-item d-flex align-items-center">
                                    <h6 className="mb-0 me-auto">{cell}: <a id="tel" className="link-info" href="tel:+5521979796062" target="_blank" rel="noopener noreferrer">+55 (21) 97979-6062</a></h6>
                                    <button className="btn btn-light ms-2" onClick={()=>navigator.clipboard.writeText(tel.href)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;