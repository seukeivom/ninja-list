import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div >
      <h1 className={styles.title}>Homepage</h1>
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
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas Listing</a>
      </Link>
    </div>
    </>
  )
}
