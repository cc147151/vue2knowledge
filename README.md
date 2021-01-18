# hello

## main.js注册的过滤器，home.vue里定义的例子
``` js
   <div>
     {{info.status && info.status == '1' ? '进行中' : info.modified_time |getFormalTime }}
   </div>
                              <!-- 如果用括号括起来，就不识别-->
  <div>
       {{info.status && info.status == '1' ? '进行中' : (info.modified_time |getFormalTime) }}
```