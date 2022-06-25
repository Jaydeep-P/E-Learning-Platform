

import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Student.module.css'

export default function Student() {
    const router = useRouter()
    const { id } = router.query
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Student" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1>Student 
            {id}
          </h1>
        </main>
      </div>
    )
  
}
