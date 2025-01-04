import styles from './projectdetail.module.css'
import '../app/globals.css'

export default function ProjectDetail({ project }) {

  return (
    <>
      <h2 className={`${["page-header"]}`}>{project.title}</h2>
    </>
  );
}
