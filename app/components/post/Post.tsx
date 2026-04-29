import Link from "next/link";
import Image from "next/image";
import styles from "./post.module.css";

type Props = {
  title: string;
  imageSrc: string;
  link: string;
};

export default function Posts ({title, imageSrc, link} : Props) {
  return (
    <Link href={link}>
      <article className={styles.postContent}>
        <figure className={styles.postImage}>
          <Image
            src={imageSrc} 
            alt={title} 
            width={546} 
            height={307} 
          />
        </figure>
        <h3 className={styles.postTitle}>
          {title}
        </h3>
      </article>
    </Link>
  )
}