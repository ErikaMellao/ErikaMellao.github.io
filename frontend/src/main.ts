function enhanceTable(): void {
    const table = document.querySelector('table');
    if (table) {
        const headers: string[] = [];
        const ths = table.querySelectorAll('th');
        ths.forEach(th => headers.push(th.textContent || ''));
        
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, index) => {
                if (headers[index]) {
                    cell.setAttribute('data-label', headers[index]);
                }
            });
        });
    }
}

const app = document.querySelector<HTMLDivElement>('#root')!

app.innerHTML = `
  <nav class = "navbar">
    <div class ="logo">CIOAPP</div>
    <ul class="nav-links">
      <a href="Proyecto">Sobre nosotros</a>
      <a href="AplicaciónMovil">Aplicación Móvil</a>
      <a href="AplicaciónWeb">Aplicación Web</a>
    </ul>
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
          Este proyecto propone un sistema de software dual para la adquisición,
          almacenamiento y visualización de datos oceanográficos y estados de instrumentos.
        </p>
      </section>
      <img src="/instrumento.png" alt="Instrumento oceanográfico" class="instrumentoImagen">
    </div>
    
  <div class = "contenedorApps">
    <section class= "appMovil">
      <h2>Aplicación móvil</h2>
      <p>
        Conexión mediante <strong>Bluetooth Low Energy (BLE)</strong> para verificar el estado del instrumento
        y visualizar datos en terreno.
      </p>
    </section>

    <section class = "appWeb">
      <h2>Aplicación web</h2>
      <p>
        Recepción de datos vía <strong>USB/Serial</strong> con visualización en dashboards y generación de reportes.
      </p>
    </section>
  </div>


    <section>
      <h2>Componentes del sistema</h2>
      <table>
        <thead>
          <tr>
            <th>Componente</th>
            <th>Conexión</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Instrumento oceanográfico</td>
            <td>Sensores físicos</td>
            <td>Genera datos científicos</td>
          </tr>
          <tr>
            <td>App móvil</td>
            <td>Bluetooth (BLE)</td>
            <td>Verificación y descarga de datos</td>
          </tr>
          <tr>
            <td>App web</td>
            <td>USB / Serial</td>
            <td>Visualización y análisis</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Desafíos</h2>
      <ul>
        <li>Transferencia de datos en paquetes pequeños</li>
        <li>Pérdida de conexión BLE</li>
        <li>Integridad y validación de datos</li>
        <li>Sincronización entre dispositivos</li>
      </ul>
    </section>

    <footer class="footer">
      <a href="https://www.flaticon.es/iconos-gratis/ola" title="ola iconos">Ola iconos creados por iconixar - Flaticon</a>
      <a href="https://www.freepik.com" target="_blank"> Diseñado por Freepik </a>
    </footer>
`
enhanceTable()