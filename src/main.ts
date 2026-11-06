import './style.css'
import './bases/09-promises.ts'

import {getHeroesByOwner } from './bases/08-imp-exp'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <h1>Vite</h1>
</div>
`
console.log(getHeroesByOwner('DC'))