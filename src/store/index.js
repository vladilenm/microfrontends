export function createStore() {
  let count = 0
  const subscribers = []

  return {
    get count() {
      return count
    },
    increment() {
      count++
      subscribers.forEach((fn) => fn())
    },
    subscribe(fn) {
      subscribers.push(fn)
    },
  }
}
