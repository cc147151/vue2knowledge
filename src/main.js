import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
 function timestampToTime(timestamp) {
	var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000.传进来之前做处理
	var y = date.getFullYear();
	var mon = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
	var d = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return {
		y,
		mon,
		d,
		h,
		m,
		s
	};
}
Vue.filter('getFormalTime', function(time) {
  console.log(time)
  if(!time) return ''
  let {
    y,
    mon,
    d,
    h,
    m,
    s
  } = timestampToTime(time * 1000)
  console.log(`${y}-${mon}-${d} ${h}${m}${s}`)
  return `${y}-${mon}-${d} ${h}${m}${s}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
