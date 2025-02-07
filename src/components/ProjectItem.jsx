import { Link } from "react-router-dom";

function ProjectItem () {
    return(
        <div className="container d-grid bg-secondary p-4 border border-4 rounded-2 border-warning">
            <img src="/main.png" className="img-fluid img-thumbnail rounded mx-auto d-block"/>
            <p>texto</p>
        </div>
    )
}

export default ProjectItem;