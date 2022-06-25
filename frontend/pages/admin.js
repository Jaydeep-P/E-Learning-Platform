import Head from 'next/head'
import styles from '../styles/Admin.module.css'
import TLeftNavbar from '../components/teachercomponents/TLeftNavbar'

export default function Admin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div>
            <TLeftNavbar/>
          </div>
          <div className={styles.form}>
          <div>
          <form className={styles.form1}>
            <div>
              <label className="form-label">TeacherName</label>
              <div>
                <input type="text" className="form-input" placeholder="enter the teacher name"  autofocus required></input>
              </div>
            </div>

            <div>
              <label className="form-label">SubjectName</label>
              <div>
                <input type="text" className="form-input" placeholder="enter the subject name" autofocus required></input>
              </div>
            </div>
          </form>
          </div>


          <div className={styles.form2}>
          <form >
            <div>
              <label className="form-label">StudentName</label>
              <div>
                <input type="text" className="form-input" placeholder="enter the student name"  autofocus required></input>
              </div>
            </div>

            <div>
              <label className="form-label">Grade</label>
              <div>
                <input type="text" className="form-input" placeholder="grade" autofocus required></input>
              </div>
            </div>
          </form>
          </div>


        </div>
        </div>
      </main>
    </div>
  )
}
