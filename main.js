import './style.css'
import { registerToast } from './toast'
import { registerToast2 } from './toast2'
import { registerToast3 } from './src/components/toast3'
import { registerToast4 } from './src/components/toast4'

const app = () => {
  registerToast();
  registerToast2();
  registerToast3();
  registerToast4();

  document.getElementById('btn-manual').addEventListener('click', (ev) => {
    document.getElementById('ns-popover-manual').showPopover();
  })
}

document.addEventListener('DOMContentLoaded', app)
