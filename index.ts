import './style.css';

import { of, map, Observable } from 'rxjs';

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   });
// });

// console.log('订阅之前');
// observable.subscribe({
//   next(x) {
//     console.log('got value ' + x);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
// console.log('订阅结束');

const MapFactorial = map((x: number) => {
  return x * x;
});

const MapAdd = map((x: number) => {
  return x - 1;
});

const res = of(1, 2, 3).pipe(MapFactorial, MapAdd);
console.log(res);
res.subscribe((response1) => {
  console.log('response', response1);
});
