import Head from 'next/head'
import styles from '../../styles/Teacher.module.css'

export default function Teacher() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Teacher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Teacher
        </h1>
      </main>
    </div>
  )
}
