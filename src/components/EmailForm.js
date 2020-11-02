import React from 'react';
import styles from './EmailForm.module.css'

class EmailForm extends React.Component {
    state = {}
    render() {
        return (
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.field}>
                    <input type="text" name="name" id="name" placeholder="NAME" />
                </div>
                <div className={styles.field}>
                    <input type="email" name="email" id="email" placeholder="EMAIL" />
                </div>
                <div className={styles.field}>
                    <textarea name="message" id="message" rows="5" placeholder="MESSAGE" />
                </div>
                <div className={styles.field}>

                    <button className="button" type="submit">Send</button>
                </div>
            </form>
        )
    }
}

export default EmailForm