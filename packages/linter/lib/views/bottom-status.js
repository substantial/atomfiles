'use strict';

class BottomStatus extends HTMLElement{
  createdCallback() {
    this.classList.add('inline-block')
    this.classList.add('linter-highlight')

    this.iconSpan = document.createElement('span')
    this.iconSpan.classList.add('icon')
    this.appendChild(this.iconSpan)

    this.count = 0

    this.addEventListener('click', function(){
      atom.commands.dispatch(atom.views.getView(atom.workspace), 'linter:next-error')
    })
  }
  set count(Value) {
    if (Value) {
      this.classList.remove('status-success')
      this.iconSpan.classList.remove('icon-check')

      this.classList.add('status-error')
      this.iconSpan.classList.add('icon-x')

      this.iconSpan.textContent = Value === 1 ? '1 Issue' : `${Value} Issues`
    } else {
      this.classList.remove('status-error')
      this.iconSpan.classList.remove('icon-x')

      this.classList.add('status-success')
      this.iconSpan.classList.add('icon-check')

      this.iconSpan.textContent = 'No Issues'
    }
  }

}

module.exports = BottomStatus = document.registerElement('linter-bottom-status', {prototype: BottomStatus.prototype})
