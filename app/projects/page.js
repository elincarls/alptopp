import ContentHeader from "../../components/ContentHeader"
import ProjectCard from "../../components/ProjectCard"
import styles from '../page.module.css'

async function getAllProjects() {
  const res = await fetch("http://localhost:3000/api/projects", { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}

const Projects = async () => {
  const data = await getAllProjects();

  return (
    <>
      <ContentHeader text="Projects" />
      <div className={`${styles["project-grid"]}`}>
        {data.map(project => 
          <ProjectCard
            key={project._id}
            slug={project.slug}
            title={project.title}
            description={project?.description}
            tags={project?.tags}
          />)
        }
      </div>
    </>
  )
}

export default Projects;