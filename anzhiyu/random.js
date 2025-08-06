var posts=["2025/08/07/hello-world/","2025/08/07/测试博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };