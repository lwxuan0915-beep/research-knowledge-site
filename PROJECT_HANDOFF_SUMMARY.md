# 金属材料科研训练知识库技术交接文档

## 1. 项目当前状态

- 项目路径：`D:\research-knowledge-site`；
- 项目类型：VitePress 静态知识库网站；
- 项目名称：金属材料科研训练知识库；
- 当前阶段：第三阶段已完成，第四阶段方向 A：GitHub Pages 线上部署已完成；
- build 状态：`npm.cmd run build` 通过；
- 线上地址：`https://lwxuan0915-beep.github.io/research-knowledge-site/`；
- GitHub 仓库：`https://github.com/lwxuan0915-beep/research-knowledge-site`；
- 当前部署方式：GitHub Actions + GitHub Pages；
- 当前 `base`：`/research-knowledge-site/`；
- 当前无阻断问题；
- 已知 warning：Vite/Rollup chunk size warning，来源于 VitePress local search 本地搜索索引，当前记录不处理。

## 2. 当前已完成的主要成果

- VitePress 基础工程已搭建；
- 9 个一级模块已建立；
- 核心知识文章已完成第一轮精修；
- 模块首页已整理；
- SEM、EDS、XRD、TEM 已纳入材料表征模块；
- 首页 `docs/index.md` 已完成成品化精修；
- 自定义首页 hero 样式已加入 `docs/.vitepress/theme/`；
- sidebar 与首页主要入口已完成一致性检查；
- 两个“工艺—组织—性能逻辑链”入口已区分基础版和进阶版；
- `README.md` 已完善；
- `DEPLOYMENT.md` 已新增；
- `FINAL_ACCEPTANCE_REPORT.md` 已生成；
- GitHub Pages 自动部署已配置并通过线上验收。

## 3. 当前真实目录结构

```text
docs/
├─ .vitepress/
├─ 00-learning-map/
├─ 01-metal-basics/
├─ 02-lab-skills/
├─ 03-characterization/
├─ 04-microstructure-property/
├─ 05-literature-writing/
├─ 06-data-analysis/
├─ 07-project-practice/
├─ 08-review-cards/
└─ index.md

.vitepress/
└─ config.mts

README.md
DEPLOYMENT.md
FINAL_ACCEPTANCE_REPORT.md
PROJECT_HANDOFF_SUMMARY.md
ONLINE_DEPLOYMENT_REPORT.md
package.json
```

说明：

- 根目录 `.vitepress/config.mts` 是实际生效配置；
- `docs/.vitepress/config.mts` 只是转发文件；
- `docs/.vitepress/theme/index.ts` 与 `docs/.vitepress/theme/style.css` 用于首页 hero 样式；
- 构建输出目录为 `docs/.vitepress/dist`。

## 4. 核心页面清单

- `docs/00-learning-map/index.md`
- `docs/00-learning-map/roadmap.md`
- `docs/01-metal-basics/index.md`
- `docs/01-metal-basics/material-science-overview.md`
- `docs/01-metal-basics/crystal-structure.md`
- `docs/01-metal-basics/defects.md`
- `docs/01-metal-basics/structure-process-property.md`
- `docs/02-lab-skills/index.md`
- `docs/02-lab-skills/metallographic-preparation.md`
- `docs/03-characterization/index.md`
- `docs/03-characterization/sem.md`
- `docs/03-characterization/eds.md`
- `docs/03-characterization/xrd.md`
- `docs/03-characterization/tem.md`
- `docs/04-microstructure-property/index.md`
- `docs/04-microstructure-property/process-structure-property.md`
- `docs/05-literature-writing/index.md`
- `docs/05-literature-writing/paper-reading.md`
- `docs/05-literature-writing/weekly-report.md`
- `docs/06-data-analysis/index.md`
- `docs/06-data-analysis/stress-strain.md`
- `docs/07-project-practice/index.md`
- `docs/08-review-cards/index.md`
- `docs/08-review-cards/common-mistakes.md`
- `docs/08-review-cards/interview-qa.md`

## 5. 当前运行命令

Windows PowerShell 下推荐使用：

```powershell
cd D:\research-knowledge-site
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
```

说明：

- `dev` 用于本地开发预览；
- `build` 用于构建检查；
- `preview` 用于预览构建后的静态站点；
- 默认本地访问地址通常为 `http://localhost:5173/`，如端口变化以终端输出为准。

## 6. 已知 warning 与处理策略

- 当前 build 可能出现 Vite/Rollup chunk size warning；
- 最大相关文件约为 `docs/.vitepress/dist/assets/chunks/@localSearchIndexroot...js`；
- warning 来源是 VitePress local search 本地搜索索引；
- 不影响构建通过；
- 当前策略：保留 local search，不修改构建配置，不调整 `manualChunks`，不提高 warning 阈值，仅记录；
- 后续只有在部署后加载明显变慢或搜索体验明显受影响时再评估优化。

## 7. 历史错误路径与禁止事项

禁止再使用错误路径：

- `docs/04-literature/`
- `docs/01-metal-basics/process-structure-property.md`

正确路径：

- `docs/05-literature-writing/paper-reading.md`
- `docs/01-metal-basics/structure-process-property.md`
- `docs/04-microstructure-property/process-structure-property.md`

说明：

- 不要混淆基础版与进阶版“工艺—组织—性能逻辑链”；
- 不要随意修改 `.vitepress/config.mts`；
- 不要随意修改 `package.json`；
- 不要随意移动页面；
- 不要随意新增页面；
- 新增页面必须同步检查 sidebar 和模块首页；
- 修改后必须运行 `npm.cmd run build`。

## 8. Markdown 与 frontmatter 规范

- frontmatter 必须从文件第一行开始；
- 不允许空 frontmatter；
- 不允许重复 frontmatter；
- `tags` 列表必须用短横线 `-`；
- 禁止使用星号 `*` 作为 YAML 列表项。

正确示例：

```markdown
---
title: 页面标题
description: 页面描述
tags:
  - 金属材料
  - 科研训练
---

# 页面标题
```

## 9. Codex 协作规则

- 先只读排查；
- 再最小修改；
- 每次只改明确允许的文件；
- 不猜路径；
- 不一次性大改；
- 不顺手改配置；
- 不覆盖旧成果；
- 修改后运行 `npm.cmd run build`；
- 输出修改文件、验证命令、build 结果和遗留问题；
- 复杂任务先由 ChatGPT 梳理逻辑链，再交给 Codex 执行。

## 10. 后续可进入的第四阶段方向

### 方向 A：线上部署

已完成：

- GitHub Pages 地址：`https://lwxuan0915-beep.github.io/research-knowledge-site/`；
- GitHub 仓库地址：`https://github.com/lwxuan0915-beep/research-knowledge-site`；
- 当前部署方式：GitHub Actions + GitHub Pages；
- 当前 `base`：`/research-knowledge-site/`。

### 方向 B：内容扩展

可新增或完善：

- EBSD；
- 力学性能测试；
- 腐蚀实验；
- 热处理；
- 电化学测试；
- 论文精读案例；
- 组会汇报模板；
- 保研科研经历整理；
- 课题组入组任务记录。

### 方向 C：网站体验优化

- 搜索体验检查；
- 移动端首页显示检查；
- 文章页阅读体验检查；
- 首页视觉微调；
- 轻量学术视觉升级，例如区域分色、克制撞色、glassmorphism / 液态玻璃卡片效果；
- 模块首页入口进一步统一。

任何视觉升级都必须先只读排查，再最小 CSS 修改，再运行 `npm.cmd run build` 验证。

## 11. 下一步建议

当前建议优先级为：

1. 若目标是交付和展示：先进行线上部署路径确认；
2. 若目标是继续学习和科研训练：优先扩展 EBSD、力学性能测试、腐蚀实验、电化学测试等材料科研核心内容；
3. 若目标是长期维护：继续沿用“只读排查 → 最小修改 → build 验证 → 人工验收”的流程。

## 12. 最终交接结论

```text
当前项目已经完成第三阶段阶段性交付，并已完成 GitHub Pages 线上部署。后续新对话或新 Codex 会话应先阅读 README.md、DEPLOYMENT.md、FINAL_ACCEPTANCE_REPORT.md、PROJECT_HANDOFF_SUMMARY.md 和 ONLINE_DEPLOYMENT_REPORT.md，再决定进入内容扩展或体验优化任务。当前无阻断问题，local search chunk size warning 已记录，可暂不处理。
```
