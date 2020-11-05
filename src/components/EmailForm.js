import React from 'react';
import styles from './EmailForm.module.css'

class EmailForm extends React.Component {
    state = {}
    render() {
        return (
            <form method="post" name="contact" action="https://formspree.io/f/mbjpyzla">
                <div className={styles.field}>
                    <input type="text" name="name" id="name" placeholder="NAME" required />
                </div>
                <div className={styles.field}>
                    <input type="email" name="_replyto" id="email" placeholder="EMAIL" required />
                </div>
                <div className={styles.field}>
                    <textarea name="message" id="message" rows="5" placeholder="MESSAGE" required />
                </div>
                <div className={styles.field}>

                    <button className="button" type="submit">Send</button>
                </div>
            </form>
        )
    }
}

export default EmailForm