import Image from "next/image";
import styles from "./subHero.module.css";

type Props = {
  title: string;
  description: string;
  imageSrc?: string;
};

export default function SubHero({ title, description, imageSrc }: Props) {
  return (
    <section className={styles.subHero}>
      <div className={`${styles.subHeroContainer} container`}>
        <div className={styles.subHeroBody}>
          <p className=""></p>
          <h2 className={styles.subHeroTitle}>{title}</h2>
          <p className={styles.subHeroDescription}>{description}</p>
        </div>
      </div>
    </section>
  )
}