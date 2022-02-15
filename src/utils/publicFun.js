export const getParams = (arr = [], obj = {}) => {
  let parStr = window.location.search.substring(1)
  if (parStr.indexOf("&") !== -1) {
    // 说明还有其他参数
    arr = parStr.split("&")
    arr.forEach(item => {
      obj[item.split("=")[0]] = item.split("=")[1]
    })
    return obj
  }
  obj[parStr.split("=")[0]] = parStr.split("=")[1]
  return obj
}
export const timestampToTime = (timestamp, format, connect='-') => {
  let date = timestamp ? new Date(timestamp) : new Date()
  const pad = n => (n < 10 ? `0${n}` : n)
  const YYYY = date.getFullYear()
  const MM = pad(date.getMonth() + 1)
  const DD = pad(date.getDate())
  const hh = pad(date.getHours())
  const mm = pad(date.getMinutes())
  const ss = pad(date.getSeconds())
  const lastStr = format.substr(-2)
  if (!lastStr)
    return {
      YYYY,
      MM,
      DD,
      hh,
      mm,
      ss
    }
  if (format === "DD") {
    return `${YYYY}${connect}${MM}${connect}${DD}`
  } else if (format === "ss") {
    return `${YYYY}${connect}${MM}${connect}${DD} ${hh}:${mm}:${ss}`
  }
}
export const isWeixin = () => {
  const wx = navigator.userAgent.toLowerCase()
  if (/micromessenger/gi.test(wx)) {
    return true
  } else {
    return false
  }
}
export const mobileType = () => {
  var u = navigator.userAgent
  var android = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1 //android终端或者uc浏览器
  var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  var iphoneX = false
  if (ios) {
    // eslint-disable-next-line no-restricted-globals
    if (screen.height == 812 || screen.height === 896) {
      //是iphoneX
      iphoneX = true
    } else {
      //不是iphoneX
    }
  }
  return {
    android,
    ios,
    iphoneX
  }
}
exports.throttle = (fn, gapTime = 1500) => {
  let lastTime = null
  return function() {
    let nowTime = +new Date()
    if (nowTime - lastTime > gapTime || !lastTime) {
      fn.apply(this, arguments)
      lastTime = nowTime
    }
  }
}
export const debounce =  (fn, interval = 300) => {
    let timeout = null
    return function () {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn.apply(this, arguments)
      }, interval)
    }
  }
  // 去除字符串所有空格
export const clearTrim = (text) => {
    return text.replace(/\s/gi, "")
  }
