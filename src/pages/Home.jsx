import ProjectItem from "../components/ProjectItem"


function Home (){
    return(
        <div className="container p-4">
            <div className="row row-cols-3 g-2">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />   
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}

export default Home