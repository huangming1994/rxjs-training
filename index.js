import Rx from 'rx'

const btn = document.querySelector('button')

Rx.Observable.fromEvent(btn, 'click')
  .throttle(1000)
  .scan(count => count + 1, 0)
  .subscribe((count) => console.log(`click ${count} times`))
