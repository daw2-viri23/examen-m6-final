import { login } from './vistas/login'
import { registro } from './vistas/registro'
import { header } from './vistas/header'
import { home } from './vistas/home'
import { panel } from './vistas/panel'

//se encarga de situarse en el header del html principal y inyecta el contenido del template del js llamado header
document.querySelector('header').innerHTML = header.template
//ejecuta el script de header.js
header.script()
//se encarga de situarse en el main del html principal y inyecta el contenido del template del js llamado login
document.querySelector('main').innerHTML = login.template
//me situo encima del id llamado pane y detecto el evento del click y justo despues del evento inyecto el contenido del template del js llamado panel
document.querySelector('#panel').addEventListener("click", ()=>{
    document.querySelector('main').innerHTML = panel.template
})
//me situo encima del id llamado login y detecto el evento del click y justo despues del evento inyecto el contenido del template del js llamado login
document.querySelector('#login').addEventListener("click", ()=>{
    document.querySelector('main').innerHTML = login.template
})
//me situo encima del id llamado registro y detecto el evento del click y justo despues del evento inyecto el contenido del template del js llamado registro
document.querySelector('#registro').addEventListener("click", ()=>{
    document.querySelector('main').innerHTML = registro.template
})