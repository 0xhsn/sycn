"use client"
import { useT } from "@/lib/i18n"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar"

export default function MenubarPage() {
  const { t } = useT()
  return (
    <div className="space-y-6">
      <DocHeader title="Menubar" component="menubar" />
      <InstallCommand command="npx shadcn@latest add menubar" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{t("file")}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New File</MenubarItem>
              <MenubarItem>Open</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Save</MenubarItem>
              <MenubarItem>Exit</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{t("edit")}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{t("view")}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Zoom In</MenubarItem>
              <MenubarItem>Zoom Out</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Fullscreen</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </ComponentPreview>
    </div>
  )
}
