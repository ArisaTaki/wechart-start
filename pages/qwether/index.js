const {
    threedays
} = require("../../utils/api")

// pages/qwether/index.js
const API = require('../../utils/api')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        longitude: null,
        latitude: null,
        markers: [],
        threedays: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 在小程序中发送https请求
        wx.getLocation({
            type: 'wgs84',
            success:(res) => {
                this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    markers: [{
                        id: "0",
                        latitude: res.latitude,
                        longitude: res.longitude,
                        iconPath: "/static/images/location.png",
                        width: 40,
                        height: 40,
                        callout: {
                            'display': 'ALWAYS',
                            'footSize': '30rpx',
                            'content': "I'm here",
                            'padding': '0 0 5rpx #333',
                            'borderRadius': '4rpx'
                        }
                    }]
                })

                let data = {
                    location: res.longitude + ',' + res.latitude
                }
                API.threedays(data).then((res) => {
                    console.log(res)
                    if (res.code === "200") {
                        // 成功
                        console.log('success')
                        this.setData({
                            threedays: res.daily
                        })
                    } else {
                        console.log('fail')
                        wx.showToast({
                            title: '正在获取天气数据'
                        })
                    }
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})