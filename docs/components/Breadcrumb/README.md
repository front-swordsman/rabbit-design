---
imports: import DemoCode from '!raw-loader!./simple.tsx';
  import Demo from './simple.tsx';
---

# Breadcrumb 面包屑

导航类组件，便于在几个关联页面之间快速跳转

## 简单示例

:::demo
<Block code={DemoCode} des="面包屑">
<Demo />
</Block>
:::

## Props

| 参数       | 说明                | 类型                                  | 默认值 |
| ---------- | ------------------- | ------------------------------------- | ------ |
| prefixCls  | 组件 className 前缀 | string                                | -      |
| className  | 样式相关            | string                                | -      |
| style      | 样式                | React.CSSProperties                   | -      |
| onClick    | 点击的回调          | (index:number,url: string) => void    | -      |
| size       | 尺寸                | string, "default" / "small" / "large" | -      |
| dataSource | 数据源              | BreadcrumbItemProps[]                 | -      |
| separator  | 分隔符              | React.ReactNode                       | -      |
| expandMax  | 最大显示多少级      | number                                | -      |

BreadcrumbItemProps:

| 参数    |      说明      |      类型       | 默认值 |
| ------- | :------------: | :-------------: | -----: |
| content | 该级的展示内容 | React.ReactNode |      - |
| link    |   该级的链接   |     string      |      - |
