<template>
	<div>
		<div class="banner">	
			<swiper :options="swiperOption">
		        <swiper-slide><router-link to="#"><img src="../assets/1s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/2s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/3s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/4s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/5s.jpg"></router-link></swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		      </swiper>
		</div>
		<div class="banner">	
			<swiper :options="swiperOption2">
		        <swiper-slide><router-link to="#"><img src="../assets/1s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/2s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/3s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/4s.jpg"></router-link></swiper-slide>
		        <swiper-slide><router-link to="#"><img src="../assets/5s.jpg"></router-link></swiper-slide>
		        <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
		      </swiper>
		</div>
	</div>

</template>
<script type="text/javascript">
	  
	  import { swiper, swiperSlide } from 'vue-awesome-swiper';
	  const TAB_NAME = ['今天', '昨天', '前天', '三天前', '四天前'];
	  export default {
	  	data(){
	  		return{
	  			str:'首页',
	  			swiperOption:{
	  				pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay:3000
	  			},
	  			swiperOption2:{
	  				pagination: '.swiper-pagination',
	  				paginationClickable: true,
	         		 paginationBulletRender(swiper, index, className) {
	           		 return `<div class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</div>`;
	         		}
	  			}
	  		}
	  	},
	  	  components:{swiper, swiperSlide},
	  	  created(){
	  	  	this.$store.commit('updata_title',{'title':this.str,'goback':false});
	  	  },
	  }

</script>
<style type="text/css">
	.banner{
		height: 200px;
		overflow: hidden;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	.swiper-container{
		height: 100%;
	}
	.swiper-pagination-bullet-custom {
    width: 100% !important;
    height: 100% !important;
    margin:0 !important;
    text-align: center;
    line-height: 50px;
    color: #999999;
    border-radius: 0 !important;
    background: #fff !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #03a9f4;
    background: #03a9f4;
    font-size: 20px

  }
    .swiper-pagination2{
    top:0;
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
  }
</style>