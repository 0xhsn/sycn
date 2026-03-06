"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Separator } from "@/components/ui/separator"
import { useT } from "@/lib/i18n"

export default function SeparatorPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Separator" component="separator" />
      <InstallCommand name="separator" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Separator } from "@/components/ui/separator"\n\n<Separator />`}>
        <div className="max-w-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Title</h4>
            <p className="text-sm text-muted-foreground">A short description.</p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Another Section</h4>
            <p className="text-sm text-muted-foreground">More content here.</p>
          </div>
        </div>
      </ComponentPreview>
      <h2 className="text-xl font-semibold">Vertical</h2>
      <ComponentPreview code={`<Separator orientation="vertical" />`}>
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>{t("docs")}</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </ComponentPreview>
    </div>
  )
}
