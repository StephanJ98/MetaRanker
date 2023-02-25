// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Header from '@/components/Header/Header'
import jwt from 'jsonwebtoken'

const USERS = [
    {
        id: 1,
        email: "diego.jeandon@gmail.com",
        name: "Sua"
    }
]

export default async (req, res) => {
    const token = req.query.token
    if (token == null) return res.status(401)

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = USERS.find(u => u.id === decodedToken.userId)

        if (user != null) {
            try {
                res.send(`<script>
                            function redirect () {
                                window.localStorage.setItem("token", "${token}")
                                window.location.assign('http://localhost:3000')
                            }
                            redirect()
                        </script>`).end()
            } catch (error) {
                res.status(401).end()
            }
        }
    } catch (error) {
        res.status(401).end()
    }
}
