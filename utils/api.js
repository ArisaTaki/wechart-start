// 接口请求地址
const BASE_URL = "https://devapi.qweather.com/v7"
// api key
const KEY = "326144d6d6474030b8509cff304ba1ee"

// API请求方法

const request = (url, method, data) => {
    // 设置请求key
    data.key = KEY
    return new Promise((resolve, reject) => {
        wx.request({
          method: method,
          url: url,
          data: data,
          header: {
              'content-type': 'application/json'
          },
          success(res) {
              resolve(res.data)
          },
          fail(err) {
              console.log('fail to get message')
              reject(err)
          }
        })
    })
}

module.exports = {
    threedays: (data) => {
        return request(BASE_URL + '/weather/3d', 'get', data)
    }
}