<template>
  <div class="content">
    <section class="grid has-search-bar">
      <div v-if="inTheater.title">
        <h2>{{inTheater.title}}
          <router-link tag="span" :to="{name: 'movie-list', query: {type: inTheater.type}}" class="more">更多>
          </router-link>
        </h2>
        <div class="card">
          <router-link :to="{name: 'movie-detail', params: {id: item.id}}" class="item"
                       v-for="(item,index) in inTheater.subjects" :key="index">
            <div class="cover">
              <div class="wp">
                <img class="img-show" :src="item.images.medium"/>
              </div>
            </div>
            <div class="info">
              <h3>{{item.title}}</h3>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="comingSoon.title">
        <h2>{{comingSoon.title}}
          <router-link tag="span" :to="{name: 'movie-list', query: {type: comingSoon.type}}" class="more">更多>
          </router-link>
        </h2>
        <div class="card">
          <router-link :to="{name: 'movie-detail', params: {id: item.id}}" class="item"
                       v-for="(item,index) in comingSoon.subjects" :key="index">
            <div class="cover">
              <div class="wp">
                <img class="img-show" :src="item.images.medium"/>
              </div>
            </div>
            <div class="info">
              <h3>{{item.title}}</h3>
            </div>
          </router-link>
        </div>
      </div>
      <spinner :show="loading"></spinner>
    </section>

    <transition name="fadeleft">
          <router-view></router-view>
    </transition>
  </div>
</template>
<script type="text/javascript">
	 import Spinner  from '../Spinner.vue'
	 export default {
	 	data (){
	 		return{
	 			loading:true,
	 			inTheater:{},
	 			comingSoon:{},
	 			str:'电影'
	 		}
	 	},
	 	components:{Spinner},
    created(){
      //console.log('move==created')
      this.changetitle();
   },
	 	mounted(){
      //console.log('move==mounted')
	 		var start = 0, 
	 		    count = 9;
	 		 this.$http.get(`/api/movie/in_theaters?start=${start}&count=${count}`)
	 		 .then((res)=>{

	 		 	this.inTheater=res.data;
	 		 	this.inTheater.type='in_theaters';
	 		 	this.loading=false;

	 		 },(res)=>{

	 		 })
	 		 this.$http.get(`/api/movie/coming_soon?start=${start}&count=${count}`)
	 		 .then((res)=>{

	 		 	this.comingSoon=res.data;
	 		 	this.comingSoon.type='coming_soon';
	 		 	this.loading=false;

	 		 },(res)=>{

	 		 })
          this.$nextTick(() => {
        //console.log('movie===ok')
      })
	 	},
    methods:{
      changetitle(){
        this.$store.commit('updata_title',{'title':this.str,'goback':false});
      }
    },
    watch:{
      '$route':'changetitle'   //此处因为图片详情有一个返回按钮，子组件返回不会触发父组件的创建，因此可以观察
    }
	 }
</script>
<style type="text/css">

.grid {
  padding: 40px 15px 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 660px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}
.grid.has-search-bar {
    padding: 0 15px;
}
.grid h2 {
	text-align: left;
    font-size: 14px;
    font-weight: normal;
    box-sizing: border-box;
    max-width: 660px;
    margin: 15px auto;
    padding: 0 4%;
    color: #8e8e8e;
}
.grid h2 .more {
      float: right;
      font-size: 12px;
      color: #999;
}
.grid .card {
    clear: both;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    padding: 14px 0 0;
}
.grid .item {
    float: left;
    box-sizing: border-box;
    width: 33.33333%;
    padding-left: 4%;
    padding-right: 4%;
    margin-bottom: 0px;
    overflow: hidden;
    text-decoration: none;
    color: #9b9b9b;
}
.grid .item .cover {
      min-height: 87px;
      overflow: hidden;
      position: relative;
}
.grid .item .cover .img-show {
        width: 100%;
}
.grid .item .wp {
      position: relative;
}
.grid .item .wp:before {
        content: "";
        display: block;
        padding-top: 143%;
}
.grid .item .info {
      height: 45px;
      overflow: hidden;
}
.grid .item .info h3 {
        font-size: 13px;
        font-weight: normal;
        padding: 5px 0 0;
        color: #494949;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        margin: 0;
}
.grid .item .rank {
      height: 16px;
      font-size: 12px;
      padding-top: 3px;
      text-align: center;
}
.grid .item .rank .rating-stars {
        display: inline-block;
        vertical-align: middle;
}
.grid .item img {
      display: block;
      position: absolute;
      left: -100%;
      right: -100%;
      top: -100%;
      bottom: -100%;
      margin: auto;
      min-height: 100%;
      min-width: 100%;
}



.fadeleft-enter-active,.fadeleft-leave-active {
    transition: all 0.2s linear
  }
.fadeleft-enter,.fadeleft-leave-active {
    transform: translateX(100%);
  }
</style>