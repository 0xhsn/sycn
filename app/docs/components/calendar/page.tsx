"use client"
import { useState } from "react"
import { useT } from "@/lib/i18n"
import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarPage() {
  const { t } = useT()
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-6">
      <DocHeader title="Calendar" component="calendar" />
      <InstallCommand command="npx shadcn@latest add calendar" />
      <h2 className="text-2xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </ComponentPreview>
    </div>
  )
}
