# OpenClaw Docs

[English](./README.md) | [简体中文](./README.zh-CN.md)

OpenClaw Docs 是一个基于 Vue 3 + Vite 的双语文档站点，用于展示 OpenClaw CLI 的快速开始、命令参考与场景化命令索引。

## 项目目标

- 提供清晰、可搜索的 CLI 文档入口
- 支持中英双语切换与语言偏好记忆
- 兼顾桌面端与移动端的阅读体验
- 提供稳定的导航、复制命令与回到顶部交互

## 主要功能

- 双语文档：`zh` / `en`
- 自动路由重定向：`/` 自动跳转到用户偏好语言默认页
- 文档按页面拆分（Markdown）并按导航动态加载
- 命令一键复制（代码块逐行复制 + 表格命令复制）
- 侧边栏导航可折叠
- 顶部导航固定显示，滚动时保持可见
- 右下角回到顶部按钮
- 底部版权信息

## 技术栈

- [Vue 3](https://vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)
- [markdown-it-link-attributes](https://github.com/crookedneighbor/markdown-it-link-attributes)

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发环境

```bash
npm run dev
```

默认访问地址：

- `http://localhost:5173`

### 3. 生产构建

```bash
npm run build
```

### 4. 预览构建产物

```bash
npm run preview
```

## 脚本说明

- `npm run dev`：启动 Vite 开发服务器
- `npm run build`：打包生产版本到 `dist/`
- `npm run preview`：本地预览生产构建

## 项目结构

```text
OpenClaw/
├─ public/                    # 静态资源（logo 等）
├─ src/
│  ├─ components/
│  │  ├─ TopBar.vue           # 顶部导航
│  │  ├─ SideNav.vue          # 侧边导航
│  │  └─ ContentView.vue      # 文档渲染与复制功能
│  ├─ content/
│  │  ├─ zh/*.md              # 中文文档
│  │  ├─ en/*.md              # 英文文档
│  │  ├─ nav.zh.json          # 中文导航配置
│  │  ├─ nav.en.json          # 英文导航配置
│  │  └─ index.js             # 内容加载与语言偏好逻辑
│  ├─ styles/
│  │  └─ base.css             # 全局样式与响应式布局
│  ├─ App.vue                 # 页面布局容器
│  ├─ router.js               # 路由定义与重定向
│  └─ main.js                 # 应用入口
├─ dist/                      # 构建产物
├─ index.html
├─ package.json
├─ README.md
└─ README.zh-CN.md
```

## 路由规则

- `/`：自动跳转到 `/{lang}/{defaultSlug}`
- `/:lang(zh|en)`：自动补全该语言默认页面
- `/:lang(zh|en)/:slug`：文档页面
- 未匹配路径：重定向到用户偏好语言默认页

## 文档维护方式

1. 在 `src/content/zh` 或 `src/content/en` 新增/修改 `.md` 页面
2. 在对应 `nav.zh.json` / `nav.en.json` 中配置导航项
3. 确保同一 slug 在两种语言下尽量保持一致

## 部署建议

可将 `dist/` 部署到任意静态站点平台，例如：

- GitHub Pages
- Vercel
- Netlify
- Nginx 静态托管

## License

Copyright (c) LnDev
