"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useState, useEffect, createContext, useContext } from "react"

const i18n = {
  rtl: {
    identity: "الهوية البصرية",
    components: "العناصر",
    palette: "لوحة الألوان",
    typography: "الخطوط",
    flag: "العلم",
    map: "الخريطة",
    resources: "الموارد",
    dark: "داكن",
    light: "فاتح",
  },
  ltr: {
    identity: "Visual Identity",
    components: "Components",
    palette: "Color Palette",
    typography: "Typography",
    flag: "Flag",
    map: "Map",
    resources: "Resources",
    dark: "Dark",
    light: "Light",
  },
}

type Dir = "rtl" | "ltr"
const DirContext = createContext<{ dir: Dir; setDir: (d: Dir) => void }>({ dir: "rtl", setDir: () => {} })
export const useDir = () => useContext(DirContext)

const identityItems = [
  { en: "palette", ar: "palette" },
  { en: "typography", ar: "typography" },
  { en: "flag", ar: "flag" },
  { en: "map", ar: "map" },
  { en: "resources", ar: "resources" },
]

const components: { en: string; ar: string }[] = [
  { en: "Accordion", ar: "أكورديون" },
  { en: "Alert", ar: "تنبيه" },
  { en: "Alert Dialog", ar: "نافذة تنبيه" },
  { en: "Aspect Ratio", ar: "نسبة العرض" },
  { en: "Avatar", ar: "صورة رمزية" },
  { en: "Badge", ar: "شارة" },
  { en: "Breadcrumb", ar: "مسار التنقل" },
  { en: "Button", ar: "زر" },
  { en: "Calendar", ar: "تقويم" },
  { en: "Card", ar: "بطاقة" },
  { en: "Checkbox", ar: "مربع اختيار" },
  { en: "Collapsible", ar: "قابل للطي" },
  { en: "Command", ar: "لوحة أوامر" },
  { en: "Context Menu", ar: "قائمة سياقية" },
  { en: "Dialog", ar: "نافذة حوار" },
  { en: "Dropdown Menu", ar: "قائمة منسدلة" },
  { en: "Hover Card", ar: "بطاقة تمرير" },
  { en: "Input", ar: "حقل إدخال" },
  { en: "Label", ar: "تسمية" },
  { en: "Menubar", ar: "شريط قوائم" },
  { en: "Navigation Menu", ar: "قائمة تنقل" },
  { en: "Pagination", ar: "ترقيم صفحات" },
  { en: "Popover", ar: "نافذة منبثقة" },
  { en: "Progress", ar: "شريط تقدم" },
  { en: "Radio Group", ar: "مجموعة اختيار" },
  { en: "Scroll Area", ar: "منطقة تمرير" },
  { en: "Select", ar: "قائمة اختيار" },
  { en: "Separator", ar: "فاصل" },
  { en: "Sheet", ar: "لوحة جانبية" },
  { en: "Sidebar", ar: "شريط جانبي" },
  { en: "Skeleton", ar: "هيكل تحميل" },
  { en: "Slider", ar: "شريط تمرير" },
  { en: "Switch", ar: "مفتاح تبديل" },
  { en: "Table", ar: "جدول" },
  { en: "Tabs", ar: "تبويبات" },
  { en: "Textarea", ar: "حقل نصي" },
  { en: "Toast", ar: "إشعار" },
  { en: "Toggle", ar: "زر تبديل" },
  { en: "Toggle Group", ar: "مجموعة تبديل" },
  { en: "Tooltip", ar: "تلميح" },
]

function DirToggle({ dir, setDir }: { dir: Dir; setDir: (d: Dir) => void }) {
  return (
    <button
      onClick={() => setDir(dir === "rtl" ? "ltr" : "rtl")}
      className="flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent/50"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      {dir === "rtl" ? "عربي" : "EN"}
    </button>
  )
}

function ThemeToggle({ dir }: { dir: Dir }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = theme === "dark"
  const t = i18n[dir]

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent/50"
    >
      {isDark ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
      )}
      {isDark ? t.light : t.dark}
    </button>
  )
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [dir, setDir] = useState<Dir>("rtl")

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = dir === "rtl" ? "ar" : "en"
  }, [dir])

  const t = i18n[dir]

  return (
    <DirContext.Provider value={{ dir, setDir }}>
      <div className="flex min-h-screen">
        <aside className="fixed inset-inline-start-0 top-0 h-screen w-[250px] overflow-y-auto scrollbar-none border-fade-e">
          <div className="p-4">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/emblem.svg" alt="sycn" width={40} height={40} />
              <span className="text-xl font-bold">sycn</span>
            </Link>

            <div className="flex gap-2 mb-6">
              <ThemeToggle dir={dir} />
              <DirToggle dir={dir} setDir={setDir} />
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {t.identity}
              </h2>
              <ul className="space-y-0.5">
                {identityItems.map((item) => {
                  const href = `/docs/identity/${item.en}`
                  const active = pathname === href
                  return (
                    <li key={item.en}>
                      <Link
                        href={href}
                        className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                          active
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {t[item.en as keyof typeof t]}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                {t.components}
              </h2>
              <ul className="space-y-0.5">
                {components.map((item) => {
                  const slug = item.en.toLowerCase().replace(/ /g, "-")
                  const href = `/docs/components/${slug}`
                  const active = pathname === href
                  return (
                    <li key={slug}>
                      <Link
                        href={href}
                        className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                          active
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {dir === "rtl" ? item.ar : item.en}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </aside>

        <main className="flex-1 ms-[250px]">
          <div className="max-w-3xl mx-auto px-8 py-12">{children}</div>
        </main>
      </div>
    </DirContext.Provider>
  )
}
