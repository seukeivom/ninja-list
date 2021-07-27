import styles from '../styles/Home.module.css'
import Head from 'next/head'

const About = () => {
  return (
    <>
    <Head>
    <title>Ninja List | About</title>
    <meta name="keywords" content="ninjas" />
  </Head>
    <div>
      <h1>About Page</h1>
      <p  className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        consectetur iusto dolore minus, in delectus corporis voluptatem
        recusandae. Vel, atque.
      </p>
      <p  className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        consectetur iusto dolore minus, in delectus corporis voluptatem
        recusandae. Vel, atque.
      </p>
    </div>
    </>
  );
};

export default About;
