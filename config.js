window.INIS = {
  // API地址
  api: 'https://dev.zets.cn',

  // 后端开启接口秘钥后，需要将key填写到此处
  key: '745245A495CF493292CDB646255C5F6E',

  // 站点标题
  title: "七云's Blog",

  // 站点副标题
  sub_title: '优雅极速，不止博客',

  // 路由模式
  // 注意: 设为false 需要添加以下nginx配置来配合
  // error_page 404 index.html;
  // location / {
  //     try_files $uri $uri/ /index.html;
  // }
  route_hash: false
}
