import { createApp, h, render } from 'vue'
import Message from './Message.vue'
export type MessageType = 'success' | 'error' | 'default'
const createMessage = (message: string, type: MessageType, timeout?: number) => {
  const messageVnode = h(Message, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  // 挂载
  render(messageVnode, mountNode)

  // 从节点卸载组件
  const destroy = () => {
    render(null, mountNode)
    document.body.removeChild(mountNode)
  }
  if (timeout) {
    setTimeout(() => {
      destroy()
    }, timeout)
  }
  return {
    destroy
  }
}

export default createMessage
