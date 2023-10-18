
interface MessageProps {
    from:string;
    to:string;
    subject:string
    html:string
}

export const messageoptions = (from:string, to:string, subject:string, html:string) => {
    return {
        from: process.env.EMAIL_SMTP_USER,
        to:to,
        subject:subject,
        html:html
    }


}