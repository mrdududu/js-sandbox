export const debounce = <T extends (...args: any[]) => void>(fn: T, delay: number = 200) => {
  let timeout: number

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
