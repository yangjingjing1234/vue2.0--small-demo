<template>
  <div class="welfare-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="welfare-center">
        <figure v-for="data in leftData" @click="selectDetails(data.createdAt)">
          <img v-lazy="data.url">
        </figure>
    </div>
    <div class="welfare-center">
      <figure v-for="data in rightData" @click="selectDetails(data.createdAt)">
        <img v-lazy="data.url">
      </figure>
    </div>
       <transition name="fadeleft">
          <router-view></router-view>
        </transition>
      <Spinner :show="loading"></Spinner>
  </div>

</template>
<script type="text/javascript">
  import {mapState, mapActions} from 'vuex'
  import Spinner  from '../Spinner.vue'
  import { objectDate } from '../../style/js/date';
  export default{
    data(){
       return{
         leftData: [],
          rightData: [],
          busy: false,
          str:'图片',
          page: 1,
          loading:true,
          showdetail:false
       }
    },
    components:{Spinner},
    created(){
      console.log('picture==created')
      this.changetitle();
    },
    mounted(){
      console.log('picture==mounted')
    },
    methods:{
      // ...mapActions([
      //     'loadingstate'
      //   ]),
      changetitle(){
        this.$store.commit('updata_title',{'title':this.str,'goback':false});
      },
      loadTop(){
        this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`).then((res)=>{
          //console.log('lll')
           let left = res.data.results.filter((data, i) => {
            //console.log(1)
            return (i + 1) % 2 === 1;
          });
          let right = res.data.results.filter((data, i) => {
            //console.log(2)
            return (i + 1) % 2 !== 1;
          });
     
          this.leftData = this.leftData.concat(left);
          this.rightData = this.rightData.concat(right);
         
                //console.log(this.leftData)
           //console.log(this.rightData)
          this.busy = false;
          this.page++;
          this.loading=false;
          //this.$store.commit('loadingstate',false)
        },(res)=>{
          alert('网络请求失败！请重试！')
          this.busy = false;
        })

      },
      loadMore(){
        //console.log('ok')
        this.busy=true;
        this.loading=true;
        this.loadTop();
        //console.log(this.page)
        
      },
      selectDetails(data){
        //this.$store.commit('loadingstate',true);
       // console.log('oll')
       this.showdetail=true;
        this.$router.push({
            name: 'picdetail',
            params:{
              time:data
            }
       });
        // let object =objectDate(data)
        // this.$http.get(`http://gank.io/api/history/content/day/${object.Y}/${object.M}/${object.D}`)
        // .then((res)=>{

        // },(res)=>{

        // })
      }

    },
    watch:{
      '$route':'changetitle'   //此处因为图片详情有一个返回按钮，
    }

  }
</script>
<style type="text/css" scoped>
  .welfare-wrapper {
  display: -ms-flexbox;
  display: flex;
}
.welfare-wrapper .welfare-center {
  width: 50%;
  -moz-column-width: 200px;
       column-width: 200px;
  -moz-column-gap: 15px;
       column-gap: 15px;
  max-width: 1100px;
}
.welfare-wrapper .welfare-center figure {
  width: 95%;
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34,25,25,0.4);
  margin: 0 2px 15px;
  display: inline-block;
  column-break-inside: avoid;
  z-index: 11;
}
.welfare-wrapper .welfare-center figure img {
  width: 100%;
  height: auto;
}
.welfare-wrapper .welfare-center figcaption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
}

.fadeleft-enter-active,.fadeleft-leave-active {
    transition: all 0.2s linear
  }
.fadeleft-enter,.fadeleft-leave-active {
    transform: translateX(100%);
  }
</style>