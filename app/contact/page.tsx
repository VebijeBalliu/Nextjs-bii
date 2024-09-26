'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_3dwwusb', 'template_bv14ddb', form.current, '6s6EcYY7A2uQ7SRmk')
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '200px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                <input type="text" name="user_name" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' }} />

                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                <input type="email" name="user_email" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc' }} />

                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
                <textarea name="message" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #ccc', height: '100px' }} />

                <input type="submit" value="Send" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
            </form>
        </div>
    );
};

export default ContactUs;
