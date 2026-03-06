"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useT } from "@/lib/i18n"

export default function CheckboxPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Checkbox" component="checkbox" />
      <InstallCommand name="checkbox" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Checkbox } from "@/components/ui/checkbox"\n\n<Checkbox />`}>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">{t("confirm")}</Label>
        </div>
      </ComponentPreview>
      <h2 className="text-xl font-semibold">{t("variants")}</h2>
      <ComponentPreview code={`<Checkbox checked />\n<Checkbox />`}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">{t("checked")}</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">{t("unchecked")}</Label>
          </div>
        </div>
      </ComponentPreview>
    </div>
  )
}
