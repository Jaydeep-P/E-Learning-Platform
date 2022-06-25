import React from 'react'
import styles from "../../styles/Tleftnavbar.module.css"
function TContent() {
    

    return (
        <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Course 1</h2>
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
    )
}
export default TContent