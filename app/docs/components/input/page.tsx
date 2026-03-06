"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Input } from "@/components/ui/input"
import { useT } from "@/lib/i18n"

export default function InputPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Input" component="input" />
      <InstallCommand name="input" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Input } from "@/components/ui/input"\n\n<Input />`}>
        <Input />
      </ComponentPreview>
      <h2 className="text-xl font-semibold">{t("variants")}</h2>
      <ComponentPreview code={`<Input placeholder="Email" />\n<Input disabled placeholder="Disabled" />`}>
        <div className="flex flex-col gap-2 max-w-sm">
          <Input placeholder={t("email")} />
          <Input disabled placeholder={t("disabled")} />
        </div>
      </ComponentPreview>
    </div>
  )
}
