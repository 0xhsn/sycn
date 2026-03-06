"use client"

import { useT } from "@/lib/i18n"

export function DocHeader({
  title,
  description,
  component,
}: {
  title: string
  description?: string
  component?: string
}) {
  const { desc } = useT()
  const resolvedDesc = component ? desc(component) : description || ""

  return (
    <div className="space-y-2">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-lg text-muted-foreground">{resolvedDesc}</p>
    </div>
  )
}
