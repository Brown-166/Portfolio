import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './components/ProjectPage.jsx';
import projectsData from "./projects.json"

import { useEffect } from "react";



function ProjectDetails() {
  const { projectName } = useParams();
  console.log("Nome do projeto na URL:", projectName); // Depuração
  const project = projectsData.find((p) => p.name === projectName);

  if (!project) {
    return <h2>Projeto não encontrado</h2>;
  }

  return (
    <ProjectPage
      title={project.name}
      image={project.image.main}
      desc={project.tech.main}
      techs={project.tech}
      dateBegin={project.date.begin}
      dateEnd={project.date.end}
      linkProject={project.link.project}
      linkGitHub={project.link.gitHub}
    />
  );
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/projects/:projectName" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
