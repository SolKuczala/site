import React, { Component } from 'react';
import { navigate } from 'gatsby-link';

import simpleStyles from '../../commons/simple.module.sass';
import contactStyles from './contact.module.sass';

const encode = data => Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
;

class ContactPage extends Component {
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const form = e.target;
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': form.getAttribute('name'),
                    ...this.state
                })
            });
            navigate(form.getAttribute('action'));
        } catch (error) {
            console.log(error);
            navigate(`/oh-shit?error=${JSON.stringify(error)}`);
        }
    }

    render() {
        const handleSubmit = this.handleSubmit.bind(this);
        const handleChange = this.handleChange.bind(this);

        return (
            <section className={simpleStyles.content}>
                <h1>Dejá tu mensaje</h1>
                <form
                    name="contact"
                    method="post"
                    action="/contacto/gracias/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className={contactStyles.form}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                            No llenar este campo:&nbsp;
                            <input name="bot-field" onChange={handleChange} />
                        </label>
                    </div>

                    <div className={contactStyles.field}>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" onChange={handleChange} id="name" required />
                    </div>

                    <div className={contactStyles.field}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={handleChange} id="email" required />
                    </div>

                    <div className={contactStyles.field}>
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" onChange={handleChange} id="message" required />
                    </div>

                    <div className={contactStyles.submit}>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default ContactPage;
