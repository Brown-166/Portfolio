import { Link } from "react-router-dom";

function ProjectItem ({image, title, tech, link}) {
    return(
        <div className="col">
            <div className="container bg-secondary px-2 pt-2 pb-0 g-2 border border-4 rounded-2 border-warning">
                <Link className="bg-transparent border-0 btn" to={link}>
                    <figure className="figure">
                        <img src={image} className="figure-img img-fluid img-thumbnail rounded mx-auto d-block p-0 border-2 border-black"/>
                        <figcaption className="figure-caption"><h3>{title}</h3></figcaption>
                        <figcaption className="figure-caption"><p>{tech}</p></figcaption>
                    </figure>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem;