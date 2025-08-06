var posts=["2025/08/07/测试博文/","2025/08/07/娴嬭瘯浜斾釜瀛/","2025/08/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };