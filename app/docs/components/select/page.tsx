"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useT } from "@/lib/i18n"

export default function SelectPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Select" component="select" />
      <InstallCommand name="select" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"\n\n<Select>\n  <SelectTrigger className="w-[180px]">\n    <SelectValue placeholder="Select a fruit" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="apple">Apple</SelectItem>\n    <SelectItem value="banana">Banana</SelectItem>\n    <SelectItem value="cherry">Cherry</SelectItem>\n  </SelectContent>\n</Select>`}>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">{t("option1")}</SelectItem>
            <SelectItem value="banana">{t("option2")}</SelectItem>
            <SelectItem value="cherry">{t("option3")}</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreview>
    </div>
  )
}
