import styles from './css/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contacto</h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo electrónico" required />
        <textarea name="message" rows="6" placeholder="Mensaje" required></textarea>

        <div className={styles.contactInfo}>
          <p>carlosriberadonet@gmail.com</p>
          <p><a href="tel:643814810">643814810</a></p>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
