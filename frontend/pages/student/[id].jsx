

import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Student.module.css'
import SLeftNavBar from '../studentcomponents/SLeftNavBar'
import SHeader from '../studentcomponents/SHeader'
import SContent from '../studentcomponents/SContent'
export default function Student() {
    const router = useRouter()
    const { id } = router.query
    return (
      <div className={styles.container}>
        <SLeftNavBar/>
        <SHeader/>
        <SContent/>
      </div>
    )
  
}
