import Head from 'next/head'
import styles from '../styles/Login.module.css'
import { useState } from 'react';
import {useRouter} from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLogedin] = useState(false);
    const router = useRouter();

    const submit = async (e) => {
      e.preventDefault();

      let res = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({
              email,
              password
          })
      });

      res = await res.json()

      if(res.detail!=="User not found!" ){
        setLogedin(true);
      }
      

      let jwt = res.jwt;
      console.log(res)
      if(jwt){

      }
      setLogedin(true);

      if(loggedIn){
        router.push('/')
      }
      
  }
    




    return (
        <div className={styles.divL}>
         
            <form  className={styles.formL} onSubmit={submit}>
            <h1>{loggedIn?'Incorrect credentials':'Please Sign in'}</h1>
                <div>
                    <label >Email:</label>
                    <div>
                    <input type="email" size ="6" className="form-control w-75" placeholder="Email" required autofocus
                       onChange={e => setEmail(e.target.value)}
                />
                    </div>
                </div>
               <div>
                  <label className="form-label">Password:</label>
                  <div>
                  <input type="password"  size="6" className="form-control  w-75" placeholder="Password" required autofocus
                       onChange={e => setPassword(e.target.value)}
                />
                  </div>
               </div>
                <div className={styles.buttonL}>
                <button   className="w-75 btn btn-lg  btn-primary" type="submit">Sign in</button>
                </div>
            </form>
        </div>
    );
}
