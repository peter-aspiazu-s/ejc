import { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()


type Data = {
    message: {}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    try {
        let nodemailer = require('nodemailer')
        const password = process.env.PASSWORD
        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'mail.ejc-home.com',
            auth: {
                user: 'ejc@ejc-home.com',
                pass: password,
            },
            secure: true,
            tls: {
                rejectUnauthorized: false
            }
        })
        
        const mailData = {
            from: 'ejc@ejc-home.com',
            to: 'acaguana@ejc-home.com, mloja@ejc-home.com, sales@ejc-home.com',
            subject: `Message From ${req.body.name}`,
            text: `${req.body.message} | Sent from: ${req.body.email}`,
            html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
        }
    
        await transporter.sendMail(mailData, (err: string, info: {}) => {
            if(err){
                console.log(err)
            } else{
                console.log(info)
                res.status(200).json({ message: mailData })
            }
        })
    
    } catch (error) {
        console.log(error)
    }
    
}