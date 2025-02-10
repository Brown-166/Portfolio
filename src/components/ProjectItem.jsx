import { Link } from "react-router-dom";

function ProjectItem () {
    return(
        <div className="col">
            <div className="container bg-secondary px-2 pt-2 pb-0 g-2 border border-4 rounded-2 border-warning">
                <button className="bg-transparent border-0 btn" type="button">
                    <figure className="figure">
                        <img src="/main.png" className="figure-img img-fluid img-thumbnail rounded mx-auto d-block p-0 border-2 border-black"/>
                        <figcaption className="figure-caption"><h3>Jogo Primary Target</h3></figcaption>
                        <figcaption className="figure-caption"><p>Godot | C# | html | javascript</p></figcaption>
                    </figure>
                </button>
            </div>
        </div>
    )
}

export default ProjectItem;