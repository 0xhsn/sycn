"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Progress } from "@/components/ui/progress"
import { useT } from "@/lib/i18n"

export default function ProgressPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Progress" component="progress" />
      <InstallCommand name="progress" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Progress } from "@/components/ui/progress"\n\n<Progress value={60} />`}>
        <Progress value={60} className="max-w-sm" />
      </ComponentPreview>
    </div>
  )
}
