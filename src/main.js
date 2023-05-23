
import { login } from './vistas/login'
import { registro } from './vistas/registro'
import { header } from './vistas/header'
import { home } from './vistas/home'
import { panel } from './vistas/panel'


document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = login.template