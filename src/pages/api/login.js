// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import jwt from 'jsonwebtoken'
import { sendMagicLinkEmail } from '@/assets/Functions/mailer.js'

const USERS = [
    {
        id: 1,
        email: "diego.jeandon@gmail.com",
        name: "Sua"
    }
]

export default async (req, res) => {
    const user = USERS.find(u => u.email === req.body.email)

    if (user != null) {
        try {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                expiresIn: "5h"
            })
            await sendMagicLinkEmail({ email: user.email, token })
            return res.status(200).end()
        } catch (error) {
            return res.status(401).end()
        }
    } else {
        return res.status(404).end()
    }
}
