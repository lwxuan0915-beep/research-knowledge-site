# 部署说明

## 1. 文档目的

本文档用于记录“金属材料科研训练知识库”当前 VitePress 项目的本地开发、构建、预览和后续部署注意事项。

本文档只说明部署准备和风险点，不表示项目已经完成线上部署。

## 2. 当前项目状态

当前项目仍处于本地成品化与部署准备阶段，尚未正式配置 GitHub Pages 或其他线上部署方式。

当前已完成 README 完善、首页优化、导航一致性检查和 sidebar 命名统一。后续部署前仍需要确认最终部署平台、访问路径和是否需要配置 `base`。

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
- 当前 `base` 未配置；
- 当前 `search.provider = 'local'`；
- 当前未配置 GitHub Pages 专用部署项；
- 当前未配置 deploy 脚本或自动部署流程。

当前 `docs/.vitepress/config.mts` 的作用是转发到根目录配置文件：

```ts
export { default } from '../../.vitepress/config.mts'
```

## 7. 可选部署方式

### 7.1 仅本地使用

当前最推荐，风险最低。

适合继续检查内容、导航、搜索、页面结构和移动端基础体验。使用方式是运行：

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

GitHub Pages 可作为后续选项，但部署前必须确认仓库名和最终访问路径。

如果部署到：

```text
https://用户名.github.io/仓库名/
```

通常需要在 VitePress 配置中设置：

```ts
base: '/仓库名/'
```

如果部署到用户主页或自定义域名根路径，则 `base` 可能保持默认。

当前不要盲目修改 `base`。

### 7.4 静态服务器或对象存储

如果部署到域名根路径，通常可以保持默认 `base`。

如果部署到子路径，也需要正确配置 `base`，否则 CSS、JS、图片或页面资源可能无法正常加载。

## 8. GitHub Pages 风险点

当前 GitHub Pages 的主要风险点包括：

- 当前无法从本地项目判断仓库名；
- 仓库名会影响 `base`；
- 错误配置 `base` 可能导致 CSS、JS、图片和页面资源路径失效；
- 当前阶段不建议直接修改 `base`；
- 真正部署前应先明确最终访问地址。

部署前应先回答：

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

## 10. 推荐部署前检查清单

部署前建议检查：

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

- 继续使用本地 `dev` 和 `preview` 检查；
- 暂不修改 `base`；
- 暂不配置 GitHub Pages；
- 暂不处理 chunk size warning；
- 等最终验收完成后，再根据实际部署平台决定是否修改配置。
