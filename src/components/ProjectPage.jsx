import { Link } from "react-router-dom";

function ProjectPage({title, image, desc, techs, dateBegin, dateEnd, linkProject, linkGitHub}){
    return(
        <div>
            <h1>{title}</h1>
            <img src={image}/>
            <h3>{desc}</h3>
            <ul>
                
            </ul>
            <p>Início: {dateBegin}</p>
            <p>Fim: {dateEnd}</p>
            <a href={linkProject} target="_blank">
                <h3>Projeto: {linkProject}</h3>
            </a>
            <a href={linkGitHub} target="_blank">
                <h3>GitHub: {linkGitHub}</h3>
            </a>
        </div>
    )
}

export default ProjectPage;