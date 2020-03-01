<template>
  <div class="listContainer">
    <swiper indicator-dots indicator-color="pink" indicator-active-color="green">
      <swiper-item>
        <img src="http://img4.imgtn.bdimg.com/it/u=1413554289,3348290345&fm=26&gp=0.jpg" />
      </swiper-item>
      <swiper-item>
        <img src="http://img0.imgtn.bdimg.com/it/u=2403387568,2123159754&fm=26&gp=0.jpg" />
      </swiper-item>
      <swiper-item>
        <img src="http://img2.imgtn.bdimg.com/it/u=1383235659,2964803577&fm=26&gp=0.jpg" />
      </swiper-item>
      <swiper-item>
        <img src="http://img0.imgtn.bdimg.com/it/u=3165367342,1849153584&fm=26&gp=0.jpg" />
      </swiper-item>
    </swiper>
    <div>
      <listTmp v-for="(item,index) in listTmp" :key="index" :item="item" :index="index"/>
    </div>
  </div>
</template>

<script>
  import listTmp from '../list_template/list_template.vue'
  import {mapState} from 'vuex'
  export default{
    components:{listTmp},
	beforeMount(){
		//分发action修改状态
		this.$store.dispatch('getList')
	},

	computed:{
		//映射状态到本组件
		...mapState(['listTmp'])
	}

  }
</script>

<style>
  .listContainer swiper{
    width: 100%;
    height: 500rpx;
  }
  .listContainer swiper img{
    width: 100%;
    height: 100%;
  }

</style>
