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

function handleScroll(): void {
    const scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
}

function addScrollButton(): void {
    const button = document.createElement('div');
    button.className = 'scroll-top';
    button.innerHTML = '↑';
    button.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.appendChild(button);
}

const app = document.querySelector<HTMLDivElement>('#root')!

app.innerHTML = `
  <div class="container">
    
    <div class="header">
      <h1>Sistema de Monitoreo Oceanográfico</h1>
      <p>Proyecto de tesis - Erika Mellao</p>
    </div>

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
        Conexión mediante <strong>Bluetooth Low Energy (BLE)</strong> para verificar el estado del instrumento
        y visualizar datos en terreno.
      </p>
    </section>

    <section>
      <h2>Aplicación web</h2>
      <p>
        Recepción de datos vía <strong>USB/Serial</strong> con visualización en dashboards y generación de reportes.
      </p>
    </section>

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
      \dative
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

enhanceTable()
addScrollButton()
window.addEventListener('scroll', handleScroll)
handleScroll()