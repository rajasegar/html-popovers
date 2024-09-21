import './style.css'
import { registerToast } from './toast'
import { registerToast2 } from './toast2'

const app = () => {
  registerToast();
  registerToast2();
}

document.addEventListener('DOMContentLoaded', app)
