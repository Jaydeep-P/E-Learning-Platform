import React from 'react'
import styles from "../../styles/Tleftnavbar.module.css"
function Theader() {
    

    return (
        <div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello Teacher
					</h2>
					<p>welcome to the board.</p>
				</div>
			</div>
		</div>
    )
}
export default Theader