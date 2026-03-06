"use client"
import { useT } from "@/lib/i18n"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ScrollAreaPage() {
  const { t } = useT()
  return (
    <div className="space-y-6">
      <DocHeader title="Scroll Area" component="scroll-area" />
      <InstallCommand command="npx shadcn@latest add scroll-area" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="py-2 text-sm">
              {t("scrollableContent")} {i + 1}
            </div>
          ))}
        </ScrollArea>
      </ComponentPreview>
    </div>
  )
}
