import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/_Hero";
import Posts from "./components/post/Post";
import styles from "./components/post/post.module.css";

const posts = [
  {
    title: "ブログ記事タイトル",
    imageSrc: "/images/news-01.png",
    link: "/blog/1"
  },
  {
    title: "ブログ記事タイトル",
    imageSrc: "/images/news-02.png",
    link: "/blog/2"
  },
  {
    title: "ブログ記事タイトル",
    imageSrc: "/images/news-03.png",
    link: "/blog/3"
  },
  {
    title: "ブログ記事タイトル",
    imageSrc: "/images/news-04.png",
    link: "/blog/4"
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero 
          title="CUBE"
          description="アウトプットしていくサイト"
          imageSrc="/images/hero-img.png"
        />
        <section className={styles.post}>
          <div className={` ${styles.postContainer} container`}>
            <div className={styles.postBody}>
              {posts.map((post) => (
                <Posts 
                  key={post.imageSrc}
                  title={post.title}
                  imageSrc={post.imageSrc}
                  link={post.link}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
