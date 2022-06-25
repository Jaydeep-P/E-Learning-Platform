import Image from 'next/image'
import Link from 'next/link'
import login from './login'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
     <nav className="navbar navbar-light bg-light justify-content-between">
      <h4 classname="headinghome m-5">Tinkerhat</h4>
  <form className="form-inline">
   
    <button className="btn btn-outline-success my-2 my-sm-0 m-5" type="login"><Link href="/login">
    <a>Login</a>
  </Link></button>
  </form>
</nav>
<div className='text-center'>
<p>
Tinkerhat Innovation Foundation (TIF) is a Sec 8 not for profit company registered under the Companies Act 2013. TIF works in education with focus on improving learning experiences for children in public education system. Our innovative and sustainable STEAM (Science, Technology, Engineering, Arts, Math) programs are designed to improve scientific temperament and create environment for interactive and fun based learning experience.
</p>
<p>
We work in collaborations with CSR foundations, I/NGOs, Government Departments to implement STEAM program in schools.
</p>
</div>
    </div>
  )
}
