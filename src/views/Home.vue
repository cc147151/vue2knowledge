<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
                    
                              <!-- 如果用括号括起来，过滤器就不识别-->
  <div>
       {{info.status == '1' ? '进行中' : (info.modified_time |getFormalTime) }}
  </div>
   <div>
                          <!-- 如果不加括号，会把进行中也进行过滤 -->
     {{info.status == '1' ? '进行中' : info.modified_time |getFormalTime }}
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return {
      info:{
        status:'2',
        modified_time:1610951421
      }
    }
  },
  components: {
  }
};
</script>
