(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.querySelector(`table`);if(e){let t=[];e.querySelectorAll(`th`).forEach(e=>t.push(e.textContent||``)),e.querySelectorAll(`tbody tr`).forEach(e=>{e.querySelectorAll(`td`).forEach((e,n)=>{t[n]&&e.setAttribute(`data-label`,t[n])})})}}var t=document.querySelector(`#root`);t.innerHTML=`
  <nav class = "navbar">
    <div class ="logo">CIOAPP</div>
  </nav>
    <div class="contenedorTitulo">
      <img src="/blueOcean.jpg" class="imagenInicio">
      <svg class="wave" viewBox="0 0 1440 150" preserveAspectRatio="none">
        <path d="M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100 C1300,80 1400,120 1440,100 L1440,150 L0,150 Z"></path>
      </svg>
      
      <div class="contenidoTitulo">
        <h1>Sistema Híbrido para el Centro de Instrumentación Oceanográfica: Adquisición, Visualización y Almacenamiento de Datos mediante Aplicación Móvil y Web</h1>
        <p>Proyecto de tesis - Erika Mellao Jara</p>
      </div>
    </div>

    <div class="contenedorProyImg">
      <section class = "proyecto">
        <h2>Sobre el proyecto</h2>
        <p>
          Este proyecto propone un sistema de software dual para la 
          adquisición, almacenamiento, visualización de datos y 
          estados de instrumentos ocenográficos, orientado a apoyar investigaciones científicas mediante el 
          acceso oportuno y confiable a la información.
        </p>
      </section>
      <img src="/instrumento.png" alt="Instrumento oceanográfico" class="instrumentoImagen">
    </div>

    <div class="separador"></div>
    
  <div class = "contenedorApps">
    <section class= "appMovil">
      <h2>Aplicación móvil</h2>
      <p>
        Mediante tecnología Bluetooth Low Energy (BLE), se establece una conexión segura y de bajo consumo con 
        los instrumentos oceanográficos, permitiendo verificar su estado antes de iniciar la transferencia de datos. 
        La aplicación móvil recibe los datos oceanográficos junto con la información de estado del instrumento, 
        los almacena y ofrece una visualización temprana para su validación en campo.
      </p>
      <img src="/smartphone.png" alt="Teléfono" class="imagenTelefono">
    </section>

    <section class = "appWeb">
      <h2>Aplicación web</h2>
      <p>
        A través de una conexión USB/Serial, los datos son transferidos a una aplicación web que integra 
        un dashboard con gráficos temporales y un módulo de generación de reportes de estados, 
        facilitando el análisis.
      </p>
      <img src="/computador.png" alt="Computador" class="imagenComputador">
    </section>
  </div>

  <section class="funcionalidades">
      <h2>Principales funcionalidades</h2>
      <div class="funcionalidades-grid">
        
        <div class="funcionalidades-card">
          <i class="fas fa-bluetooth-b funcionalidad-icon"></i>
          <h3>Transferencia de datos vía BLE</h3>
          <p>
            Permite la comunicación inalámbrica entre los instrumentos 
            oceanográficos y la aplicación móvil mediante Bluetooth Low Energy, 
            facilitando la adquisición de datos en terreno sin necesidad de 
            conexiones físicas.
          </p>
        </div>

      <div class="funcionalidades-card">
        <i class="fas fa-database funcionalidad-icon"></i>
        <h3>Almacenamiento local de datos</h3>
        <p>
          Los datos adquiridos se almacenan directamente en el dispositivo 
          móvil, asegurando su disponibilidad inmediata incluso en entornos 
          sin conectividad y reduciendo el riesgo de pérdida de información.
        </p>
      </div>

      <div class="funcionalidades-card">
        <i class="fas fa-chart-line funcionalidad-icon"></i>
        <h3>Visualización temprana de datos</h3>
        <p>
          Permite visualizar mediciones y el estado del instrumento en tiempo 
          real en la aplicación móvil, facilitando la validación de datos y la 
          detección temprana de posibles fallas en terreno.
        </p>
      </div>

      <div class="funcionalidades-card">
        <i class="fas fa-desktop funcionalidad-icon"></i>
        <h3>Dashboard web y reportes</h3>
        <p>
          A través de una conexión USB/Serial, los datos son transferidos a 
          una aplicación web que permite su visualización mediante gráficos 
          temporales y la generación de reportes para análisis detallado.
        </p>
      </div>
    </div>
  </section>

  <section class="beneficios">
    <h2>Beneficios</h2>
    <div class="beneficios-grid">
      <div class="beneficio-card">
        <i class="fas fa-clock beneficio-icon"></i>
        <h3>Reducción de tiempos de transferencia</h3>
        <p>La automatización del proceso elimina la intervención
          manual, permitiendo que los datos estén disponibles 
          casi en tiempo real.
        </p>
      </div>

      <div class="beneficio-card">
        <i class="fas fa-user-shield beneficio-icon"></i>
        <h3>Disminución de errores humanos</h3>
        <p>Reduce la manipulación manual de datos, 
        evitando pérdidas, corrupción o inconsistencias.
        </p>
      </div>

      <div class="beneficio-card">
        <i class="fas fa-exclamation-triangle beneficio-icon"></i>
        <h3>Detección temprana de fallas</h3>
        <p>Permite identificar problemas en los instrumentos o 
          en los datos directamente en terreno, evitando 
          pérdidas de campañas completas.
        </p>
      </div>

      <div class="beneficio-card">
        <i class="fas fa-cogs beneficio-icon"></i>
        <h3>Autonomía tecnológica</h3>
        <p>Dejar de depender de soluciones externas y desarrollar capacidad 
          propia para resolver desafíos específicos.
        </p>
      </div>
    </div>
  </section>

    <section class="contacto">
      <h2>Contacto</h2>
      <div class="contactoContenido">
        <i class="fas fa-paper-plane contacto-icono"></i>
        <p>¿Tienes preguntas o quieres conocer más sobre el proyecto?</p>
        <p>Escríbeme directamente a mi correo electrónico:</p>
        <div>
          <i class="fas fa-envelope"></i>
          <span>erika.mellao2301@alumnos.ubiobio.cl</span>
        </div>
      </div>
    </section>

  <footer class="footer">
    <div class="footer-container">
      
      <div class="footer-col">
        <h3>Proyecto</h3>
        <p>Sistema Híbrido para el Centro de Instrumentación Oceanográfica</p>
      </div>

      <div class="footer-col">
        <h3>Créditos</h3>
        <a href="https://www.flaticon.es/iconos-gratis/ola" target="_blank">
          Iconos por Iconixar - Flaticon
        </a>
        <a href="https://www.freepik.com" target="_blank">
          Diseñado por Freepik
        </a>
      </div>

      <div class="footer-col">
        <h3>Autora</h3>
        <p>Erika Mellao Jara</p>
        <p>&copy; 2026</p>
      </div>

    </div>
</footer>
`,e();