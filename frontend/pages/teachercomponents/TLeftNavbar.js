import React from 'react'
import styles from "../../styles/Tleftnavbar.module.css"
function TLeftNavbar() {
    

    return (
        <div className={styles.navcontainer}>
			<div className={styles.logo}>
				<h2>Navbar</h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<a href="#">Courses</a>
					</li>
					<li>
						<a href="#">Students Enrolled</a>
					</li>
					<li>
						<a href="#">Materials</a>
					</li>
					<li>
						<a href="#"> Zoom Links</a>
					</li>
                    <li>
						<a href="#"> Assignments</a>
					</li>
					<li>
						<a href="#">Logout</a>
					</li>
				</ul>
			</div>
		</div>
    )
}
export default TLeftNavbar
