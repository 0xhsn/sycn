"use client"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/i18n"

export default function DialogPage() {
  const { t } = useT()
  return (
    <div className="space-y-6">
      <DocHeader title="Dialog" component="dialog" />
      <InstallCommand command="npx shadcn@latest add dialog" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">{t("open")}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("dialogTitle")}</DialogTitle>
              <DialogDescription>{t("dialogDesc")}</DialogDescription>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">{t("dialogContent")}</p>
          </DialogContent>
        </Dialog>
      </ComponentPreview>
    </div>
  )
}
