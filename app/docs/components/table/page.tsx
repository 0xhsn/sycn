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
      <ComponentPreview code={`import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"\n\n<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Name</TableHead>\n      <TableHead>Status</TableHead>\n      <TableHead>Role</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Alice</TableCell>\n      <TableCell>Active</TableCell>\n      <TableCell>Admin</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("name")}</TableHead>
              <TableHead>{t("status")}</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alice</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob</TableCell>
              <TableCell>Inactive</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Charlie</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Editor</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentPreview>
    </div>
  )
}
