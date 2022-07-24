import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keyword" content="ninjas" />
      </Head>
      <div className={styles.title}>
        <h1>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          aut corrupti quis!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          aut corrupti quis!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  );
}
