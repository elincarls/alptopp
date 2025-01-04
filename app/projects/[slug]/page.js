import { notFound } from "next/navigation";
import ProjectDetailContent from "../../../components/ProjectDetail";

async function getProjectData(slug) {
  const res = await fetch(`http://localhost:3000/api/projects/${slug}`, { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}

const ProjectDetail = async ({ params }) => {
  const { slug } = await params;
  const projectData = await getProjectData(slug);

  return (
    <div>
      <ProjectDetailContent project={projectData} />
    </div>
  )
}

export default ProjectDetail;