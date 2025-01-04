import Link from 'next/link';
import CategoryTag from './CategoryTag'

import styles from './projectcard.module.css'

export default function ProjectCard({slug, title, description, tags}) { 
    return (
        <Link href={`/projects/${slug}`}>
        <div className={`${styles["project-card"]}`}>
            <div>
                <h2 className={`${styles["card-header"]}`}>{title}</h2>
                <p className={`${styles["description"]}`}>{description}</p>
            </div>
            <div className={`${styles["tag-section"]}`}>
                {tags?.map((tag, index) =>
                    <CategoryTag key={index} label={tag} />
                )}
            </div>
        </div>
        </Link>
    );
}