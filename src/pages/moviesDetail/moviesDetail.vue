<template>
  <div class="moviesDetailContainer">
    <img class="movie_img" :src="moviesDetail.images.large" alt="">
    <p class="movie_name">{{moviesDetail.title}} </p>
    <div class="movie_info">
      <p class="movie_rating">评分：{{moviesDetail.rating.average}} </p>
      <p class="movie_dir">导演：{{moviesDetail.directors[0].name}} </p>
      <p class="movie_actor">主演: {{moviesDetail.casts[1].name}} , {{moviesDetail.casts[2].name}} </p>
    </div>
    <button>我要观影</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      moviesDetail:{}
    }
  },
  computed:{
    ...mapState(['moviesArr'])
  },
  beforeMount(){
    this.moviesDetail = this.moviesArr[this.$mp.query.index]
  }
}
</script>
<style>
.movie_img{
  width: 500rpx;
  height: 500rpx;
  vertical-align: middle;
  display: block;
  margin: 20rpx auto;
}
.movie_name{
  text-align: center;
  font-size: 50rpx;
  color: red;
}
.movie_info{
  margin-left: 20%;
}
.detail_content{
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-top: 30rpx;
  line-height: 50rpx;
  font-size: 26rpx;
}
button{
  width: 70%;
  height: 80rpx;
  background: green;
  line-height: 80rpx;
  color: #fff;
  font-size: 28rpx;
  margin-top: 20rpx;
}
</style>