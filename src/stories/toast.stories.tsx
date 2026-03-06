import type { Meta, StoryObj } from "@storybook/react"
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastAction, ToastClose } from "@/components/ui/toast"

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Toast open>
        <div className="grid gap-1">
          <ToastTitle>Scheduled: Catch up</ToastTitle>
          <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}

export const WithAction: Story = {
  render: () => (
    <ToastProvider>
      <Toast open>
        <div className="grid gap-1">
          <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
          <ToastDescription>There was a problem with your request.</ToastDescription>
        </div>
        <ToastAction altText="Try again">Try again</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}

export const Destructive: Story = {
  render: () => (
    <ToastProvider>
      <Toast open variant="destructive">
        <div className="grid gap-1">
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>Something went wrong.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}
