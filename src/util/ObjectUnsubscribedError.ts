/**
 * 当 action 由于对象取消订阅导致非法时，则抛出该错误。
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
export class ObjectUnsubscribedError extends Error {
  constructor() {
    const err: any = super('object unsubscribed');
    (<any> this).name = err.name = 'ObjectUnsubscribedError';
    (<any> this).stack = err.stack;
    (<any> this).message = err.message;
  }
}
