import { useState } from "react";

function Hero() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section className="hero">
      <div className="brand">
        <div className="brand-icon">&lt;/&gt;</div>

        <div>
          <p className="brand-name">
            Código <span>Claro</span>
          </p>

          <p className="brand-slogan">
            APRENDÉ A PROGRAMAR PENSANDO
          </p>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            100% GRATIS · JAVASCRIPT
          </span>

          <h1>
            Dejá de mirar código.
            <span> Empezá a resolverlo.</span>
          </h1>

          <p className="hero-description">
            ¿Entendés JavaScript cuando ves el código, pero te trabás
            cuando tenés que programar solo?
          </p>

          <ul className="benefits">
            <li>✓ 5 desafíos progresivos</li>
            <li>✓ Pistas sin regalarte la respuesta</li>
            <li>✓ Soluciones explicadas paso a paso</li>
            <li>✓ Ejercicios de lógica y debugging</li>
          </ul>
        </div>

        <div className="hero-form">
          {!enviado ? (
            <>
              <h2>Recibí los 5 desafíos gratis</h2>

              <p>
                Completá tus datos y empezá a practicar.
              </p>

             <form
  action="https://assets.mailerlite.com/jsonp/2691658/forms/200704583687734766/subscribe"
  method="POST"
  target="mailerlite-oculto"
  onSubmit={() => {
    setTimeout(() => setEnviado(true), 500);
  }}
>

                <input
                  id="email"
                  type="email"
                  name="fields[email]"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                />

                <input
                  type="hidden"
                  name="ml-submit"
                  value="1"
                />

                <input
                  type="hidden"
                  name="anticsrf"
                  value="true"
                />

                <button type="submit">
                  Quiero mis 5 desafíos gratis
                </button>
              </form>

              <small>
                Sin spam. Solo contenido para ayudarte
                a programar mejor.
              </small>
            </>
          ) : (
            <div className="mensaje-exito">
              <h2>¡Revisá tu correo!</h2>

              <p>
                Si el registro se procesó correctamente,
                recibirás un email para confirmar tu
                suscripción.
              </p>

              <p>
                Confirmalo para recibir tus 5 desafíos
                de JavaScript.
              </p>
            </div>
          )}

          <iframe
            name="mailerlite-oculto"
            title="Envío a MailerLite"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;