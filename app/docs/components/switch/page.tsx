"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useT } from "@/lib/i18n"

export default function SwitchPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Switch" component="switch" />
      <InstallCommand name="switch" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Switch } from "@/components/ui/switch"\nimport { Label } from "@/components/ui/label"\n\n<div className="flex items-center space-x-2">\n  <Switch id="airplane-mode" />\n  <Label htmlFor="airplane-mode">Airplane Mode</Label>\n</div>`}>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </ComponentPreview>
      <h2 className="text-xl font-semibold">Checked</h2>
      <ComponentPreview code={`<Switch defaultChecked />`}>
        <div className="flex items-center space-x-2">
          <Switch id="checked-switch" defaultChecked />
          <Label htmlFor="checked-switch">Enabled</Label>
        </div>
      </ComponentPreview>
    </div>
  )
}
