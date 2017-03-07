<template>
	<div class="content">	
		<ul class="tap">	
			 <li v-for="(val,index)  in TAB_NAME" :class="classObject(index)" @click="changetype(index)">	{{val}}</li>
		</ul>
		<transition name="fadeleft">
		<setype :type="type"></setype>
		</transition>
	 </div>
</template>
<script type="text/javascript">

    import setype from './setype.vue';

    export default{
    	data(){
    		return{
    		   str:'信息列表',
    		   TAB_NAME:['吃', '喝', '玩', '乐'],
    		   type:1,
    		//    swiperOption:{
	  			// 	pagination: '.swiper-pagination',
	  			// 	paginationClickable: true,
	     //     		 paginationBulletRender(swiper, index, className) {
	     //       		 return `<div class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</div>`;
	     //     		}
	  			// }
    		}
    	},
    	components:{setype},
    	created(){
	  	  	this.$store.commit('updata_title',{'title':this.str,'goback':false});
  	  	},
  	  	mounted(){

  	  	},
  	  	methods:{
  	  		classObject(num){
  	  			//console.log(this.type==num+1)
  	  			return {
  	  				active:this.type==num+1
  	  		    
  	  			}		
  	  		},
  	  		changetype(num){
  	  				
  	  				this.type=num+1;
  	  				console.log(this.type+'====xiuagi ');
  	  		}
  	  	}

    }
</script>
<style type="text/css">
.content {
        width: 100%;
        height: 100%;
        position: relative;
        overflow-y: hidden;
    }

 .tap {
 	position: absolute;
 	top:0px;
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
    text-align: center;
  }
  .tap li{
  /*	height: 100%;*/
  line-height: 50px;
  	width: 100%;
  	background: #fff;
  	vertical-align: middle;
  }
  .tap li.active{
  	background: #03a9f4;
  	color: #fff;
  }



.fadeleft-enter-active,.fadeleft-leave-active {
    transition: all 0.2s linear
  }
.fadeleft-enter,.fadeleft-leave-active {
    transform: translateX(100%);
  }
</style>