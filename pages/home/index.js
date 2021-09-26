// pages/home/index.js

// 引入高德地图
const amap = require('../../utils/amap-cofig')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputVal: "",
        inputShowed: false,
        tips: []
    },

    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false,
            tips: []
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: "",
            tips: []
        });
    },
    // 输入事件
    inputTyping: function (e) {
        if (e.detail.value === '') {
            this.setData({
                inputVal: '',
                tips: []
            })
        } else {
            this.setData({
                inputVal: e.detail.value
            });
            this.keyword(e.detail.value)
        }
    },

    // 根据输入的关键字调用高德地图api
    keyword: function (keyword) {
        const that = this
        amap.map.getInputtips({
            keywords: keyword,
            location: that.data.longitude + ',' + that.data.latitude,
            success: (res) => {
                console.log(res)
                if (res && res.tips) {
                    this.setData({
                        tips: res.tips
                    })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 获取经纬度
        this.setData({
            'latitude': wx.getStorageSync('latitude'),
            'longitude': wx.getStorageSync('longitude')
        })

        // 逆地址解析
        amap.map.getRegeo({
            success: res => {
                console.log(res)
                res[0].iconPath = '/static/images/location.png',
                    this.setData({
                        'markers': res
                    })
            },
            fail: function (err) {
                console.log(err)
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