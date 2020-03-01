<template>

  <div class="indexContainer">
    <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl" alt="" />
    <button v-else class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">点击获取用户信息</button>
    <p class="userName">hello {{userInfo.nickName}}</p>
    <div @tap="toDetail" class="goStudy">
      <p>
        开始使用
      </p>
    </div>
  </div>

</template>

<script>
  export default{
    data(){
      return {
        userInfo:{},
        isShow:false
      }
    },
    beforeMount(){
      this.handleGetUserInfo()
    },
    methods:{
      handleGetUserInfo(){
        wx.getUserInfo({
          success:(data)=>{
            this.userInfo = data.userInfo;
            console.log(data);
            this.isShow = true
          }
        })
      },
      getUserInfo(data){
        if(data.mp.detail.rawData){
          this.handleGetUserInfo()
        }
      },
      toDetail(){+
        wx.switchTab({
          url:'/pages/list/main'
        })
      }
    },
  }
</script>

<style>
  .indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }

  .userName{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }
  .goStudy{
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    line-height: 80rpx;
    text-align: center;
  }

  page{
    background-color:#8ed145 ;
  }

  .btn{
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin: 50rpx,0;
    line-height: 300rpx;
    font-size: 30rpx;
    align-items: center;
  }
</style>
