<template>
  <div id="app">
    <welcome v-show="inloaing"></welcome>
    <router-view></router-view>
  </div>
</template>

<script>
import welcome from './components/Welcome.vue';
import {mapState, mapActions} from 'vuex'

export default {
  name: 'app',
  data(){
        return {
            showloading:true,
        }
  },
  components:{welcome},
  computed:{
    ...mapState(['inloaing'])
  },
  mounted(){
    if(!this.supports_html5_storage()){
         alert('您的浏览器不支持localStorage，可能会影响体验')
         return false;

    }
    this.$nextTick(() => {
        this.checkLogin();
    })
        
  },
  methods:{
    supports_html5_storage(){
         try {
             return 'localStorage' in window && window['localStorage'] !== null;
         } catch (e) {
            return false;
         }
    },
    checkLogin(){

        // 这个位置页面刷新的时候每次都会去验证是否还在登录状态，是否能获得用户信息
         console.log('ajax=use=========')
        this.$http.post('/a.php',this.Qs.stringify({a:1,b:2})).then(res=>res.data)
          .then(data=>{
            console.log(data)
          },data=>{
            console.log('error')
          })

          this.$store.state.inloaing=false;  
    }
  },

}
</script>

<style>
@import './style/css/font.css';
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    box-sizing: border-box;
    font-family: "Microsoft Yahei",sans-serif;
    -webkit-tap-highlight-color:transparent;
    -webkit-font-smoothing: antialiased;
    &:focus {
        outline: none;
    }
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
::-webkit-scrollbar  
{  
    width: 0px;  
    height: 0px;  
    background-color: #F5F5F5;  
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);  
    border-radius: 10px;  
    background-color: #F5F5F5;  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #555;  
}  

input[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {
    -webkit-appearance: none;
}

textarea { -webkit-appearance: none;}   

html,body{
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    overflow-x:hidden;
}


.clear:after{
    content: '';
    display: block;
    clear: both;
}

.clear{
    zoom:1;
}

.back_img{
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.margin{
    margin: 0 auto;
}

.left{
    float: left;
}

.right{
    float: right;
}

.hide{
    display: none;
}

.show{
    display: block;
}

.ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.paddingTop{
    padding-top: 50px;
}
</style>
