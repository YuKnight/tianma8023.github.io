这是部署在 GitHub 上的静态博客 Repo，该博客以 [Hexo 3.2.2](https://github.com/hexojs/hexo) 作为静态博客框架，以 [material 1.3.0](https://github.com/viosey/hexo-theme-material) 为主题搭建而成。

博客地址： [Tianma](http://tianma.pro)

### 个性化配置&优化
[这里](https://hexo.io/plugins/index.html) 是官方有收录 Hexo 的插件。

这里列一下博客用到的插件，大部分都可以看其对应官方文档就能正确配置。

#### 链接
固定链接插件：[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)
之前的 `permalink` 格式是：
```yaml
permalink: post/:year/:month/:day/:title/
# 比如  http://tianma.pro/2018/02/08/Hello-World 
```

使用 `hexo-abbrlink` 插件格式是:
```yaml
permalink: post/:abbrlink/

# abbrlink config
abbrlink:
  alg: crc32  #算法 support crc16(default) and crc32
  rep: dec    #进制 support dec(default) and hex

# 例如： http://tianma.pro/post/3678283086/
```

#### 部署
当访问博客网站 [Tianma](http://tianma.pro)
- 国内IP走的 `coding`:  [tianma8023.coding.me](http://tianma8023.coding.me)
- 国外IP走的 `GitHub`:  [tianma8023.github.io](http://tianma8023.github.io)

这样一定程度上能加快网站加载速度。

大致来说，需要一下步骤：
1. 将博客部署到 `GitHub` 和 `Coding`, 具体参阅   [hexo干货系列：（四）将hexo博客同时托管到github和coding](http://tengj.top/2016/03/06/hexo4/) 和 [git多网站ssh部署方案](http://chitanda.me/2015/06/11/tips-for-setup-hexo/#git%E5%A4%9A%E7%BD%91%E7%AB%99ssh%E9%83%A8%E7%BD%B2%E6%96%B9%E6%A1%88)
2. 注册域名,国内有 [万网](https://wanwang.aliyun.com/)，国外有 [GoDaddy](https://www.godaddy.com/) , 然后进行域名绑定，即国内走 `Coding` 国外走 `GitHub` ，相关教程很多就不赘述了。


#### 静态资源压缩优化
使用 [gulp](https://github.com/gulpjs/gulp) 压缩 Hexo 静态资源
> gulp 的官方定义非常简洁：基于文件流的构建系统。<br/><br/>
  说人话系列：gulp 是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器；她不仅能对网站资源进行优化，而且在开发过程中很多重复的任务能够使用正确的工具自动完成。

更多详细配置请参考 [使用 gulp 压缩 hexo 静态资源](https://clearsky.me/hexo-gulp-compress.html)


#### 云存储服务
云存储服务商使用的是 [七牛云](https://www.qiniu.com/)，配合 [hexo-qiniu-sync](https://github.com/gyk001/hexo-qiniu-sync) 食用。
主要就是把 图片、视频、音乐等其他较大的静态资源 上传到七牛云，加速博客网站静态资源加载。

详细请参考 [使用七牛为Hexo存储图片等资源](https://yuchen-lea.github.io/2016-01-21-use-qiniu-store-file-for-hexo/)。


#### 看板娘
看板娘采用的以 [live2d](http://www.live2d.com/en/) 技术为核心，以 [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d) 为插件，配合 `live2d` 模型制作而成。

详情参考： 
- [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)
- 本博客给看板娘加入了 `鼠标滑动悬停` 和 `点击` 事件监听，以做出更多响应。 具体参考 [给博客添加能动的看板娘(Live2D)-将其添加到网页上吧](https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02)

#### 音乐播放
音乐播放器采用的是 [DIYGod](https://github.com/DIYgod) 的 [APlayer](https://github.com/MoePlayer/APlayer), 以 [MetingJS](https://github.com/metowolf/MetingJS) 为辅助配合食用。

详情参考: [Hexo 折腾：音乐播放](http://tianma.pro/post/3998746934/)

#### 图片
1. 图片描述(description)：因为 `material` 主题本身没有对图片做过多处理，当使用:
    ```markdown
    ![description](xxx.jpg)
    ```
    插入图片时，最后的 `description` 是没有显示的。这里采用 [hexo-image-caption](https://github.com/wayou/hexo-image-caption) 插件将上述 markdown 生成如下元素：
    ```html
    <img src="xxx.jpg" alt="description"/>
    <span class="image-caption">description</span>
    ```
    更多配置参考其文档。

2. 图片放大查看： 由于 `material` 主题没有该功能，本博客用 `FancyBox` 库实现该功能，详情参考 [Hexo 折腾：利用 Fancybox 添加图片放大预览查看功能](http://tianma.pro/post/2208308547/)

### 工具网站推荐
1. 图片压缩: [tinypng](https://tinypng.com/) - 在压缩图片的同时尽可能保证图片质量
2. 矢量图, 图标等: [iconfont](http://iconfont.cn/),  [IconFinder](https://www.iconfinder.com/), [material icons](https://material.io/icons/)