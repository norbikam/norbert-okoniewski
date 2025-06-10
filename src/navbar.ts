import './nav.css'

document.querySelector<HTMLDivElement>('#navbar')!.innerHTML = `
<nav>
  <div class="leftnav">
        <h1>NETFLIX</h1>
        <ul class="nav__menu">
          <li>Strona główna</li>
          <li>Seriale i programy</li>
          <li>Filmy</li>
          <li>Nowe i popularne</li>
          <li>Moja lista</li>
          <li>Przeglądaj wg języka</li>
        </ul>
      </div>
      <div class="rightnav">
        <ul>
          <li>SI</li>
          <li>Dzieci</li>
          <li>NT</li>
          <li>AC</li>
        </ul>
      </div>
    </nav>
`