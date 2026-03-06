"use client"
import { useT } from "@/lib/i18n"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

export default function HoverCardPage() {
  const { t } = useT()
  return (
    <div className="space-y-6">
      <DocHeader title="Hover Card" component="hover-card" />
      <InstallCommand command="npx shadcn@latest add hover-card" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">{t("hoverMe")}</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Hover Card</h4>
              <p className="text-sm text-muted-foreground">This content appears on hover. Great for previews and additional info.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentPreview>
    </div>
  )
}
