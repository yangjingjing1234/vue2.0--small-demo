<template>
  <div>
      <hd></hd>
      <div class="wrap">
        <router-view></router-view>
      </div>
      <div class="mask" v-show="sideshow" @click="upside"></div>
      <transition name="router-slid">
         <side v-show="sideshow"></side>
      </transition>
      
  </div>
</template>
<script type="text/javascript">
  import side from './Side.vue'
  import hd from './Head.vue'
  import {mapState, mapActions} from 'vuex'

  export default{
    data(){
      return {
        //showloading:true,
        // leftData: [],
        // rightData: [],
        // busy: false,
        // page: 1,
        detailsData: {},
        time: '',
      }
    },
    components: {
            side,
            hd
    },
    computed:{
        ...mapState([
                'sideshow',
            ]),
    },
    created(){
      console.log('home==creat')
    },
    mounted(){
      console.log('home==mounted')
      this.updatauser()
     // this.$store.commit('updata_title',{'title':this.str,'goback':false});
      //console.log(this.goback)
       // this.$router.push({
       //      name: 'picture'
       // });
    },
    methods:{
      upside(){
        this.$store.commit('menustate',false);
      },
      updatauser(){
       
      }
    }
  }
</script>
<style type="text/css">
  .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s ease;
  }
  .router-slid-enter, .router-slid-leave-active {
      transform: translateX(-100%);
  }


.wrap{
  padding-top: 50px;
position: absolute;
top:0px;
left:0px;
bottom:0px;
height: 100%;
  width: 100%;
}
.mask{
  background: rgba(0,0,0,.5);
  position: fixed;
  top:0px;
  left:0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>