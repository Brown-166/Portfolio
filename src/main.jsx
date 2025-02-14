import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './components/ProjectPage.jsx';
import projectsData from "./projects.json"

import { useEffect } from "react";


import { useTranslation } from 'react-i18next'
import './i18n'



function contactCopy(copyText) {
  navigator.clipboard.writeText(copyText);
}







function ProjectDetails() {
  const {t, i18n} = useTranslation();
  const { projectName } = useParams();
  const project = projectsData.find((p) => p.name === projectName);

  if (!project) {
    return <h2>Projeto não encontrado</h2>;
  }

  return (
    <ProjectPage
      title={t("projects."+project.name+".title")}
      images={project.images}
      desc={t("projects."+project.name+".desc")}
      techs={project.tech.all}
      begin={t("projects.begin")}
      dateBegin={project.date.begin}
      end={t("projects.end")}
      dateEnd={project.date.end}
      linkProTrans={t("projects.projectLink")}
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
