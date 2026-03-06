"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Toggle } from "@/components/ui/toggle"
import { useT } from "@/lib/i18n"

export default function TogglePage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Toggle" component="toggle" />
      <InstallCommand name="toggle" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Toggle } from "@/components/ui/toggle"\n\n<Toggle>Bold</Toggle>`}>
        <Toggle>{t("bold")}</Toggle>
      </ComponentPreview>
      <h2 className="text-xl font-semibold">{t("variants")}</h2>
      <ComponentPreview code={`<Toggle variant="default">Default</Toggle>\n<Toggle variant="outline">Outline</Toggle>`}>
        <div className="flex gap-2">
          <Toggle variant="default">{t("default")}</Toggle>
          <Toggle variant="outline">{t("outline")}</Toggle>
        </div>
      </ComponentPreview>
    </div>
  )
}
