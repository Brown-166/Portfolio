import { Link } from "react-router-dom";

function ProjectItem ({image, title, tech, link}) {
    return(
        <div className="col">
            <div className="card h-100 bg-secondary px-2 pt-2 pb-0 g-2 border border-4 rounded-2 border-warning">
                <Link className="bg-transparent border-0 btn" to={link}>
                    <img src={`${import.meta.env.BASE_URL}${image}`} className="card-img-top img-fluid img-thumbnail rounded mx-auto d-block p-0 border-2 border-black"/>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{tech}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem;