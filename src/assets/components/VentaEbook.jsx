import './VentaEbook.css';

function VentaEbook() {
  return (
    <section className="venta-ebook">
      <div className="venta-contenedor">

        <div className="venta-informacion">
          <span className="venta-etiqueta">
            GUÍA PRÁCTICA DE JAVASCRIPT
          </span>

          <h2>
            JavaScript <span>sin copiar y pegar</span>
          </h2>

          <p className="venta-descripcion">
            Dejá de mirar tutoriales y empezá a resolver
            problemas por tu cuenta.
          </p>

          <div className="venta-beneficios">
            <p>✓ 30 desafíos progresivos</p>
            <p>✓ 6 módulos de aprendizaje</p>
            <p>✓ Soluciones explicadas paso a paso</p>
            <p>✓ Ejercicios prácticos para resolver en JavaScript</p>
          </div>

          <div className="venta-precio">
            <small>Precio de lanzamiento</small>
            <h3>$9.900 ARS</h3>
          </div>

          <a
                href="https://pay.hotmart.com/J107999248H"
                target="_blank"
                rel="noopener noreferrer"
                className="venta-boton-comprar"
                >
                Comprar ebook — $9.900
                </a>

                <div className="venta-entrega">
                    <p>🔒 Compra segura a través de Hotmart</p>
                    <p>📩 Recibí el acceso por correo electrónico</p>
                    <p>📥 Descargá tu ebook en PDF una vez confirmado el pago</p>
                </div>
            </div>

        <div className="venta-portada">
          <img
            src="/Portada_Codigo_Claro_Web.png"
            alt="Portada del ebook JavaScript sin copiar y pegar"
            className="venta-imagen"
          />
        </div>

      </div>

      <div className="venta-modulos">
  <h2>¿Qué vas a aprender?</h2>
  <p>30 desafíos organizados en 6 módulos progresivos.</p>

  <div className="venta-modulos-grid">
    <div><h3>01 · Lógica condicional</h3><p>Variables, operadores y decisiones.</p></div>
    <div><h3>02 · Condiciones avanzadas</h3><p>Combiná condiciones para resolver problemas.</p></div>
    <div><h3>03 · Bucles y repeticiones</h3><p>Aprendé a utilizar for y while.</p></div>
    <div><h3>04 · Funciones</h3><p>Parámetros, return y código reutilizable.</p></div>
    <div><h3>05 · Arrays y objetos</h3><p>Organizá y manipulá información.</p></div>
    <div><h3>06 · Desafíos integradores</h3><p>Aplicá lo aprendido a problemas completos.</p></div>
  </div>
</div>
<div className="venta-metodo">
  <h2>Aprendé a programar pensando</h2>
  <p className="venta-metodo-descripcion">
    No se trata de memorizar código. Se trata de aprender
    a resolver problemas paso a paso.
  </p>

  <div className="venta-metodo-grid">
    <div>
      <span>01</span>
      <h3>Pensá</h3>
      <p>Analizá el problema antes de escribir código.</p>
    </div>

    <div>
      <span>02</span>
      <h3>Programá</h3>
      <p>Construí tu propia solución utilizando JavaScript.</p>
    </div>

    <div>
      <span>03</span>
      <h3>Probá</h3>
      <p>Ejecutá tu programa y comprobá los resultados.</p>
    </div>

    <div>
      <span>04</span>
      <h3>Corregí</h3>
      <p>Compará tu solución y aprendé de tus errores.</p>
    </div>
  </div>
</div>
<div className="venta-preview">
  <h2>Mirá el ebook por dentro</h2>

  <p className="venta-preview-descripcion">
    Descubrí cómo vas a aprender a resolver problemas
    de JavaScript paso a paso.
  </p>

  <div className="venta-preview-grid">
    <div className="venta-preview-card">
      <a
  href="/ebook-desafio.png"
  target="_blank"
  rel="noopener noreferrer"
  title="Hacé clic para ampliar la página"
>
  <img
    src="/ebook-desafio.png"
    alt="Página del ebook con el desafío Puede entrar"
  />
</a>

      <h3>01 · Entendé el problema</h3>
      <p>
        Repasá los conceptos y aprendé a analizar
        cada situación antes de programar.
      </p>
    </div>

    <div className="venta-preview-card">
     <a
  href="/ebook-solucion.png"
  target="_blank"
  rel="noopener noreferrer"
  title="Hacé clic para ampliar la página"
>
  <img
    src="/ebook-solucion.png"
    alt="Página del ebook con pistas y solución JavaScript"
  />
</a>

      <h3>02 · Aprendé de la solución</h3>
      <p>
        Compará tu código con una solución explicada
        paso a paso.
      </p>
    </div>
  </div>
</div>
<div className="venta-incluye">
  <h2>¿Qué recibís con tu compra?</h2>

  <p className="venta-incluye-descripcion">
    Todo lo que necesitás para practicar JavaScript
    y aprender a resolver problemas por tu cuenta.
  </p>

  <div className="venta-incluye-grid">
    <div className="venta-incluye-card">
      <span>📘</span>
      <h3>Ebook completo en PDF</h3>
      <p>
        30 desafíos organizados en 6 módulos,
        con dificultad progresiva.
      </p>
    </div>

    <div className="venta-incluye-card">
      <span>💡</span>
      <h3>Pistas y explicaciones</h3>
      <p>
        Aprendé a razonar antes de programar
        y comprendé cada solución.
      </p>
    </div>

    <div className="venta-incluye-card">
      <span>💻</span>
      <h3>Ejercicios prácticos</h3>
      <p>
        Problemas para resolver, probar y corregir
        utilizando JavaScript.
      </p>
    </div>

    <div className="venta-incluye-card">
      <span>🎯</span>
      <h3>Desafíos extra</h3>
      <p>
        Actividades adicionales para reforzar
        lo aprendido y ganar confianza.
      </p>
    </div>
  </div>
</div>
    
    <div className="venta-faq">
  <h2>Preguntas frecuentes</h2>

  <div className="venta-faq-lista">
    <details>
      <summary>¿Necesito saber JavaScript para empezar?</summary>
      <p>
        Es recomendable conocer los conceptos básicos de JavaScript.
        El ebook incluye repasos para ayudarte a recordar
        las herramientas que vas a utilizar.
      </p>
    </details>

    <details>
      <summary>¿Cómo recibo el ebook?</summary>
      <p>
        Recibirás el ebook en formato PDF mediante el
        sistema de entrega digital que habilitemos al comprar.
      </p>
    </details>

    <details>
      <summary>¿Puedo practicar los ejercicios en VS Code?</summary>
      <p>
        Sí. Podés escribir y ejecutar los ejercicios
        utilizando Visual Studio Code y Node.js.
      </p>
    </details>

    <details>
      <summary>¿Las soluciones están explicadas?</summary>
      <p>
        Sí. Los desafíos incluyen pistas y soluciones
        explicadas para ayudarte a comprender el razonamiento.
      </p>
    </details>

    <details>
      <summary>¿El ebook es un curso en video?</summary>
      <p>
        No. Es una guía práctica en PDF diseñada
        para aprender resolviendo desafíos.
      </p>
    </details>
  </div>
    <details>
      <summary>¿Qué pasa si el ebook no cumple mis expectativas?</summary>
      <p>
        Tenés 7 días desde la compra para solicitar un
        reembolso a través de Hotmart, según las condiciones
        de la plataforma.
      </p>
    </details>

  </div>


    </section>
  );
}

export default VentaEbook;