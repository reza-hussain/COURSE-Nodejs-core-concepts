kclass EventEmitter {
  listeners = {}; // key-value pair

  addListener(eventName, fn) {
    // If listener with the event name exists, then assign it or assign an empty array for pushing.
    this.listeners[eventName] = this.listeners[eventName] ?? [];
    this.listeners[eventName].push(fn);

    return this;
  }
  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    let listener = this.listeners[eventName];

    if (!listener) {
      return this;
    }

    for (let i = 0; i < listener?.length; i++) {
      if (listener[i] === fn) {
        listener.splice(i, 1);
        break;
      }
    }
    return this;
  }
  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] ?? [];

    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };

    this.listeners[eventName].push(onceWrapper);

    return this;
  }

  emit(eventName, ...args) {
    let funcs = this.listeners[eventName];

    if (!funcs) {
      return false;
    }

    funcs.forEach((func) => {
      return func(...args);
    });

    return true;
  }

  listenerCount(eventName) {
    const fns = this.listeners[eventName] ?? [];

    return fns.length;
  }

  rawListeners(eventName) {}
}

module.exports = EventEmitter;
