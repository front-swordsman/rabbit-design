import * as React from 'react'
import { TabsProps } from 'types/tabs.d'
import cx from 'classnames'

const { useEffect, useCallback } = React

function Tabs({
  prefixCls = 'snake-tabs',
  tabBarPosition = 'top',
  activeTab,
  tabs,
  tabBarActiveTextColor,
  tabBarInactiveTextColor,
  onChange,
  onTabClick,
  children,
  className,
  style
}: TabsProps) {
  // ref: React.RefObject<HTMLElement>
  let underline: any = null
  let tabObj: any = {}
  let tabWrap: any = null

  useEffect(() => {
    handleUnderline()
  }, [activeTab])

  // 处理下划线样式
  const handleUnderline = () => {
    underline && (underline.style.width = `${getUnderlineWidth(activeTab)}px`)
    underline && (underline.style.left = `${getLeft(activeTab)}px`)
  }

  // 获取下划线宽度
  const getUnderlineWidth = useCallback(
    (current: number) => {
      let underlineWidth = tabObj[`tab${current}`].getBoundingClientRect().width
      return underlineWidth
    },
    [activeTab]
  )

  // 获取当前激活 tab 距离左侧的距离
  const getLeft = useCallback(
    (current: number) => {
      if (tabObj[`tab${current}`] && tabWrap) {
        return (
          tabObj[`tab${current}`].getBoundingClientRect().left -
          tabWrap.getBoundingClientRect().left
        )
      } else {
        return 0
      }
    },
    [activeTab]
  )

  // 更改 Tab
  const changeTab = (e: React.MouseEvent<HTMLElement>, index: number, r: any) => {
    // 禁用 tab 点击
    if (r && r.disabled) return

    if (index !== activeTab) {
      onChange && onChange(index, e)
    }
    onTabClick && onTabClick(index, e)
  }

  const renderTab = () => {
    return (
      <div
        className={cx(`${prefixCls}-wrap`, `${prefixCls}-wrap-${tabBarPosition}`)}
        ref={(r: any) => (tabWrap = r)}
      >
        {tabs.map((r: any, index: number) => {
          return (
            <div
              className={cx(
                `${prefixCls}-wrap-item`,
                `${prefixCls}-wrap-item-${tabBarPosition}`,
                `${prefixCls}-wrap-item-customWidth`
              )}
              onClick={e => changeTab(e, index, r)}
              key={index}
            >
              <div
                className={cx({
                  [`${prefixCls}-wrap-active`]: activeTab === index
                })}
                style={
                  activeTab === index
                    ? { color: tabBarActiveTextColor }
                    : { color: tabBarInactiveTextColor }
                }
                ref={(ele: any) => {
                  tabObj[`tab${index}`] = ele
                }}
              >
                {r.title || ''}
              </div>
            </div>
          )
        })}
        <div
          className={cx(
            `${prefixCls}-wrap-underline`,
            `${prefixCls}-wrap-underline-${tabBarPosition}`
          )}
          ref={ele => {
            underline = ele
          }}
        />
      </div>
    )
  }

  const renderContent = () => {
    if (children && activeTab >= 0) {
      return children[activeTab]
    } else {
      return null
    }
  }

  function layout() {
    switch (tabBarPosition) {
      case 'bottom':
        return (
          <div>
            {renderContent()}
            {renderTab()}
          </div>
        )
      default:
        return (
          <div>
            {renderTab()}
            {renderContent()}
          </div>
        )
    }
  }

  function getClassName() {
    return cx(`${prefixCls}`, className)
  }

  return (
    <div className={getClassName()} style={style}>
      {layout()}
    </div>
  )
}

export default React.forwardRef(Tabs)