import ProjectItem from "../components/ProjectItem"


import { useTranslation } from 'react-i18next'
import '../i18n'

import projectsData from "../projects.json"
import { useState, useEffect } from "react"

function Home (){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(projectsData);
    }, []);
    const {t, i18n} = useTranslation();
    return(
        <div className="container p-4">
            <div className="row row-cols-3 g-2">
                {projects.map((project, index) => (
                    <ProjectItem 
                    image={project.image.main} 
                    title={t("projects."+project.name+".title")} 
                    tech={project.tech.main}
                    link={project.link.projectPage} />
                ))}
            </div>
        </div>
    )
}

export default Home