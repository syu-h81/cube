import Image from "next/image";
import styles from "./hero.module.css";

type Props = {
  title: string;
  description: string;
  imageSrc?: string;
};

export default function Hero({ title, description, imageSrc }: Props) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroBody}>
          <h2 className={styles.heroTitle}>{title}</h2>
          <p className={styles.heroDescription}>{description}</p>
        </div>
        {imageSrc && (
          <div className={styles.heroImage}>
            <Image
              src={imageSrc}
              alt="Hero Image"
              width={575}
              height={498}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}