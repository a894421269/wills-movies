<template>
  <div class="detailContainer">
    <div>
      <img class="detail_img" :src="detailObj.detail_img" />
      <img @tap="handleMusic"  class="music_img" :src="isMusicPlay?'/static/images/music/start.png':'/static/images/music/stop.png'" alt="">
    </div>
    <div class="avatar_date">
      <img :src="detailObj.avatar" />
      <span>{{detailObj.author}}</span>
      <span>发布于</span>
      <span>{{detailObj.date}}</span>
    </div>
    <div>
      <p class="company">
        {{detailObj.title}}
      </p>
    </div>
    <button open-type='share'>转发</button>
    <div class=".collection_share">
      <img @tap="handleCollection" :src="isCollected?'/static/images/collect/collected.png':'/static/images/collect/collect.png'" alt="">
      <img @tap="handleShare" src="/static/images/share.png" alt="">
    </div>
    <p class="contents">{{detailObj.detail_content}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
  data(){
    return{
      detailObj:{},
      isCollected:false,
      isMusicPlay:false
    }
  },
  beforeMount(){
    this.index = this.$mp.query.index
    let oldStorage = wx.getStorageSync('isCollected')
    if(!oldStorage){
      wx.setStorage({
        key:'isCollected',
        data:{}
      })
    }else{
      this.isCollected = (oldStorage[this.index]?true:false)
    }
  },
  mounted(){
    this.detailObj = this.listTmp[this.$mp.query.index]
  },
    methods:{
    handleCollection(){
      let isCollected = !this.isCollected
      this.isCollected = isCollected
      let title = isCollected?'收藏成功':'取消收藏'
      wx.showToast({
        title,
        icon:'success'
      })
      let oldStorage = wx.getStorageSync('isCollected')
      oldStorage[this.index] = isCollected
      wx.setStorage({
        key : 'isCollected',
        data : oldStorage
      })
    },
    handleMusic(){
      let isMusicPlay = !this.isMusicPlay
      this.isMusicPlay = isMusicPlay
      let {dataUrl,title} = this.detailObj.music
      if(isMusicPlay){
        wx.playBackgroundAudio({
          dataUrl,
          title
        })
      }else{
        wx.pauseBackgroundAudio()
      }
    },
    handleShare(){
      wx.showActionSheet({
        itemList:[
          '分享到微博',
          '分享到微信好友',
          '分享到朋友圈'
        ]
      })
    }
  },
  computed:{
    ...mapState(['listTmp'])
  }
}

</script>

<style>
.detailContainer{
  display: flex;
  flex-direction: column;
}
.detail_img{
  width: 100%;
  height: 460rpx;
}
.avatar_date img{
  width: 64rpx;
  height:64rpx;
  vertical-align: middle;
}
.avatar_date{
  padding: 10rpx;
}
.avatar_date span{
  font-weight: 28rpx;
  margin-left: 6rpx;
}
.company{
  font-size: 64rpx;
  font-weight: bold;
  margin-left: 50rpx;
}
.collection_share img{
  width: 90rpx;
  height: 90rpx;
  margin: 20rpx;
  float: right;
}
.collection_share {
  float: right;
  margin-right:30rpx; 
}

.line{
  
}
.music_img{
  width:60rpx;
  height: 60rpx;
  position: absolute;
  top: 200rpx;
  left: 50%;
  margin-left: -30rpx;
}
</style>
