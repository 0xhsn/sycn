"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useT } from "@/lib/i18n"

export default function AlertPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Alert" component="alert" />
      <InstallCommand name="alert" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"\n\n<Alert>\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can add components to your app using the cli.</AlertDescription>\n</Alert>`}>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
      </ComponentPreview>
      <h2 className="text-xl font-semibold">Destructive</h2>
      <ComponentPreview code={`<Alert variant="destructive">\n  <AlertTitle>Error</AlertTitle>\n  <AlertDescription>Something went wrong.</AlertDescription>\n</Alert>`}>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </Alert>
      </ComponentPreview>
    </div>
  )
}
