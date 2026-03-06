import type { Meta, StoryObj } from "@storybook/react"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from "@/components/ui/command"

const meta: Meta<typeof Command> = {
  title: "Overlay/Command",
  component: Command,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[400px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile<CommandShortcut>Ctrl+P</CommandShortcut></CommandItem>
          <CommandItem>Billing<CommandShortcut>Ctrl+B</CommandShortcut></CommandItem>
          <CommandItem>Settings<CommandShortcut>Ctrl+S</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
