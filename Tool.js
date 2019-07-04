class Tool {
  constructor() {

  }
  // 防抖
  debounce(fn, wait) {
    // fn 处理函数 
    // wait 间隔时间
    var timeout = null
    return function () {
      if (timeout !== null) clearTimeout(timeout)
      timeout = setTimeout(fn, wait)
    }
  }
  // 节流
  throttle(fn, delay) {
    // fn 执行函数
    // delay 间隔时间
    var prev = Date.now()
    return function () {
      var context = this
      var args = arguments
      var now = Date.now()
      if (now - prev >= delay) {
        fn.apply(context, args)
        prev = Date.now()
      }
    }
  }
}
if (module && module.export) {
  module.export(Toll)
}

