import Modal from "../../../../components/Modal";
import BackNav from "../../../../components/BackNav";
import ProjectDetail from "../../../../components/ProjectDetail";
import "../../../globals.css";
import { notFound } from "next/navigation";

async function getProjectData(slug) {
  const res = await fetch(`http://localhost:3000/api/projects/${slug}`, { cache: "no-store" });
  if (!res.ok) return notFound();
  return res.json();
}

const ProjectDetailModal = async ({ params: { slug } }) => {
  const projectData = await getProjectData(slug);

  return (
    <Modal>
      <BackNav />
      <div className={`${["content"]}`}>
        <ProjectDetail project={projectData} />
      </div>
    </Modal>
  );
}

export default ProjectDetailModal;