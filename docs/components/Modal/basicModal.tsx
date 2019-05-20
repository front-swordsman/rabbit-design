import * as React from 'react'
import { Button, Modal } from 'components'

export default function BasicModal() {
  const [visible, setVisible] = React.useState(false)
  return (
    <div>
      <h1>基础 Modal</h1>
      <Button onClick={() => setVisible(true)}>基础用法</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title="基础 Modal "
        onOk={() => setVisible(false)}
      >
        <div>基础modal内容区</div>
      </Modal>
    </div>
  )
}
