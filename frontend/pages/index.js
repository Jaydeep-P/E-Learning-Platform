import Image from 'next/image'
import Link from 'next/link'
import login from './login'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const [message, setMessage] = useState('');
    const [auth, setAuth] = useState(false);
    const router = useRouter();

    return (
      <div>
      <div className={styles.container}>
       <nav className="navbar navbar-light bg-light justify-content-between relative">
        <div className={styles.logo}>
          <Image src='/logotk.png' layout='fill' />
        </div>
    <form className="form-inline">
     
      <button className="btn btn-outline-success my-2 my-sm-0 m-5" type="login"><Link href="/login">
      <a>Login</a>
    </Link></button>
    </form>
      </nav>
      </div>
      <div className='text-center'>
        <div className={styles.bgImage}>
        <Image src='/bg1.png' layout='fill'/>
        </div>
      
      <div className={styles.text}>
      <p>
      Tinkerhat Innovation Foundation (TIF) is a Sec 8 not for profit company registered under the Companies Act 2013. TIF works in education with focus on improving learning experiences for children in public education system. Our innovative and sustainable STEAM (Science, Technology, Engineering, Arts, Math) programs are designed to improve scientific temperament and create environment for interactive and fun based learning experience.
      </p>
      <p>
      We work in collaborations with CSR foundations, I/NGOs, Government Departments to implement STEAM program in schools.
      </p>
      </div>
      </div>

      <div>
            <footer className={styles.footer}>
            <center><h3>TinkerHat</h3></center>
            <div className={styles.par}>
                <div>
                    <ul className={styles.list}>
                        <li className={styles.list2}><span className="bi bi-facebook"></span><a href="https://www.facebook.com/nareshit/" target="_blank">facebook</a></li>
                        <li className={styles.list2}><span className="bi bi-envelope-open"></span><a href="https://nareshit.in/course-schedule/" target="_blank">google</a></li>
                        <li className={styles.list2}><span className="bi bi-twitter"></span><a href="https://twitter.com/nareshitech?lang=en"  target="_blank">twitter</a></li>
                        <li className={styles.list2}><span className="bi bi-youtube"></span><a href="https://www.youtube.com/user/nareshtechnologies"  target="_blank">youtube</a></li>
                    </ul>
                    
                </div>
                <div>
                    <ul className={styles.list}>
                        <li className={styles.list2}>Name:Naresh Institute</li>
                        <li className={styles.list2}>Email:info@nareshit.com</li>
                        <li className={styles.list2}>Phonenumber:+91-xxxxxxxxxx</li>
                        <li className={styles.list2}>Address : Sr nagar, Hyderabad, Telangana, India </li>
                    </ul>
                </div>

            </div>
            
        </footer>
        </div>
      
  
      </div>
    )
}
