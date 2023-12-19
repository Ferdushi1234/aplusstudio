import React from 'react';
import styles from "./formdetails.module.css";
import Formdetails from "@/app/components/Formdetails";
const Contact = () => {
    return (
        <>
            <div style={{marginBottom: '-6rem'}} class="bg-cover bg-center bg-[url('/APS31.avif')] bg-fixed">
                <div className={styles.container}>
                    <section className={styles.contact_section}>
                        <h2>order details</h2>
                        <p >We'd love to hear <span> from you </span></p>
                        <Formdetails />
                    </section>
                </div>
            </div>
        </>
    );
};
export default Contact;