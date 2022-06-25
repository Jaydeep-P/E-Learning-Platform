import React from 'react'
import styles from "../../styles/studentcomponents.module.css"
import Course1 from './coursecomponents/Course1'
import Link from 'next/link'
function SContent() {
    

    return (
        <div>
        <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2><Link href="/Course1">
      <a>Course1</a>
    </Link></h2>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Course 2</h2>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>course 3</h2>
                </div>
            </div>
        </div>
        </div>
        <div>
            <h5>Assignments</h5>
        </div>
    </div>
    )
}
export default SContent