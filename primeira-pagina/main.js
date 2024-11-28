import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Versionando minha aplição web<h1>
    <img src="https://s3.static.brasilescola.uol.com.br/be/2023/09/1-escudo-do-corinthians.jpg" >
    
  </div>
`

setupCounter(document.querySelector('#counter'))
