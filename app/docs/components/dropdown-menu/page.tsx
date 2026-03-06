"use client"
import { useT } from "@/lib/i18n"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function DropdownMenuPage() {
  const { t } = useT()
  return (
    <div className="space-y-6">
      <DocHeader title="Dropdown Menu" component="dropdown-menu" />
      <InstallCommand command="npx shadcn@latest add dropdown-menu" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{t("open")}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>
    </div>
  )
}
