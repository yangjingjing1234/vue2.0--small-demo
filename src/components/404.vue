<template>	
	<div class="nofound">	
		<h4>404</h4>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				str:'404'
			}
		},
		created(){
			this.$store.commit('updata_title',{'title':this.str,'goback':true});
		}
	}
</script>
<style type="text/css">
	.nofound{

	}
	.nofound h4{
		padding-top: 30px;
		font-size: 36px;
		color:#03a9f4;
		text-align: center;
	}
</style>