"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useT } from "@/lib/i18n"

export default function LabelPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Label" component="label" />
      <InstallCommand name="label" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Label } from "@/components/ui/label"\nimport { Input } from "@/components/ui/input"\n\n<Label htmlFor="email">Email</Label>\n<Input id="email" placeholder="Email" />`}>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="email">{t("email")}</Label>
          <Input id="email" placeholder={t("email")} />
        </div>
      </ComponentPreview>
    </div>
  )
}
