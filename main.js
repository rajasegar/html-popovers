import './style.css'
import { registerToast } from './toast'

const app = () => {
  registerToast();
}

document.addEventListener('DOMContentLoaded', app)
