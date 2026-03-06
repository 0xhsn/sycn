"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Skeleton } from "@/components/ui/skeleton"
import { useT } from "@/lib/i18n"

export default function SkeletonPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Skeleton" component="skeleton" />
      <InstallCommand name="skeleton" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Skeleton } from "@/components/ui/skeleton"\n\n<div className="flex items-center space-x-4">\n  <Skeleton className="h-12 w-12 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-[250px]" />\n    <Skeleton className="h-4 w-[200px]" />\n  </div>\n</div>`}>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentPreview>
    </div>
  )
}
