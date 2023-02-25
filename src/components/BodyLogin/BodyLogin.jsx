import { useState, useEffect } from 'react'
import styles from './BodyLogin.module.css'

export default function BodyLogin() {
    const [email, setEmail] = useState('')
    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(window.localStorage.getItem('token') || null)
    }, [])


    const handleSubmit = (event) => {
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
        event.preventDefault()
    }
    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    return (
        token === null ? (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={handleChange} placeholder='Email' />
                    <button type="submit" onClick={handleSubmit}>Log In</button>
                </form>
            </div>
        ) : (
            <p>aaa</p>
        )
    )
}
