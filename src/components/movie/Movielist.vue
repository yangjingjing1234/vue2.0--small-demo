<template>
  <div class="content">
  	   <section class="grid has-search-bar paddingTop" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
	    <h2>{{movieList.title}}</h2>
	    <div class="card">
	      <router-link :to="{name: 'movie-detail', params: {id: item.id}}" class="item"
	                   v-for="(item ,index) in movieList.subjects" :key="index">
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
	    <spinner :show="loading"></spinner>
	  </section>
  </div>
</template>
<script type="text/javascript">
	import Spinner from '../Spinner.vue'
	import { mapState } from 'vuex'
	export default {
		data (){
			return {
				loading: true,
	          type: '',
	          busy:false,
	          start:0,
	          count:20,
	          str:'电影列表',
	          movieList:{}
			}
		},
		components:{Spinner},
     created(){
      //console.log('movielist==created')
      this.$store.commit('updata_title',{'title':this.str,'goback':true});
    },
		mounted(){
      //console.log('movielist==mounted')
      this.$nextTick(() => {
        //console.log('movieList===ok')
      })
			this.type = this.$route.query.type;
		},
		methods:{
			loadMore(){
				this.busy=true;
				this.loading=true;
				this.$http.get(`/api/movie/${this.type}?start=${this.start}&count=${this.count}`).then((res)=>{
					console.log(res)
					
					if(this.start==0){
						this.movieList=res.data;
					}else{
						this.movieList.subjects=this.movieList.subjects.concat(res.data.subjects);
					}
					this.start++;
					this.loading=false;
					this.busy=false;
					//this.$store.commit('loadingstate',false)
				},(res)=>{

				})
			}
		}
	}
</script>
<style type="text/css" scoped>
.content{
  position: absolute;
  z-index: 2;
  top:0px;
  bottom:0px;
  left:0px;
  right: 0px;
  background: #f5f5f5;
}
</style>
