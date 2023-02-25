import sendGridMailer from '@sendgrid/mail'
sendGridMailer.setApiKey(process.env.SENDGRID_API_KEY)

function sendMagicLinkEmail({ email, token }) {
    return sendGridMailer.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: "Finnish Logging In",
        html: `<a href="http://localhost:3000/api/verify?token=${token}">Log In</a>`
    })
}

module.exports = { sendMagicLinkEmail }