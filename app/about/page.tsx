import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/_Hero";

export default function About() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero
          title="About"
          description="About development activities"
          variant="about"
        />
        <section className={styles.about}>
          <div className={`${styles.aboutContainer} container`}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/about-img.png"
                alt="About Us"
                width={1152}
                height={576}
              />
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutBody}>
                <p className={styles.aboutBodyDescription}>
                Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                </p>
                <h2 className={styles.aboutBodyTitle}>モノづくりで目指していること</h2>
                <p className={`${styles.aboutBodyDescription} ${styles.aboutBodyText}`}>
                  モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。<br />
                  <br />
                  単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
                </p>
                <h3 className={styles.aboutBodySubTitle}>新しい事へのチャレンジ</h3>
                <p className={`${styles.aboutBodyDescription} ${styles.aboutBodyText}`}>
                  今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
                </p>
              </div>
              <div className={styles.aboutContact}>
                <h3 className={styles.aboutContactTitle}>Contact</h3>
                <div className={styles.aboutContactIcons}>
                  <a href="" className={styles.aboutContactIcon}>
                    <Image
                      src="/images/x-icon.png"
                      alt="X Icon"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="" className={styles.aboutContactIcon}>
                    <Image
                      src="/images/facebook-icon.png"
                      alt="Facebook Icon"
                      width={19}
                      height={30}
                    />
                  </a>
                  <a href="" className={styles.aboutContactIcon}>
                    <Image
                      src="/images/github-icon.png"
                      alt="GitHub Icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                <div className={styles.aboutContactEmail}>
                  <span>cube@web.mail.address</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}