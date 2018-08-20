export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
export const formatDate = (date) => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

  return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
}
export const formatDateToDay = (date) => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

  return `${year}-${month}-${day}`
}
export const addMarker = (eventGps, iconUrl, title, color, size, paddingSize) => {
  let marker = {
    position: eventGps,
    icon: iconUrl,
    title: title,
    color: color,
    size: size,
    paddingSize: paddingSize
  }
  return marker
}

export const drawTripLine = (lineArr, lineColor) => {
  let polyline = {
    path: lineArr, // 设置线覆盖物路径
    isOutline: true, // 描边
    strokeColor: lineColor, //  线颜色
    strokeWeight: 6, // 线宽
    strokeStyle: 'solid', // 线样式
    lineJoin: 'round', // 折线拐点的绘制样式
    showDir: true
  }
  return polyline
}

export const formatDateForHour = (date) => {
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

  return `${hour}:${minute}`
}

export const getCircleSize = (sumOn, maxSumOn) => {
  const maxSize = 120
  const minsize = 40
  let size = 0
  if (maxSumOn === 0) {
    return {size: minsize, paddingSize: 4}
  }
  let sizeRadio = sumOn / maxSumOn
  if (sizeRadio <= (1 / 3)) {
    size = minsize
  } else {
    size = maxSize * sizeRadio
  }
  const paddingSize = 12 * (size / maxSize)
  return {size, paddingSize}
}
