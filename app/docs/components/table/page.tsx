"use client"

import { DocHeader } from "@/components/docs/doc-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { InstallCommand } from "@/components/docs/install-command"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"
import { useT } from "@/lib/i18n"

export default function TablePage() {
  const { t } = useT()
  return (
    <div className="space-y-8">
      <DocHeader title="Table" component="table" />
      <InstallCommand name="table" />
      <h2 className="text-xl font-semibold">{t("usage")}</h2>
      <ComponentPreview>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("name")}</TableHead>
              <TableHead>{t("status")}</TableHead>
              <TableHead>{t("role")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{t("name")} 1</TableCell>
              <TableCell>{t("active")}</TableCell>
              <TableCell>{t("admin")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("name")} 2</TableCell>
              <TableCell>{t("inactive")}</TableCell>
              <TableCell>{t("user")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("name")} 3</TableCell>
              <TableCell>{t("active")}</TableCell>
              <TableCell>{t("editor")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentPreview>
    </div>
  )
}
