// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [
            '/static/images/1.jpg',
            '/static/images/2.jpg',
            '/static/images/3.jpg'
        ],
        // 是否显示轮播图下点
        indicatorDots: true,
        // 是否自动播放
        autoPlay: true,
        // 设置轮播间隔时间
        interval: 3000,
        // 每个轮播图持续播放时间
        duration: 1000,

        // 扫描结果
        scanResult: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },

    goIndex: function () {
        wx.reLaunch({
            url: '/pages/qwether/index',
        })
    },
    goToCamera: function () {
        wx.navigateTo({
            url: '/pages/test/camera',
        })
    },
    bindScan: function () {
        wx.scanCode({
            success: (res) => {
                console.log(res)
                this.setData({
                    scanResult: res.result
                })
            }
        })
    }
})