<a id="readme-top"></a>

<!-- 项目 LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PhantomPixel-0418/MyHomePage">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">MyHomePage</h3>

  <p align="center">
    我的个人主页<br /><br />这是一个用于展示个人主页的项目，旨在提供简单而美观的网页布局。通过整合 Bing 每日壁纸、经典诗词、时钟以及一些自定义功能，本网页旨在提供每日一图、一言，提升用户体验。
  </p>

  [![贡献者][投稿人包庇]][贡献者网址]
  [![分叉][分叉包庇]][分叉网址]
  [![星标][星标包庇]][星标网址]
  [![问题][问题包庇]][问题网址]
  [![MIT 许可证][许可证包庇]][许可证网址]

  <p align="center">
    <a href="https://phantompixel.pages.dev"><strong>前往查看 »</strong></a>
    <br />
        <a href="https://github.com/PhantomPixel-0418/MyHomePage/issues/new?assignees=PhantomPixel-0418&labels=bug%2C+unallocated&projects=&template=%E6%8A%A5%E5%91%8A-bug.md&title=%5BBug%5D+">报告错误</a>
    ·
    <a href="https://github.com/PhantomPixel-0418/MyHomePage/issues/new?assignees=PhantomPixel-0418&labels=enhancement%2C+unallocated&projects=&template=%E5%8A%9F%E8%83%BD%E8%AF%B7%E6%B1%82.md&title=%5BFeat%5D+">提供建议</a>
  </p>
</div>

<!-- 语言 -->
<details>
  <summary>语言</summary>
  <ol>
    <li><a href="/README.md">中文</a></li>
    <li><a href="/README_en.md">English</a></li>
  </ol>
</details>

<!-- 目录 -->
<details>
  <summary>目录</summary>
  <ol>
    <li>
      <a href="#关于项目">关于项目</a>
    </li>
    <li><a href="#路线图">路线图</a></li>
    <li><a href="#许可证">许可证</a></li>
    <li><a href="#致谢">致谢</a></li>
  </ol>
</details>

<!-- 关于项目 -->
## 关于项目

这是一个用于展示个人主页的项目，旨在提供简单而美观的网页布局。通过整合 Bing 每日壁纸、经典诗词、时钟以及一些自定义功能，本网页旨在提供每日一图、一言，提升用户体验。

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

<!-- 路线图 -->
## 路线图

- [x] Bing 每日一图
  - [x] Bing 随机每日一图
  - [ ] Bing 每日一图信息 
- [x] 名言
  - [x] 中文古诗
  - [ ] 励志英文
- [x] 显示时间
  - [x] 日期
- [ ] 天气信息
  - [ ] 气候提示

有关建议功能（和已知问题）的完整列表，请参阅 [开启的问题](https://github.com/PhantomPixel-0418/MyHomePage/issues)。

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

<!-- 许可证 -->
## 许可证

以 MIT 许可发布。更多信息请参见 [`LICENSE.txt`](LICENSE)。

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

<!-- 致谢 -->
### 致谢

以下是网页中使用到的资源和接口列表：

#### SVG 图像来源
- **HarmonyOS 主题图标库** ：`https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/HarmonyOS`
  描述：由华为开发者联盟提供的图标素材，设计简洁现代，适用于网页的装饰和功能指示。

#### API

1. **世界时间 API**
- 接口地址：`http://worldtimeapi.org/api/ip`  
  描述：此 API 根据用户的 IP 地址获取当前时间和时区信息，确保时间的准确性。  
  用途：在页面加载时获取准确的初始时间，之后每秒通过本地更新。
  
2. **今日诗词 API**
- 接口地址：`https://v1.jinrishici.com/all.json`  
  描述：提供随机的经典诗词名句，包括作者和出处。  
  用途：在网页上显示每日一言的内容，作为网页上的激励语句。

3. **Bing 壁纸接口**
- 接口地址：`https://api.vvhan.com/article/bing.html`  
  描述：此 API 提供每日 Bing 壁纸及其详细信息，包括标题和日期等。  
  用途：用于动态显示网页背景图片，并提供图片的相关描述。

#### 字体来源

1. **Rousseau Deco**  
   描述：用户指定用于显示时间的艺术字体，提升网页视觉美感。
   
2. **Alimama DongFang DaKai Regular**  
   描述：用户指定用于显示名言名句的字体，风格简洁，传递优雅氛围。
   
3. **HarmonyOS Sans**  
   描述：网页默认字体，保持整体风格一致性，由华为开发者联盟提供。  
   来源：https://developer.huawei.com/images/download/next/HarmonyOS-Sans.zip

#### 网站

1. **Web Analytics**  
   描述：用于统计网站访问流量和分析用户行为。  
   来源：Cloudflare
   
3. **部署**  
   描述：部署网站。  
   来源：Cloudflare

#### README

1. **Best-README-Template**
   描述：用于更方便地编写自述文件。  
   来源：https://github.com/othneildrew/Best-README-Template  

<p align="right">(<a href="#readme-top">返回顶部</a>)</p>

<!-- 标记链接和图像 -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[投稿人包庇]: https://img.shields.io/github/contributors/PhantomPixel-0418/MyHomePage.svg
[贡献者网址]: https://github.com/PhantomPixel-0418/MyHomePage/graphs/contributors
[分叉包庇]: https://img.shields.io/github/forks/PhantomPixel-0418/MyHomePage.svg?style
[分叉网址]: https://github.com/PhantomPixel-0418/MyHomePage/network/members
[星标包庇]: https://img.shields.io/github/stars/PhantomPixel-0418/MyHomePage.svg?style
[星标网址]: https://github.com/PhantomPixel-0418/MyHomePage/stargazers
[问题包庇]: https://img.shields.io/github/issues/PhantomPixel-0418/MyHomePage.svg
[问题网址]: https://github.com/PhantomPixel-0418/MyHomePage/issues
[许可证包庇]: https://img.shields.io/github/license/PhantomPixel-0418/MyHomePage.svg
[许可证网址]: https://github.com/PhantomPixel-0418/MyHomePage/blob/master/LICENSE.txt
