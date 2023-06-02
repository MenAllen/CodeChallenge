class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  subscribe(event, cb) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    const listener = { cb };
    this.listeners[event].push(listener);

    return {
      unsubscribe: () => {
        const index = this.listeners[event].indexOf(listener);
        if (index !== -1) {
          this.listeners[event].splice(index, 1);
        }
      }
    };
  }

  emit(event, args = []) {
    const eventListeners = this.listeners[event];
    if (!eventListeners) {
      return [];
    }

    return eventListeners.map(listener => listener.cb(...args));
  }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */