# AGENTS.md

# 金属材料科研训练知识库网站：Codex 项目执行规则

本项目后续 Codex 执行还必须遵守 CODEX_USAGE_POLICY.md。如无特别说明，默认采用轻量执行模式。

## 1. 项目定位

本项目是一个面向本科生金属材料科研训练的个人知识储备网站。

项目目标不是做一个普通展示型网站，而是建设一个长期可维护、可复习、可扩展的科研训练知识库，用于系统整理以下内容：

1. 金属材料基础知识；
2. 实验室基础技能；
3. 材料表征方法；
4. 组织—性能分析逻辑；
5. 文献阅读与科研写作；
6. 数据处理与图谱分析；
7. 课题组项目实践记录；
8. 复习卡片与面试问答。

网站应服务于以下场景：

* 进组前系统学习；
* 入组后随时查阅；
* 科研训练过程记录；
* 组会汇报准备；
* 保研科研经历积累；
* 后续论文、PPT、简历材料整理。

## 2. 项目核心原则

本项目必须遵守以下原则：

1. 知识体系优先，页面炫酷程度靠后；
2. 课程化组织，避免零散资料堆积；
3. 由浅入深，从基础概念到科研应用；
4. 所有内容必须可复习、可查找、可长期维护；
5. 不编造实验结果、论文结论、导师信息或项目成果；
6. 每次修改必须有明确任务边界；
7. 不允许一次性大范围重构；
8. 不允许覆盖旧成果；
9. 不允许删除原始内容，除非用户明确要求；
10. 每次执行后必须输出修改文件、执行命令、验证结果和遗留问题。

## 3. 技术路线

第一版网站采用文档站路线。

优先技术方案：

* VitePress；
* Markdown / MDX 内容管理；
* 侧边栏目录；
* 顶部导航栏；
* 本地搜索；
* 深色模式；
* 响应式布局；
* 静态部署。

第一版不做以下内容：

* 登录系统；
* 数据库；
* 用户评论；
* 在线后台管理；
* AI 问答机器人；
* 复杂动画系统；
* 复杂权限系统；
* 多用户协作系统。

如果后续需要更复杂功能，再单独建立第二阶段任务。

## 4. 推荐项目结构

项目根目录建议如下：

```text
research-knowledge-site/
├── AGENTS.md
├── PROJECT_RULES.md
├── TASKS.md
├── README.md
├── package.json
├── docs/
│   ├── 00-learning-map/
│   │   ├── index.md
│   │   └── roadmap.md
│   ├── 01-metal-basics/
│   │   ├── index.md
│   │   ├── material-science-overview.md
│   │   ├── crystal-structure.md
│   │   ├── defects.md
│   │   ├── strengthening-mechanisms.md
│   │   ├── phase-diagram.md
│   │   ├── heat-treatment.md
│   │   └── metal-systems.md
│   ├── 02-lab-skills/
│   │   ├── index.md
│   │   ├── lab-safety.md
│   │   ├── experiment-record.md
│   │   ├── sample-numbering.md
│   │   ├── metallographic-preparation.md
│   │   ├── hardness-test.md
│   │   └── tensile-test.md
│   ├── 03-characterization/
│   │   ├── index.md
│   │   ├── om.md
│   │   ├── sem.md
│   │   ├── eds.md
│   │   ├── xrd.md
│   │   ├── ebsd.md
│   │   └── tem.md
│   ├── 04-microstructure-property/
│   │   ├── index.md
│   │   ├── strength-plasticity-toughness.md
│   │   ├── grain-size-property.md
│   │   ├── second-phase.md
│   │   ├── defects-and-failure.md
│   │   ├── fracture-analysis.md
│   │   └── process-structure-property.md
│   ├── 05-literature-writing/
│   │   ├── index.md
│   │   ├── paper-reading.md
│   │   ├── literature-note-template.md
│   │   ├── weekly-report.md
│   │   └── research-summary.md
│   ├── 06-data-analysis/
│   │   ├── index.md
│   │   ├── excel-origin.md
│   │   ├── stress-strain.md
│   │   ├── hardness-statistics.md
│   │   ├── xrd-data.md
│   │   ├── sem-image-layout.md
│   │   └── ebsd-figures.md
│   ├── 07-project-practice/
│   │   ├── index.md
│   │   ├── lab-direction-overview.md
│   │   ├── current-project.md
│   │   ├── weekly-log.md
│   │   ├── experiment-archive.md
│   │   └── problem-log.md
│   └── 08-review-cards/
│       ├── index.md
│       ├── concept-cards.md
│       ├── experiment-cards.md
│       ├── characterization-qa.md
│       ├── interview-qa.md
│       └── common-mistakes.md
├── public/
│   ├── images/
│   └── files/
└── .vitepress/
    ├── config.mts
    └── theme/
```

## 5. 内容体系

网站一级栏目必须保持如下结构：

1. 学习路线图；
2. 金属材料基础课；
3. 实验室基础技能课；
4. 材料表征方法课；
5. 组织—性能分析课；
6. 文献阅读与科研写作课；
7. 数据处理与图谱分析课；
8. 课题组项目实践库；
9. 复习卡片与问题库。

未经用户确认，不要擅自改变一级栏目结构。

可以在一级栏目下新增二级文章，但必须符合对应模块的知识逻辑。

## 6. 内容写作要求

每篇知识文章应优先采用以下结构：

```markdown
# 标题

## 1. 这个知识点解决什么问题

## 2. 核心概念

## 3. 基本原理

## 4. 在金属材料科研中的作用

## 5. 典型应用场景

## 6. 常见误区

## 7. 我需要掌握到什么程度

## 8. 与其他知识点的关系

## 9. 复习问题

## 10. 参考资料 / 后续阅读
```

如果是实验技能类文章，应优先采用：

```markdown
# 标题

## 1. 实验目的

## 2. 适用场景

## 3. 所需设备与材料

## 4. 标准操作流程

## 5. 关键参数

## 6. 常见错误

## 7. 结果判断

## 8. 实验记录模板

## 9. 安全注意事项

## 10. 复习问题
```

如果是表征方法类文章，应优先采用：

```markdown
# 标题

## 1. 这个方法能看什么

## 2. 基本原理

## 3. 样品要求

## 4. 常见图像或图谱

## 5. 结果怎么看

## 6. 在金属材料研究中的用途

## 7. 常见误判

## 8. 与其他表征方法的互证关系

## 9. 我需要掌握到什么程度

## 10. 复习问题
```

## 7. 难度分级

所有核心知识文章建议标注难度等级：

* Level 0：科研常识，了解即可；
* Level 1：本科基础，必须理解；
* Level 2：实验入门，能按流程操作；
* Level 3：科研分析，能解释现象；
* Level 4：项目应用，能用于汇报、论文和答辩。

建议在每篇文章开头加入：

```markdown
---
title: 标题
level: Level 1
category: 金属材料基础课
tags:
  - 金属材料
  - 科研训练
---
```

## 8. 文件命名规范

所有文件夹和 Markdown 文件使用英文小写命名。

要求：

1. 使用短横线连接单词；
2. 不使用中文文件名；
3. 不使用空格；
4. 不使用拼音缩写；
5. 文件名应能表达文章主题。

示例：

```text
crystal-structure.md
metallographic-preparation.md
process-structure-property.md
literature-note-template.md
```

不推荐：

```text
晶体结构.md
jinxiang.md
article1.md
新建文档.md
```

## 9. 图片与附件规范

图片统一放在：

```text
public/images/
```

附件统一放在：

```text
public/files/
```

图片命名建议：

```text
module-topic-description-version.png
```

示例：

```text
sem-fracture-dimple-v1.png
xrd-peak-shift-example-v1.png
metallography-polishing-defect-v1.png
```

不要随意使用：

```text
截图1.png
图片.png
123.png
未命名.png
```

## 10. 禁止事项

Codex 在本项目中不得执行以下操作：

1. 不得删除 AGENTS.md、PROJECT_RULES.md、TASKS.md；
2. 不得未经确认改变一级知识体系；
3. 不得一次性生成大量低质量文章；
4. 不得编造实验结果；
5. 不得编造课题组真实项目数据；
6. 不得编造论文引用；
7. 不得替用户伪造成果；
8. 不得覆盖已有文章内容；
9. 不得删除 public/images 或 public/files 中的素材；
10. 不得引入复杂后端系统；
11. 不得在第一版中加入登录、数据库、评论系统；
12. 不得只追求视觉效果而破坏知识结构；
13. 不得修改与当前任务无关的文件；
14. 不得在未运行验证的情况下声称任务完成。

## 11. 每次任务的执行流程

Codex 每次执行任务前必须先完成：

1. 阅读 AGENTS.md；
2. 阅读 PROJECT_RULES.md；
3. 阅读 TASKS.md；
4. 复述当前任务目标；
5. 说明将修改哪些文件；
6. 明确不会修改哪些文件。

执行任务后必须输出：

1. 修改文件清单；
2. 新增文件清单；
3. 删除文件清单，如无删除则写“无”；
4. 运行命令；
5. 验证结果；
6. 遗留问题；
7. 下一步建议。

## 12. 验收标准

第一版网站完成的最低标准：

1. 项目能正常启动；
2. 首页能打开；
3. 顶部导航栏存在；
4. 侧边栏目录存在；
5. 一级知识体系完整；
6. 每个一级栏目至少有 index.md；
7. 至少 8 篇核心文章存在；
8. 本地搜索可用；
9. 深色模式可用；
10. 移动端布局不明显错乱；
11. Markdown 内容能正常渲染；
12. 无明显死链；
13. 构建命令能通过；
14. README 中写明运行方法；
15. 最终输出变更报告。

## 13. 用户角色与 Codex 角色

用户负责：

1. 判断网站方向；
2. 确认知识体系；
3. 提供真实科研训练信息；
4. 判断内容是否符合自身需求；
5. 最终验收。

ChatGPT Thinking 负责：

1. 设计知识体系；
2. 规划工程结构；
3. 审查逻辑链；
4. 生成任务说明；
5. 帮助用户判断优先级。

Codex 负责：

1. 建立项目；
2. 生成文件；
3. 修改代码；
4. 整理目录；
5. 运行命令；
6. 输出验证结果；
7. 按任务边界执行。

Codex 不是项目总负责人。项目总负责人是用户和已冻结的逻辑链。
