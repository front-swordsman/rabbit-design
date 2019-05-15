---
imports: 
  import SimpleDemoCode from '!raw-loader!./simpleDemo.tsx';
  import SimpleDemo from './simpleDemo.tsx';
  import BasicDemoCode from '!raw-loader!./basic.tsx';
  import BasicDemo from './basic.tsx';
---

# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层

## 基础用法

:::demo
<Block code={BasicDemoCode} des="基础用法">
<BasicDemo />
</Block>
:::

## 多个方向

:::demo
<Block code={SimpleDemoCode} des="简单用法">
<SimpleDemo />
</Block>
:::

## Api

| 参数               | 说明                                                                | 类型                                                                                                                                     | 可选值 | 默认值              |
| ------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------- |
| content            | 内容区域                                                            | ReactNode                                                                                                                                | --     | --                  |
| placement          | `popover` 的方向                                                    | `top`, `topLeft`, `topRight`, `bottom`, `bottomLeft`, `bottomRight`, `left`, `leftTop`, `leftBottom`, `right`, `rightTop`, `rightBottom` | --     | `top`               |
| visible            | 是否可见                                                            | boolean                                                                                                                                  | --     | `false`             |
| onVisibleChange    | 显影状态变化的回调, 通常与 `visible` 配合使用                       | (visible: boolean) => void                                                                                                               | --     | --                  |
| getPopupContainer  | 提供渲染到某个节点下                                                | () => HTMLElement                                                                                                                        | --     | () => document.body |
| contentClass       | 内容区的 `class`                                                    | string                                                                                                                                   | --     | --                  |
| contentStyle       | 内容区的样式                                                        | object                                                                                                                                   | --     | --                  |
| trigger            | 触发 `popover` 出现的行为                                           | `hover`, `click`                                                                                                                         | --     | `hover`             |
| autoAdjustOverflow | 是否自动调整位置                                                    | boolean                                                                                                                                  | --     | `true`              |
| title              | 标题                                                                | ReactNode                                                                                                                                | --     | --                  |
| wrapperComponent   | 包裹触发元素的标签，默认 `span`, 使用的时候保持和触发的元素样式统一 | HTMLElementType                                                                                                                          | --     | `span`              |
| wrapperStyle       | 包裹触发元素的样式                                                  | object                                                                                                                                   | --     | --                  |