<template>
  <div>
    <div @tap="toMoviesDetail(index) " v-for="(item,index) in moviesArr" class="moviesContainer">
    <img class="movies_img" :src="item.images.large" alt="">
    <div class="movies_info">
      <p class="movies_name">{{item.title}}</p>
      <p class="movies_year">{{item.year}}</p>
      <p class="movies_dir">{{item.directors[0].name}}</p>    
    </div>
    <p class="movies_rating">{{item.rating.average}} </p>
  </div>
  </div>
</template>

<script>
const MOVIE_URL= 'http://t.yushu.im/v2/movie/top250'
export default {
  data(){
    return{
      moviesArr:[]
    }
  },
  beforeMount(){
    this.$fly.get(MOVIE_URL)
      .then( (response)=> {
      let moviesArr = response.data.subjects
      this.$store.dispatch('getMoivesArr',moviesArr)
      this.moviesArr = moviesArr
    })
  },
  methods:{
    toMoviesDetail(index){
      wx.navigateTo({
        url:'/pages/moviesDetail/main?index='+index
      })
    }
  }
}
</script>

<style>
.moviesContainer{
  display: flex;
  border: 1px #999 solid;
  padding: 10rpx 0;
}
.movies_img{
  height: 128rpx;
  width: 128rpx;
  margin: 0 10rpx
}
.movies_name{
  font-size: 40rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movies_year{
  font-size: 30rpx;
}
.movies_dir{
  font-size: 35rpx;
}
.movies_info{
  width: 70%;
}
.movies_rating{
  font-size: 50rpx;
  color: red;
}
</style>