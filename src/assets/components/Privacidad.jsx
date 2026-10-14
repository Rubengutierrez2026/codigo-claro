
import { Link } from 'react-router-dom';

function Privacidad() {
  return (
    <main style={{
      background: '#071426',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '50px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <article style={{
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.8'
      }}>
        <Link to="/" style={{ color: '#62c5ff' }}>
          ← Volver a Código Claro
        </Link>

        <h1>Política de privacidad</h1>
        <p>Última actualización: 14 de octubre de 2026</p>

        <p>
          Código Claro es un emprendimiento personal dedicado
          a ofrecer recursos educativos sobre programación.
        </p>

        <h2>1. Responsable de los datos</h2>
        <p>
          Responsable: RUBEN DARIO GUTIERREZ
          <br />
          Domicilio de contacto: BUENOS AIRES, ARGENTINA
          <br />
          Email: holacodigoclaro@gmail.com
        </p>

        <h2>2. Datos que recopilamos</h2>
        <p>
          Recopilamos tu dirección de correo electrónico,
          información de suscripción y el consentimiento
          que proporcionás mediante nuestros formularios.
        </p>

        <h2>3. Para qué utilizamos tus datos</h2>
        <p>
          Utilizamos tu correo para enviarte los recursos
          gratuitos solicitados y, cuando lo hayas autorizado,
          consejos de programación y ofertas de nuestros productos.
        </p>

        <h2>4. MailerLite</h2>
        <p>
          Utilizamos MailerLite para gestionar suscripciones
          y enviar correos electrónicos. Este servicio puede
          procesar información técnica relacionada con la
          suscripción y la interacción con los mensajes.
        </p>

        <h2>5. Consentimiento y baja</h2>
        <p>
          Podés retirar tu consentimiento para recibir
          comunicaciones promocionales en cualquier momento,
          utilizando el enlace de baja de nuestros correos
          o escribiéndonos al correo de contacto.
        </p>

        <h2>6. Tus derechos</h2>
        <p>
          Podés solicitar acceso, rectificación, actualización
          o supresión de tus datos personales, según corresponda.
          Para hacerlo, comunicate con el responsable.
        </p>

        <h2>7. Conservación y seguridad</h2>
        <p>
          Conservamos los datos durante el tiempo necesario
          para las finalidades informadas y las obligaciones
          legales aplicables. Adoptamos medidas razonables
          para proteger la información.
        </p>

        <h2>8. Actualizaciones</h2>
        <p>
          Esta política puede actualizarse cuando cambien
          nuestros servicios o el tratamiento de datos.
        </p>
      </article>
    </main>
  );
}

export default Privacidad;
