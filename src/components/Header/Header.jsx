import { useState, useEffect } from 'react'
import styles from './Header.module.css'

import { useLogOut } from '@/assets/Functions/useLogOut'

import { Logo } from '@/assets/Icons/Logo'
import { AddColection } from '@/assets/Icons/AddColection'
import { Logout } from '@/assets/Icons/Logout'
import { Login } from '@/assets/Icons/Login'
import { Signin } from '@/assets/Icons/Signin'
import Tooltip from '../Tooltip/Tooltip'
import Link from 'next/link'

export default function Header() {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        setLogged(token !== null)
    }, [])


    return (
        <div id={styles.headerContainer}>
            <Logo className={styles.logo} />
            <h1 className={styles.title}>MetaRanker</h1>
            <Logo className={styles.logo} />

            {logged ? (
                <section className={styles.btnSection}>
                    <Tooltip content={'Add new Collection'} direction={'bottom'}>
                        <AddColection className={styles.btn} />
                    </Tooltip>
                    <Tooltip content={'Log Out'} direction={'bottom'}>
                        <Logout className={styles.btn} onClick={() => useLogOut()} />
                    </Tooltip>
                </section>
            ) : (
                <section className={styles.btnSection}>
                    <Tooltip content={'Log In'} direction={'bottom'}>
                        <Link href={'/login'}>
                            <Login className={styles.btn} />
                        </Link>
                    </Tooltip>
                    <Tooltip content={'Sign In'} direction={'bottom'}>
                        <Link href={'/'}>
                            <Signin className={styles.btn} />
                        </Link>
                    </Tooltip>
                </section>
            )}


        </div>
    )
}
