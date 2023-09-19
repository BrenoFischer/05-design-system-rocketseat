import { Button, Toast, ToastProps } from '@ignite-ui-breno-perricone/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Book
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props}></Toast>
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  args: {
    title: 'Book done!',
    description: 'Wednesday, October 23 at 4pm',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
