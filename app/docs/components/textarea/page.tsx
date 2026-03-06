"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Textarea } from "@/components/ui/textarea"
import { useT } from "@/lib/i18n"

export default function TextareaPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Textarea" component="textarea" />
      <InstallCommand name="textarea" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Textarea } from "@/components/ui/textarea"\n\n<Textarea />`}>
        <Textarea />
      </ComponentPreview>
      <h2 className="text-xl font-semibold">{t("variants")}</h2>
      <ComponentPreview code={`<Textarea placeholder="Type your message here." />`}>
        <Textarea placeholder={t("placeholder")} className="max-w-sm" />
      </ComponentPreview>
    </div>
  )
}
