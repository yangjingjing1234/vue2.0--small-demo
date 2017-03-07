<template>
<div class="menu">
    <div class="menu-list">
      <div class="menu-header" v-if="user.id">
        <router-link to="/userindex">
            <img class="menu-avatar" src="../assets/me.png" alt="">
          <div class="menu-title">Yangjingjing</div>
        </router-link>
      </div>
      <div class="menu-header"  v-else>
      <router-link to="/login">
            <img class="menu-avatar" src="../assets/404.png"
          alt="">
            <div class="menu-title">
              您还未登录！请登录
            </div>
        </router-link>
      </div>
      <div class="menu-ul">
        <div v-for='menu in menus' @click="hideside">
          <router-link class="icon-quanbu iconfont item border-1px" :to="'/'+menu">
            <div class="menu-icon">
              <i class="iconfont " :class="'icon-'+ menu"></i>
            </div>
            <span class="menu-text">{{menu_content[menu]}}</span>
           <!--  <div class="menu-new" v-show="menu ==='day' && news>0">
              <span>5</span>
            </div> -->
          </router-link>
        </div>
        <div>
           <a class="icon-quanbu iconfont item border-1px" href="https://www.baidu.com">
              <div  class="menu-icon">
                 <i  class="iconfont  icon-wxbzhuye"></i>
              </div>
              <span class="menu-text">外部链接</span>
            </a>
        </div>
        <div>
           <a class="icon-quanbu iconfont item border-1px" href="https://www.baidu.com">
              <div  class="menu-icon">
                 <i  class="iconfont  icon-wxbzhuye"></i>
              </div>
              <span class="menu-text">外部链接</span>
            </a>
        </div>
        <div>
           <a class="icon-quanbu iconfont item border-1px" href="https://www.baidu.com">
              <div  class="menu-icon">
                 <i  class="iconfont  icon-wxbzhuye"></i>
              </div>
              <span class="menu-text">外部链接</span>
            </a>
        </div>
        <div>
           <a class="icon-quanbu iconfont item border-1px" href="https://www.baidu.com">
              <div  class="menu-icon">
                 <i  class="iconfont  icon-wxbzhuye"></i>
              </div>
              <span class="menu-text">外部链接</span>
            </a>
        </div>

      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapState } from 'vuex';
  const menu_content = { 'picture': '图片', 'set': '全屏分类', 'movie': '电影', 'cart': '购物车', 'wxbzhuye': '测验' };
  const name_title = ['picture', 'set','movie', 'cart',  'wxbzhuye'];
export default
    {
      name: 'v-menu',
      data() {
        return {
          menu_content: menu_content,
          menus:name_title
        };
      },
      computed: {
      ...mapState([
        'user','sideshow'
      ])
      },
      methods: {
        hideside(){
             this.$store.commit('menustate',false);
        }
      },
      watch:{
        '$route':'hideside'
      }
    };

</script>
<style type="text/css" scoped>
.menu{
	width: 80%;
	position: fixed;
	top:0px;
	left:0px;
	bottom:0px;
	background-color: #22262a;
	overflow: hidden;
	z-index: 99;
	-ms-flex: 0 0 250px;
      flex: 0 0 250px;
	}
.menu .menu-list {
  height: 100%;
  overflow-y: scroll;
}
.menu .menu-list .menu-header {
  width: 100%;
  height: 180px;
  background-color: #262d30;
}
.menu .menu-list .menu-header .menu-avatar {
  width: 40%;
  height: auto;
  border-radius: 50%;
  margin: 20px 70px;
}
.menu .menu-list .menu-header .menu-title {
  font-size: 14px;
  color: #fff;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
}
/*.menu .menu-list.show {
  transform: translateX(250px);
}*/
.menu .menu-list .menu-ul {
  margin: 0;
  overflow: hidden;
  padding: 0;
}
.menu .menu-list .menu-ul .item {
  display: block;
  font-size: 14px;
  padding: 10px 13px;
  text-align: left;
  text-indent: 1px;
  line-height: 15px;
  color: #a6adb3;
  font-weight: 700;
  position: relative;
}
.menu .menu-list .menu-ul .item:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #40474a;
  width: 100%;
  content: '';
}
.menu .menu-list .menu-ul .itemlast-child {
  margin-bottom: 50px;
}
.menu .menu-list .menu-ul .itembefore {
  color: #2c3e50;
}
.menu .menu-list .menu-ul .item .line {
  border-top: 1px solid #d4d4d4;
}
.menu .menu-list .menu-ul .item .menu-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #383c40;
  border-radius: 50%;
  vertical-align: top;
  text-align: center;
}
.menu .menu-list .menu-ul .item .menu-icon .iconfont {
  color: #999;
  line-height: 30px;
  font-weight: 700;
}
.menu .menu-list .menu-ul .item.active {
  color: #01aef3;
}
.menu .menu-list .menu-ul .item.active .menu-icon {
  background-color: #01aef3;
}
.menu .menu-list .menu-ul .item.active .menu-icon .iconfont {
  color: #fff;
}
.menu .menu-list .menu-ul .item .menu-text {
  display: inline-block;
  font-size: 15px;
  line-height: 32px;
  vertical-align: top;
  margin-left: 10px;
  font-weight: 700;
  color:#fff;
}
.menu .menu-list .menu-ul .item .menu-new {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #d81229;
  border-radius: 50%;
  vertical-align: top;
  text-align: center;
  float: right;
}
.menu .menu-list .menu-ul .item .menu-new span {
  color: #fff;
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;
}
</style>