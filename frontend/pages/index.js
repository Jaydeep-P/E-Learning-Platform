import Head from 'next/head'
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
                  router.push(`/login`)
                }
            }
        )();
    });

    return (
        <div>
            {message}
        </div>
    )
}
