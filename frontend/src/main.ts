const app = document.querySelector<HTMLDivElement>('#root')!

app.innerHTML = `
  <div class="container">
    
    <section class="hero">
      <h1>Sistema de Monitoreo Oceanográfico</h1>
      <p>Proyecto de tesis - Erika Mellao</p>
    </section>

    <section>
      <h2>Sobre el proyecto</h2>
      <p>
        Este proyecto propone un sistema de software dual para la adquisición,
        almacenamiento y visualización de datos oceanográficos y estados de instrumentos.
      </p>
    </section>

    <section>
      <h2>Aplicación móvil</h2>
      <p>
        Conexión mediante Bluetooth Low Energy (BLE) para verificar el estado del instrumento
        y visualizar datos en terreno.
      </p>
    </section>

    <section>
      <h2>Aplicación web</h2>
      <p>
        Recepción de datos vía USB/Serial con visualización en dashboards y generación de reportes.
      </p>
    </section>

    <section>
      <h2>Componentes del sistema</h2>
      <table>
        <tr>
          <th>Componente</th>
          <th>Conexión</th>
          <th>Función</th>
        </tr>
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

  </div>
`