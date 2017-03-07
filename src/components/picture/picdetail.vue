<template>
        <div  class="details">
            <div class="content">
                <h6>{{detailsData.title}}</h6>
                <div v-html="detailsData.content"></div>
            </div>
            <Spinner :show="loading"></Spinner>
        </div>
</template>
<script type="text/javascript">
  import hd from '../Head.vue'
  import Spinner  from '../Spinner.vue'
  import {mapState, mapActions} from 'vuex'
  import {objectDate,formatDate } from '../../style/js/date';

  export default{
    data(){
      return {
        datatime:null,
        str:null,
        loading:true,
        str:'图片详情',
        detailsData:{}
      }
    },
    components: {
         hd,Spinner
    },
    computed:{
        ...mapState([
               
            ]),
    },
    created(){
        this.$store.commit('updata_title',{'title':this.str,'goback':true});
    },
    mounted(){
      this.datatime=this.$route.params.time;
      this.str=this.datatime.substring(0,this.datatime.indexOf('T')) 
      this.loadcontent(this.datatime); 
    },
    methods:{
      loadcontent(data){
        let object =objectDate(data)
        this.$http.get(`http://gank.io/api/history/content/day/${object.Y}/${object.M}/${object.D}`)
        .then((res)=>{
          let data = res.data.results;
          this.detailsData = data[0];
          //this.$store.commit('loadingstate',false)
          this.loading=false;
        },(res)=>{

        })
      }
    }
  }
</script>
<style type="text/css">
.details{
  position: fixed;
 top: 50px;
 left: 0;
 right: 0;
 z-index :30;
 width: 100%;
 height: 100%;
 background-color: #ffffff
}
.details img{
  width: 100%;
}
.details .content{
   height: 100%;
   overflow:auto;

}
</style>