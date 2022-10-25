---
title: Nginx 配置
time: 2022/10/26
content: 前端使用到的基础 nginx 配置
image: https://gw.alipayobjects.com/zos/k/app2/SCR-20221015-wy0.png?x-oss-process=image/resize,w_500
---

# Nginx 配置

前端使用到的基础 nginx 配置

- gzip压缩
- 静态资源跨域
- 二级路由刷新

```bash
# gzip压缩
gzip on;
gzip_disable "msie6";
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_types text/plain application/css text/css application/xml text/javascript application/javascript application/x-javascript;
```

```bash
# 静态资源跨域
add_header Access-Control-Allow-Origin *; 
add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS'; 
add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
```

```bash
# 二级路由刷新
location / {
  try_files $uri $uri/ @router;
    index  index.html index.htm;
  }
location @router {
  rewrite ^.*$ /index.html last;
}
```

```bash
# 全部配置
http {
  include       mime.types;
  default_type  application/octet-stream;
	server {
		gzip on;
		gzip_disable "msie6";
		gzip_vary on;
		gzip_proxied any;
		gzip_comp_level 6;
		gzip_buffers 16 8k;
		gzip_http_version 1.1;
		gzip_types text/plain application/css text/css application/xml text/javascript application/javascript application/x-javascript;

		add_header Access-Control-Allow-Origin *; 
		add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS'; 
		add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
    
    listen       8999;
    server_name  localhost;
		root dist;
    location / {
      try_files $uri $uri/ @router;
      index  index.html index.htm;
    }
		
		location @router {
      rewrite ^.*$ /index.html last;
    }

  }
}
```
