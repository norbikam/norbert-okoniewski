import './style.css'
import '/breakingbad.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section>
        <div class="main">
          <div class="videocontainer">
            <iframe src="https://www.youtube.com/embed/VaOt6tXyf2Y?si=hXkZrzsVVxbQR95G?&autoplay=1&mute=1&playsinline=1&controls=0&loop=1"></iframe>
                  <div id="overlay">
                  <img src="/public/breakingbad.png" alt="BreakingBadLogo">
                  <div id="buttons">
                    <button id="play">Odtwórz</button>
                    <button id="more">Więcej informacji</button>
                  </div>
                  </div>
          </div>
          <div class="propositions"></div>
        </div>
      </section>
`