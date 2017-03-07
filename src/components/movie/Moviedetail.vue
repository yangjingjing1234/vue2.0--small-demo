<template>
  <div class="">
    <div class="detail-card" v-if="movie.title">
      <div class="title">{{movie.title }}&nbsp;{{getOriginalTitle}}</div>
      <div>
        <img :src="movie.images.large" style="width:100%">
      </div>
      <section class="subject-info">{{getMeta}}</section>
      <section class="subject-mark">
        <div class="mark-item">
          <a >
            <span>想看({{movie.wish_count}})</span>
          </a>
          <a><span>看过</span></a>
        </div>
      </section>
      <section class="subject-intro">
        <h2>{{movie.title}}的剧情介绍</h2>
        <div class="bd">
          <p>
            {{movie.summary}}
          </p>
        </div>
      </section>
    </div>
    <spinner :show="loading"></spinner>
  </div>
</template>
<script type="text/javascript">
	  import Spinner  from '../Spinner.vue'
	  export default {
	  	data(){
	  		return {
	  			loading: true,
		        id: '',
		        str:'电影详情',
		        movie: {}
	  		}
	  	},
	  	components:{Spinner},
      created(){
        this.$store.commit('updata_title',{'title':this.str,'goback':true});
      },
	  	mounted(){
	  		this.id=this.$route.params.id;
	  		this.$http.get(`/api/movie/subject/${this.id}`).then((res)=>{
	  			this.movie = res.data;
                this.loading = false;
                //this.$store.commit('loadingstate',false)
	  		},(data)=>{

	  		})
	  	},
	  	 computed: {
	      getMeta(){
	        var cast = this.movie.casts.reduce((name,value)=>{
	                  return name ? name +' / '+ value.name : value.name;
	      }, '');
	        return this.movie.countries.join(' / ') + ' / '+this.movie.genres.join(' / ') + ' / '+this.movie.directors[0].name +'(导演) / ' + cast;
	      },
	      getOriginalTitle(){
	        return new RegExp(/([A-Za-z])/g).test(this.movie.original_title)? this.movie.original_title : '';
	      },
	    }

	  }
</script>
<style type="text/css" scoped>
	
.detail-card {
  background: #fff;
  border-radius: 10px;
  padding: 10px 15px;
  -webkit-text-size-adjust: 100%;
}
.detail-card .title {
    font-size: 16px;
    line-height: 32px;
    word-break: break-all;
}
.detail-card section {
    margin-bottom: 30px;
}
.detail-card section p {
      font-size: 15px;
      color: #494949;
      line-height: 1.5;
}
.detail-card .subject-info {
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    line-height: 1.5;
}
.detail-card .subject-mark .mark-item {
    margin-bottom: 30px;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    box-align: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
}
.detail-card .subject-mark .mark-item a {
      height: 30px;
      line-height: 30px;
      display: block;
      border: 1px solid #ffb712;
      border-radius: 3px;
      margin-right: 10px;
      color: #ffb712;
      font-size: 15px;
      text-align: center;
      box-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
}
.detail-card .subject-intro h2 {
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
}
</style>