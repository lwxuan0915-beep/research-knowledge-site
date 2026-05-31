import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/research-knowledge-site/',
  title: '金属材料科研训练知识库',
  description: '面向本科生科研训练的金属材料知识体系、实验技能与项目实践记录',
  lang: 'zh-CN',
  appearance: true,
  themeConfig: {
    siteTitle: '金属材料科研训练知识库',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路线图', link: '/00-learning-map/' },
      { text: '知识课程', link: '/01-metal-basics/' },
      { text: '项目实践', link: '/07-project-practice/' },
      { text: '复习卡片', link: '/08-review-cards/' }
    ],
    sidebar: [
      {
        text: '学习路线图',
        items: [
          { text: '学习路线图首页', link: '/00-learning-map/' },
          { text: '第一版学习路线', link: '/00-learning-map/roadmap.html' }
        ]
      },
      {
        text: '金属材料基础课',
        items: [
          { text: '模块首页', link: '/01-metal-basics/' },
          { text: '材料科学概论', link: '/01-metal-basics/material-science-overview.html' },
          { text: '工艺—组织—性能逻辑链（基础版）', link: '/01-metal-basics/structure-process-property.html' },
          { text: '晶体结构基础', link: '/01-metal-basics/crystal-structure.html' },
          { text: '晶体缺陷', link: '/01-metal-basics/defects.html' }
        ]
      },
      {
        text: '实验室基础技能课',
        items: [
          { text: '模块首页', link: '/02-lab-skills/' },
          { text: '金相制样基础', link: '/02-lab-skills/metallographic-preparation.html' }
        ]
      },
      {
        text: '材料表征方法课',
        items: [
          { text: '模块首页', link: '/03-characterization/' },
          { text: 'SEM 扫描电镜入门', link: '/03-characterization/sem' },
          { text: 'EDS 能谱分析入门', link: '/03-characterization/eds' },
          { text: 'XRD 物相分析入门', link: '/03-characterization/xrd' },
          { text: 'TEM 透射电镜入门', link: '/03-characterization/tem' }
        ]
      },
      {
        text: '组织—性能分析课',
        items: [
          { text: '模块首页', link: '/04-microstructure-property/' },
          { text: '工艺—组织—性能逻辑链（进阶版）', link: '/04-microstructure-property/process-structure-property.html' }
        ]
      },
      {
        text: '文献阅读与科研写作课',
        items: [
          { text: '模块首页', link: '/05-literature-writing/' },
          { text: '材料论文阅读方法', link: '/05-literature-writing/paper-reading.html' },
          { text: '实验记录与周报', link: '/05-literature-writing/weekly-report.html' }
        ]
      },
      {
        text: '数据处理与图谱分析课',
        items: [
          { text: '模块首页', link: '/06-data-analysis/' },
          { text: '应力—应变曲线入门', link: '/06-data-analysis/stress-strain.html' }
        ]
      },
      {
        text: '课题组项目实践库',
        items: [
          { text: '模块首页', link: '/07-project-practice/' }
        ]
      },
      {
        text: '复习卡片与问题库',
        items: [
          { text: '模块首页', link: '/08-review-cards/' },
          { text: '面试问答卡片', link: '/08-review-cards/interview-qa.html' },
          { text: '常见误区整理', link: '/08-review-cards/common-mistakes.html' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})
