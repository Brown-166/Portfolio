import { Link } from "react-router-dom";

function ProjectPage({title, images, desc, techs, begin, dateBegin, end, dateEnd, linkProTrans, linkProject, linkGitHub}) {
    return (
        <div className="bg-secondary p-5 container">
            <h1>{title}</h1>
            <div id="carouselExampleIndicators" className="carousel slide p-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button 
                            key={index}
                            type="button" 
                            data-bs-target="#carouselExampleIndicators" 
                            data-bs-slide-to={index} 
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"} 
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner rounded">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img 
                                src={`${import.meta.env.BASE_URL}${image}`}
                                className="d-block w-100 img-fluid" 
                                alt={`Slide ${index + 1}`} 
                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <ul className="list-group list-group-horizontal">
                {techs.map((tech, index)=>(
                    <li className="list-group-item bg-transparent border-0">
                        <Link className="btn list-group-item-action bg-transparent" to={`/Technologies/${tech}`}><h6>{tech}</h6></Link>
                    </li>
                ))}
            </ul>
            <h4>{desc}</h4>
            <p>{begin} {dateBegin}</p>
            <p>{end} {dateEnd}</p>
            <h4>{linkProTrans} <a className="link-info" href={linkProject} target="_blank" rel="noopener noreferrer">{linkProject}</a></h4>
            <h4>GitHub: <a className="link-info" href={linkGitHub} target="_blank" rel="noopener noreferrer">{linkGitHub}</a></h4>
        </div>
    );
}

export default ProjectPage;
