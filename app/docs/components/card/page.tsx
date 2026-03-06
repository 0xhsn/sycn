"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/i18n"

export default function CardPage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Card" component="card" />
      <InstallCommand name="card" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"\n\n<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card Content</p>\n  </CardContent>\n  <CardFooter>\n    <p>Card Footer</p>\n  </CardFooter>\n</Card>`}>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>
    </div>
  )
}
