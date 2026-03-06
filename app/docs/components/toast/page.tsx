"use client"
import { useT } from "@/lib/i18n"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ToastPage() {
  const { t } = useT()
  const { toast } = useToast()

  return (
    <div className="space-y-6">
      <DocHeader title="Toast" component="toast" />
      <InstallCommand command="npx shadcn@latest add toast" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Toast Title",
              description: "This is a toast notification.",
            })
          }}
        >
          {t("showToast")}
        </Button>
      </ComponentPreview>
    </div>
  )
}
