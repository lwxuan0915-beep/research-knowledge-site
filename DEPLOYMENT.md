# 部署说明

## 1. 文档目的

本文档用于记录“金属材料科研训练知识库”当前 VitePress 项目的本地开发、构建、预览和后续部署注意事项。

当前项目已经完成 GitHub Pages 线上部署，本文档同时记录当前部署状态和后续维护注意事项。

## 2. 当前项目状态

当前项目已启用 GitHub Pages，部署来源为 GitHub Actions。

当前部署状态如下：

- GitHub 仓库：`https://github.com/lwxuan0915-beep/research-knowledge-site`
- 线上地址：`https://lwxuan0915-beep.github.io/research-knowledge-site/`
- 部署方式：GitHub Actions + GitHub Pages；
- 分支：`main`；
- GitHub Pages Source：GitHub Actions；
- GitHub Actions build 与 deploy 均已通过；
- 线上网站人工检查通过。

## 3. 本地开发

Windows PowerShell 下建议使用：

```powershell
cd D:\research-knowledge-site
npm.cmd run dev
```

默认访问地址通常为：

```text
http://localhost:5173/
```

如果终端显示其他端口，应以终端实际输出为准。

## 4. 构建静态站点

构建命令：

```powershell
npm.cmd run build
```

该命令实际执行：

```text
vitepress build docs --config .vitepress/config.mts
```

当前构建产物目录为：

```text
docs/.vitepress/dist
```

该目录是静态站点产物目录，可用于后续预览或部署。

## 5. 预览构建结果

预览命令：

```powershell
npm.cmd run preview
```

该命令用于预览 `build` 后的静态站点，不是开发热更新模式。

如果只是进行日常内容编辑和即时预览，使用 `npm.cmd run dev`；如果要检查构建产物效果，先运行 `npm.cmd run build`，再运行 `npm.cmd run preview`。

## 6. 当前配置说明

当前项目配置情况如下：

- 实际生效配置文件是 `.vitepress/config.mts`；
- `docs/.vitepress/config.mts` 是转发文件；
- 当前 `base` 已配置为 `/research-knowledge-site/`；
- 当前 `search.provider = 'local'`；
- 当前已配置 GitHub Pages 自动部署 workflow：`.github/workflows/deploy.yml`；
- 当前 GitHub Pages Source 已设置为 GitHub Actions。

当前 `docs/.vitepress/config.mts` 的作用是转发到根目录配置文件：

```ts
export { default } from '../../.vitepress/config.mts'
```

## 7. 可选部署方式

### 7.1 仅本地使用

适合日常内容编辑、导航检查、搜索检查、页面结构检查和移动端基础体验检查。使用方式是运行：

```powershell
npm.cmd run dev
```

或在构建后运行：

```powershell
npm.cmd run preview
```

### 7.2 打包后手动展示

可以将以下目录作为静态站点产物复制到静态服务器，或交给他人查看：

```text
docs/.vitepress/dist
```

需要注意：静态资源路径必须与最终访问路径匹配。如果部署到子路径，可能需要配置 `base`。

### 7.3 GitHub Pages

当前项目已经使用 GitHub Pages 部署。

当前线上地址为：

```text
https://lwxuan0915-beep.github.io/research-knowledge-site/
```

由于当前仓库是普通项目仓库 `research-knowledge-site`，不是用户主页仓库，因此 `.vitepress/config.mts` 中已配置：

```ts
base: '/research-knowledge-site/'
```

如后续更换仓库名、部署路径或使用自定义域名，需要重新评估 `base` 是否仍然正确。

### 7.4 静态服务器或对象存储

如果部署到域名根路径，通常可以保持默认 `base`。

如果部署到子路径，也需要正确配置 `base`，否则 CSS、JS、图片或页面资源可能无法正常加载。

## 8. GitHub Pages 风险点

当前 GitHub Pages 已部署完成。后续维护时仍需注意以下风险点：

- 仓库名会影响 `base`；
- 错误配置 `base` 可能导致 CSS、JS、图片和页面资源路径失效；
- 如果更换仓库名、自定义域名或部署路径，需要重新评估 `base`；
- 不应在没有明确部署路径变化时随意修改 `base`。

后续变更部署方式前应先回答：

```text
最终访问地址是什么？
是否部署到仓库子路径？
是否使用自定义域名？
是否需要配置 base？
```

## 9. 已知 warning

当前执行 `npm.cmd run build` 时，可能出现 Vite/Rollup 的 chunk size warning。

排查结果显示主要来源是 VitePress local search 本地搜索索引文件，例如：

```text
assets/chunks/@localSearchIndexroot...js
```

当前处理策略：

- 保留 local search；
- 不修改构建配置；
- 不调整 manualChunks；
- 不提高 warning 阈值；
- 仅记录该 warning；
- 若后续线上加载明显变慢，再评估搜索或构建优化。

## 10. 推荐部署检查清单

部署和维护时建议检查：

- `npm.cmd run build` 是否通过；
- `npm.cmd run preview` 是否能正常打开；
- 首页是否正常显示；
- 顶部导航是否可用；
- sidebar 是否可用；
- 搜索框是否可用；
- 核心页面是否能打开；
- 是否确认最终部署路径；
- 是否确认是否需要配置 `base`；
- 是否记录 chunk size warning。

## 11. 当前建议

当前阶段建议：

- 继续使用本地 `dev` 和 `preview` 检查内容改动；
- 保持当前 GitHub Actions + GitHub Pages 部署方式；
- 暂不修改 `base`；
- 暂不修改 GitHub Actions workflow；
- 暂不处理 chunk size warning；
- 后续如果更换仓库名、自定义域名或部署路径，再重新评估部署配置。
