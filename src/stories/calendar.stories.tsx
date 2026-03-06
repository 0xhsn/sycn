import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"

const meta: Meta<typeof Calendar> = {
  title: "Data/Calendar",
  component: Calendar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <Calendar selected={date} onSelect={(d) => setDate(d)} className="rounded-md border" />
  },
}
