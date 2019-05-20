import * as React from 'react'
import Tabs from 'components/Tabs/tabs'
import './demo.scss'

const tabs0 = [
  {
    title: '标签一',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签一的内容
      </div>
    )
  },
  {
    title: '标签二',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签二的内容
      </div>
    )
  },
  {
    title: '标签三',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签三的内容
      </div>
    )
  },
  {
    title: '标签四',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签四的内容
      </div>
    )
  }
]

const tabs1 = [
  {
    title: '标签一',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签一的内容
      </div>
    )
  },
  {
    title: '标签二',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签二的内容
      </div>
    ),
    disabled: true
  },
  {
    title: '标签三',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签三的内容
      </div>
    )
  },
  {
    title: '标签四',
    content: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '120px',
          backgroundColor: '#fff'
        }}
      >
        标签四的内容
      </div>
    )
  }
]

export default class SimpleTab extends React.Component {
  state = {
    page0: 0,
    page1: 0,
    page2: 0,
    page3: 0
  }

  onChange = (index: number, _e: any, order: any) => {
    this.setState({
      [`page${order}`]: index
    })
  }

  render() {
    const { page0, page1, page2, page3 } = this.state

    return (
      <>
        <div>线性模式</div>
        <Tabs
          options={tabs0}
          activeTab={page0}
          onChange={(index: number, e: any) => this.onChange(index, e, 0)}
          style={{ width: 300 }}
        />
        <div>垂直模式</div>
        <Tabs
          options={tabs0}
          activeTab={page1}
          onChange={(index: number, e: any) => this.onChange(index, e, 1)}
          tabBarPosition="left"
        />
        <div>卡片模式(暂不提供卡片模式下的垂直模式)</div>
        <Tabs
          options={tabs0}
          activeTab={page2}
          onChange={(index: number, e: any) => this.onChange(index, e, 2)}
          type="card"
          style={{ width: 300 }}
        />
        <div>禁用</div>
        <Tabs
          options={tabs1}
          activeTab={page3}
          onChange={(index: number, e: any) => this.onChange(index, e, 3)}
          style={{ width: 300 }}
        />
      </>
    )
  }
}
