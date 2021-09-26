const amapFile = require('./amap-wx.130')

// 实例化高德地图
const map = new amapFile.AMapWX({
    key: "da468a3c1eb92ff032fcd1c7288ce148"
})

// 导出
module.exports = {
    map
}