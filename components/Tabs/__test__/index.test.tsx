import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Tabs from '../index'

const { useState } = React

const tabs = [
  {
    title: '标签一',
    content: <div>标签一的内容</div>
  },
  {
    title: '标签二',
    content: <div>标签二的内容</div>
  },
  {
    title: '标签三',
    content: <div>标签三的内容</div>,
    disabled: true
  }
]

describe('Tabs Test', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })
  it('snapshot', () => {
    const tabsRenderTop = render(<Tabs options={tabs} />)
    const tabsRenderBottom = render(<Tabs options={tabs} tabBarPosition="bottom" />)
    const tabsRenderLeft = render(<Tabs options={tabs} tabBarPosition="left" />)
    const tabsRenderRight = render(<Tabs options={tabs} tabBarPosition="right" />)
    expect(tabsRenderTop.container.innerHTML).toMatchSnapshot()
    expect(tabsRenderBottom.container.innerHTML).toMatchSnapshot()
    expect(tabsRenderLeft.container.innerHTML).toMatchSnapshot()
    expect(tabsRenderRight.container.innerHTML).toMatchSnapshot()
  })
  it('dispatch change tab', async () => {
    const TabDemo = function() {
      const [activeTab, setActiveTab] = useState(0)
      return (
        <Tabs
          options={tabs}
          activeTab={activeTab}
          onChange={(index: number) => setActiveTab(index)}
        />
      )
    }

    const { getByText } = render(<TabDemo />)
    expect(getByText('标签一的内容')).toBeTruthy()
    fireEvent.click(getByText('标签二'))
    expect(getByText('标签二的内容')).toBeTruthy()
    fireEvent.click(getByText('标签三'))
    expect(getByText('标签二的内容')).toBeTruthy()
  })
})
