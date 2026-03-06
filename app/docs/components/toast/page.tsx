"use client"
import { useState } from "react"
import { useT } from "@/lib/i18n"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Button } from "@/components/ui/button"
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose } from "@/components/ui/toast"

export default function ToastPage() {
  const { t } = useT()
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <DocHeader title="Toast" component="toast" />
      <InstallCommand command="npx shadcn@latest add toast" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <ToastProvider>
          <Button
            variant="outline"
            onClick={() => setOpen(true)}
          >
            {t("showToast")}
          </Button>
          <Toast open={open} onOpenChange={setOpen}>
            <div className="grid gap-1">
              <ToastTitle>Toast</ToastTitle>
              <ToastDescription>{t("cannotBeUndone")}</ToastDescription>
            </div>
            <ToastClose />
          </Toast>
          <ToastViewport />
        </ToastProvider>
      </ComponentPreview>
    </div>
  )
}
