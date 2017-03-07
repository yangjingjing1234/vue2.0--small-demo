<template>
	<div>
	    <header class="header" :class="{'show': sideshow}" >
	      <!-- <header class="bar bar-nav"> -->
	        <div v-if="goback" class="pull-left" @click="$router.go(-1)">
	          <span class="iconfont icon-back"></span>
	        </div>
          <div v-else class="pull-left" @click="changemenustate">
            <span class="iconfont icon-category"></span>
          </div>
	        <div class="title">{{headertitle}}</div>
	        <div class="pull-right">
            <span class="iconfont icon-search" @click="showsearch"></span> 
	          <span class="iconfont icon-bussinessman" @click="gohome"></span>
	        </div>
	      <!-- </header> -->
	    </header>
      <div class="search" v-show='searchshow'>
        <input type="text" class="search-input" v-model.trim="query" @keyup.enter="search()" name="search"
               placeholder="请输入搜索内容"/>
        <!-- <img src="../assets/search-btn.png" class="search-btn" @click="search()"/> -->
        <span class="iconfont icon-search" @click="search()"></span>
      </div>
	</div>
</template>
<script type="text/javascript">
  import {mapState, mapActions} from 'vuex'

	export default {
		data(){
 			return{
 				menuShow:false,
        searchshow:false,
        query: '',
 			}
		},
    computed:{
        ...mapState([
                'sideshow','headertitle','goback'
            ]),
    },
    created(){
      console.log('Head==creat')
    },
    mounted(){
      console.log(this.goback+'===homegoback')
      console.log(this.headertitle+'======hometitle')
      console.log('Head==mounted')
      //  if (this.$route.path === 'index' || this.$route.path.indexOf('movie')) {
      //   this.path = '/movie/search';
      // }
      // else if (this.$route.path.indexOf('book')) {
      //   this.path = '/book/search'
      // }
    },
		methods:{
       ...mapActions([
            'menustate',
      ]),
			gohome(){
      this.$router.push({
            name: 'Home'
       });
			},
      changemenustate(){
          this.$store.commit('menustate',!this.sideshow);
      },
      showsearch(){
        this.searchshow=!this.searchshow;
      },
      search(){
        // this.$router.push({path: this.path, query: {query: this.query}});
        // this.query = '';
        alert(this.query );
        this.showsearch();
      },
      changeserch(){
        this.searchshow=false;
      }
		},
     watch:{
      '$route':'changeserch'  //路由发生变化就把搜索框隐藏
    }
	}
</script>
<style type="text/css" scoped>
	.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  min-height: 50px;
  font-size: 1.8px;
  line-height: 50px;
  background-color: #262d30;
  color: #fff;
  text-align: center;
  display: table;
  box-shadow: 0 1px 0 rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  color: #fff;
}
.header.show {
  transform: translateX(80%);
}
.header .title {
  min-height: 50px;
  position: absolute;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  right: 100px;
  left: 100px;
  font-size: 16px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 2;
  font-weight: 500;
   color: #fff;
}
.header .pull-left {
  padding: 0 10px;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
  float: left !important;
}
.header .pull-left .iconfont {
  font-size: 18px;
   color: #fff;
}
.header .pull-right {
  padding: 0 10px;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center;
  float: right !important;
}
.header .pull-right  .icon-search{
   margin-right: 15px;
}
.header .pull-right .iconfont {
  font-size: 18px;
   color: #fff;
}


.search {
 position: fixed;
 top:50px;
 left: 0px;
 right: 0px;
 z-index: 2;
 background: #f5f5f5;
}
.search .search-input {
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    background: #f5f5f5;
    padding: 10px 5px;
    width: 90%;
}
.search .search-btn {
    width: 20px;
    position: absolute;
    right: 5px;
    top: 9px;
}
</style>