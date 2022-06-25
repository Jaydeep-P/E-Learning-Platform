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
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/user', {
                        credentials: 'include',
                    });

                    const content = await response.json();

                    console.log(content)
                    if(content.name=='student'){
                      router.push(`/student/${content.id}`)
                    }
                    else if(content.name=='teacher'){
                      router.push(`/teacher/${content.id}`)
                    }
                    else if(content.name=='admin'){
                      router.push(`/admin`)
                    }
                    // setMessage(`Hi ${content.name}`);
                    setAuth(true);
                } catch (e) {
                  console.error(e)
                 // router.push(`/login`)
                }
            }
        )();
    });

    return (
     <>
     <div>
      <div className={styles.container}>
       <nav className="navbar navbar-light bg-light justify-content-between relative">
        <div className={styles.logo}>

        </div>
    <form className="form-inline">
     
      <button className="btn btn-outline-success my-2 my-sm-0 m-5" type="login"><Link href="/login">
      <a>Login</a>
    </Link></button>
    </form>
  </nav>
  </div>
  <div className='text-center'>
  <p>
  Tinkerhat Innovation Foundation (TIF) is a Sec 8 not for profit company registered under the Companies Act 2013. TIF works in education with focus on improving learning experiences for children in public education system. Our innovative and sustainable STEAM (Science, Technology, Engineering, Arts, Math) programs are designed to improve scientific temperament and create environment for interactive and fun based learning experience.
  </p>
  <p>
  We work in collaborations with CSR foundations, I/NGOs, Government Departments to implement STEAM program in schools.
  </p>
  </div>
      </div>
     </>
    )
}
 