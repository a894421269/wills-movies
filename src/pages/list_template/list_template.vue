<template>
  <div @tap="toDetail" class="tmpContainer">
    <div class="avatar_date">
      <img :src="item.avatar" />
      <span>{{item.date}}</span>
    </div>
    <div>
      <p class="company">{{item.title}}</p>
      <img class="detail_img" :src="item.detail_img" />
      <div class="content">{{item.detail_content}}</div>
      <div class="view_star_container">
        <img src="/static/tabs/dianzan.png" />
        <span>{{item.love_count}}</span>
        <img src="/static/tabs/pinglun.png"  />
        <span>{{item.attention_count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
 export default{
   props:[
     'item',
     'index'
   ],
   methods:{
     toDetail(){
       wx.navigateTo({
         url:"/pages/detail/main?index="+this.index
       })
     }
   }
 }
</script>

<style>
  .tmpContainer{
    display: flex;
    flex-direction: column;
    border-bottom: #333333 solid 1rpx;
  }
  .avatar_date{
    padding: 10rpx;
  }
  .avatar_date img {
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
    margin-right: 10rpx;
  }
  .avatar_date span{
    font-size: 24rpx;
    color: #333;
  }
  .company{
    font-size: 40rpx;
    font-weight: bold;
    padding: 10rpx;
  }
  .detail_img{
    width: 100%;
    height: 460rpx;
  }
  .content{
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
  }
  .view_star_container img{
    width: 32rpx;
    height: 32rpx;
    vertical-align: middle;
    margin-left: 10rpx;
  }
  .view_star_container span{
    font-size: 26rpx;
    color:#333333;
    margin-left: 10rpx;
  }
</style>
