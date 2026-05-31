# 金属材料科研训练知识库

## 1. 项目简介

本项目是一个基于 VitePress 搭建的金属材料科研训练知识库，用于系统整理材料专业本科生在科研训练中的基础知识、实验技能、材料表征、组织—性能分析、文献阅读、数据处理、组会汇报和保研科研经历积累等内容。

它不是普通展示页，也不是个人成果包装页，而是一个面向长期维护、阶段复习和科研训练记录的静态文档站。

## 2. 项目定位与适合人群

本知识库面向以下使用场景：

- 材料专业本科生；
- 准备进入金属材料课题组的学生；
- 正在做科研训练、组会汇报、实验记录的学生；
- 准备保研面试和科研经历整理的学生。

网站目标是帮助使用者从课程知识过渡到科研训练实践，逐步建立“基础概念—实验技能—表征证据—组织性能分析—科研表达”的学习路径。

## 3. 当前项目阶段

当前项目第三阶段已完成，第四阶段方向 A：GitHub Pages 线上部署已完成。

阶段进展如下：

- 第一阶段：VitePress 基础工程搭建完成；
- 第二阶段：核心文章精修、模块首页整理、TEM 页面新增、首页和导航一致性优化已完成；
- 第三阶段：README、部署说明、最终验收和后续维护规范已完成；
- 第四阶段方向 A：GitHub Pages 线上部署已完成。

当前线上信息如下：

- 在线访问地址：`https://lwxuan0915-beep.github.io/research-knowledge-site/`
- GitHub 仓库地址：`https://github.com/lwxuan0915-beep/research-knowledge-site`

后续可进入内容扩展或轻量视觉优化。

## 4. 技术栈

- VitePress 1.6.4；
- Markdown 内容管理；
- Node.js / npm；
- VitePress 默认主题；
- 本地搜索：`search.provider = 'local'`；
- 自定义 theme 样式入口：`docs/.vitepress/theme/`。

第一版不包含登录系统、数据库、用户评论、在线后台、AI 问答或复杂权限系统。

## 5. 本地运行方法

Windows PowerShell 下建议使用 `npm.cmd`：

```powershell
cd D:\research-knowledge-site
npm.cmd run dev
```

默认访问地址通常为：

```text
http://localhost:5173/
```

如果端口发生变化，以终端实际输出为准。

## 6. 构建与预览

构建检查：

```powershell
npm.cmd run build
```

预览构建后的静态站点：

```powershell
npm.cmd run preview
```

`build` 用于检查项目能否正常生成静态站点，`preview` 用于查看构建产物效果。

## 7. 目录结构

当前核心目录如下：

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
package.json
```

说明：

- 根目录 `.vitepress/config.mts` 是当前实际生效的 VitePress 配置；
- `docs/.vitepress/config.mts` 是转发文件；
- `docs/.vitepress/theme/` 是自定义首页 hero 样式入口；
- `docs/` 是知识库正文内容目录。

## 8. 内容模块说明

当前知识库包含 9 个一级模块：

- 学习路线图：说明学习顺序、使用方式和不同阶段的学习目标；
- 金属材料基础课：整理材料科学概论、晶体结构、晶体缺陷和工艺—组织—性能基础逻辑；
- 实验室基础技能课：整理金相制样、实验记录、样品管理和实验安全等基础技能；
- 材料表征方法课：整理 SEM、EDS、XRD、TEM 等表征方法的入门框架和证据边界；
- 组织—性能分析课：训练从工艺变量、组织特征、性能变化到机制解释的分析链条；
- 文献阅读与科研写作课：整理论文阅读、实验记录、周报和科研表达方法；
- 数据处理与图谱分析课：整理应力—应变曲线、实验数据和图谱分析基础；
- 课题组项目实践库：记录入组准备、任务拆解、实验推进、组会汇报和阶段复盘；
- 复习卡片与问题库：用于常见误区、面试问答和组会前复习。

## 9. 当前已完成内容

当前已完成的主要内容包括：

- 核心知识文章已完成第一轮深度精修；
- 9 个一级模块首页已整理；
- SEM、EDS、XRD、TEM 页面已纳入材料表征模块；
- 首页已完成成品化精修；
- 首页 hero 区已进行视觉层级微调；
- sidebar 与首页主要入口已完成一致性检查；
- 两个“工艺—组织—性能逻辑链”入口已区分为基础版和进阶版；
- `README.md`、`DEPLOYMENT.md`、`FINAL_ACCEPTANCE_REPORT.md` 和 `PROJECT_HANDOFF_SUMMARY.md` 已完成；
- GitHub Pages 线上部署已完成，GitHub Actions build 与 deploy 均已通过；
- `npm.cmd run build` 当前可通过。

## 10. 内容维护规则

维护本项目时应遵守：

- 不猜路径，所有目标路径应来自真实文件或明确任务说明；
- 不随意新建页面；
- 不覆盖旧成果；
- 不随意修改已验收通过的正文文章；
- 新增页面时必须检查 sidebar 和模块首页；
- 修改后尽量运行 `npm.cmd run build`；
- Windows PowerShell 下优先使用 `npm.cmd`；
- 不编造实验数据、论文结论、导师信息或课题组成果。

## 11. Markdown 与 frontmatter 规范

`docs/` 下知识文章应使用合法 YAML frontmatter。

要求：

- frontmatter 必须从文件第一行开始；
- 不允许空 frontmatter；
- `tags` 列表必须使用短横线 `-`；
- 严禁使用星号 `*` 作为 YAML 列表项。

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

## 12. Codex 协作规则

本项目中的 Codex 执行应采用受控协作方式：

- 先只读排查；
- 再最小修改；
- 修改范围必须明确；
- 不允许 Codex 猜路径；
- 不允许一次性大改；
- 每次修改后输出修改文件、验证命令和遗留问题；
- 复杂任务应先由 ChatGPT 梳理逻辑链，再交给 Codex 执行；
- Codex 不是项目总负责人，只负责按任务边界执行工程修改。

## 13. 已知 warning

当前执行 `npm.cmd run build` 时，可能出现 Vite/Rollup 的 chunk size warning。

已排查主要来源为 VitePress local search 本地搜索索引文件，例如：

```text
@localSearchIndexroot...js
```

该 warning 不影响构建通过，也不是 CSS 或首页 hero 样式导致。

当前处理策略：

- 保留 local search；
- 不修改构建配置；
- 不调整 manualChunks；
- 如果后续部署后加载明显变慢，再评估搜索索引优化或构建配置。

## 14. 后续计划

后续建议按以下方向推进：

- 根据科研训练进展持续维护内容；
- 后续可扩展 EBSD、力学性能测试、腐蚀实验、热处理、电化学测试、论文精读案例、组会汇报模板等内容；
- 可根据使用反馈进行轻量视觉优化，但应保持阅读性和工程稳定。

## 15. 注意事项

- 不要随意修改 `.vitepress/config.mts`；
- 不要随意修改 `package.json`；
- 不要删除已验收通过的文章；
- 不要把 README 写成知识文章；
- README 是项目说明书，不是网站正文内容；
- 构建产物和缓存目录不应作为主要编辑对象。
