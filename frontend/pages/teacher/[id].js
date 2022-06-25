import Head from 'next/head'
import styles from '../../styles/Teacher.module.css'
import TLeftNavbar from '../teachercomponents/TLeftNavbar'
import Theader from '../teachercomponents/Theader'
import TContent from '../teachercomponents/TContent'
export default function Teacher() {
  return (
    <div className={styles.container}>
      <TLeftNavbar/>
      <Theader/>
      <TContent/>
    </div>
  )
}
