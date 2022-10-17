/**
 * 1. 图片转成 Base64
 */

/** 图片转成base64 */
export function imgTransformBase64(imgUrl: string) {
  return new Promise((resolve) => {
    window.URL = window.URL || window.webkitURL
    const xhr = new XMLHttpRequest()
    xhr.open('get', imgUrl, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (this.status === 200) {
        // 得到一个blob对象
        const blob = this.response
        // 至关重要
        const oFileReader = new FileReader()
        oFileReader.readAsDataURL(blob)
        oFileReader.onloadend = function (e) {
          // 此处拿到的已经是base64的图片了,可以赋值做相应的处理
          if (e.target)
            resolve(e.target.result)
        }
      }
    }
    xhr.send()
  })
}
