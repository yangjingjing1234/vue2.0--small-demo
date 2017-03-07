<template>
	<div class="contentwrap">	
        <div> {{type}}</div>
		    <ul>  
            <li v-for="n in arrtest">  {{n}}</li>
        </ul>
        <Spinner :show="loading"></Spinner>
	 </div>
</template>
<script type="text/javascript">
const ARR=[50,40,10,60,]
import Spinner  from '../Spinner.vue'

    export default{
    	data(){
    		return{
    		   loading:true,
           arrtest:null,
    		}
    	},
      props:['type'],
      components:{Spinner},
    	created(){
            console.log(2222)
  	  	},
  	  	mounted(){
         this.changedata();
  	  	},
        methods:{
          changedata(){
             console.log(this.type)
             this.loading=true;
             this.$http.post('/test.php',this.Qs.stringify({type:this.type})).then(res=>res.data)
            .then(data=>{
              console.log(data)
            },data=>{
              console.log('error==ajax')
            });
              //模拟ajax 请求成功之后
            setTimeout(()=>{
                this.loading=false;
                    this.arrtest=ARR[`${this.type}`-1]
             
            },2000)
          }
        },
        watch:{
          type:'changedata'   //此处的type是跟随父级改变的，需要监听
        }

    }
</script>
<style type="text/css">
.contentwrap {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
}

</style>