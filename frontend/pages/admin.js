import Head from 'next/head'
import styles from '../styles/Admin.module.css'

export default function Admin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Admin
        </h1>
      </main>
    </div>
  )
}
