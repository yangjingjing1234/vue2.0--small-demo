<template>
	<div>
		<div class="title" style="padding: 50px;">{{user.id}}欢迎回家</div>
		<div class="bottom">	
				<router-link to="/signout">退出</router-link>
		</div>
		
	</div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex';

	export default {
		data(){
			return {
				str:'个人中心',
			}
		},
		created(){
				this.changetitle()
		},
		mounted(){

		},
		computed:{
		  ...mapState([
               'user'
            ]),
		},
		methods:{
		  changetitle(){
	        this.$store.commit('updata_title',{'title':this.str,'goback':true});
	      }
		}
	}
</script>
<style type="text/css" scoped>
	.title{
		text-align: center;

	}
	.bottom{
	text-align: center;
	}
	.bottom a{
	padding: 10px 20px;
	margin-top: 20px;
	line-height: 28px;
	background: #03a9f4;
	color:#fff;
	}
</style>