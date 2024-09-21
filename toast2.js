// this version uses the template tag
class Toast2 extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('target');
    const effect = this.getAttribute('effect')

    const template = document.getElementById('popover-template').content.cloneNode(true);
    
    const el = template.querySelector('.ns-box')
    el.id = id;
    el.classList.add(`ns-effect-${effect}`);
    
    const $inner = el.querySelector('.ns-box-inner')
    $inner.appendChild(...this.children)

    const $close = template.querySelector('.ns-close')
    $close.setAttribute('popovertarget', id);

    this.replaceWith(template)

  }
}

export const registerToast2 = () => customElements.define('x-toast2', Toast2);
