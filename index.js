import Rx from 'rx'

const btn = document.querySelector('button')

Rx.Observable.fromEvent(btn, 'click')
  .subscribe(() => console.log('click'))
