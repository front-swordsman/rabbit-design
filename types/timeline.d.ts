export interface TimelineProps {
  /* 当前高亮的节点 */
  current?: number
  /* 高亮节点的颜色 */
  highlightColor?: string
  /* 可以使用 options 或者 Item 两种方式 */
  options?: TimelineItemConfig[]
  /* 子节点 */
  children?: React.ReactNode
}

interface TimelineItemConfig {
  /* 自定义时间轴点 */
  dot?: React.ReactNode
  /* 线条高度, 单位百分比, 默认 100 */
  lineHeight?: number
  /* 时间线内容 */
  content?: React.ReactNode
}

export interface TimeLineItemProps {
  /* 自定义时间轴点 */
  dot?: React.ReactNode
  /* 线条高度, 单位百分比, 默认 100 */
  lineHeight?: number
  /* 子节点 */
  children?: React.ReactNode
  /* 是否是当前项, 非对外暴露属性  */
  ifCurrent?: boolean
  /* 高亮节点的颜色, 非对外暴露属性 */
  highlightColor?: string
}
