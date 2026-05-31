# 金属材料科研训练知识库线上部署验收记录

## 1. 部署结论

- GitHub Pages 线上部署已完成；
- GitHub Actions build 与 deploy 均通过；
- 线上访问检查通过；
- 当前可将链接发给老师或学长查看。

## 2. 部署信息

- 项目名称：金属材料科研训练知识库；
- GitHub 用户名：`lwxuan0915-beep`；
- 仓库名：`research-knowledge-site`；
- 仓库地址：`https://github.com/lwxuan0915-beep/research-knowledge-site`；
- 线上地址：`https://lwxuan0915-beep.github.io/research-knowledge-site/`；
- 部署方式：GitHub Actions + GitHub Pages；
- 分支：`main`；
- base：`/research-knowledge-site/`。

## 3. 本次部署检查项

- GitHub 仓库已创建：通过；
- 本地项目已初始化 Git 仓库：通过；
- 初始提交已推送：通过；
- `.vitepress/config.mts` 已配置 `base`：通过；
- `.github/workflows/deploy.yml` 已创建：通过；
- GitHub Pages Source 已设置为 GitHub Actions：通过；
- GitHub Actions build 通过：通过；
- GitHub Actions deploy 通过：通过；
- 线上首页可访问：通过；
- 首页样式正常：通过；
- 顶部导航正常：通过；
- sidebar 正常：通过；
- SEM、EDS、XRD、TEM 页面可访问：通过；
- 搜索框可用：通过；
- 随机文章页面可打开：通过。

## 4. 已知 warning

- local search chunk size warning 仍可能存在；
- warning 来源为 VitePress local search 本地搜索索引；
- 该 warning 不影响构建和部署；
- 当前策略为记录，不处理。

## 5. 当前不处理事项

- 不处理 chunk size warning；
- 不更换部署路径；
- 不配置自定义域名；
- 不修改 GitHub Actions workflow；
- 不修改 `base`；
- 不进行视觉大改。

## 6. 后续建议

1. 可将线上地址发给学长或老师征求反馈；
2. 根据反馈决定是否调整内容结构；
3. 后续可扩展 EBSD、力学性能测试、腐蚀实验、电化学测试等内容；
4. 后续可考虑轻量视觉升级，但必须保持阅读性和工程稳定；
5. 每次修改后继续执行 `npm.cmd run build`，并提交到 GitHub 触发自动部署。
