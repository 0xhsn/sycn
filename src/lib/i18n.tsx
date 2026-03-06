"use client"

import { useState, useEffect } from "react"

const translations: Record<string, Record<string, string>> = {
  usage: { ar: "الاستخدام", en: "Usage" },
  variants: { ar: "الأنماط", en: "Variants" },
  sizes: { ar: "الأحجام", en: "Sizes" },
  examples: { ar: "أمثلة", en: "Examples" },
  installation: { ar: "التثبيت", en: "Installation" },
  preview: { ar: "معاينة", en: "Preview" },
  code: { ar: "الكود", en: "Code" },
  default: { ar: "افتراضي", en: "Default" },
  destructive: { ar: "تدميري", en: "Destructive" },
  outline: { ar: "محيط", en: "Outline" },
  secondary: { ar: "ثانوي", en: "Secondary" },
  ghost: { ar: "شبح", en: "Ghost" },
  link: { ar: "رابط", en: "Link" },
  small: { ar: "صغير", en: "Small" },
  large: { ar: "كبير", en: "Large" },
  disabled: { ar: "معطل", en: "Disabled" },
  checked: { ar: "محدد", en: "Checked" },
  unchecked: { ar: "غير محدد", en: "Unchecked" },
  clickMe: { ar: "اضغط هنا", en: "Click me" },
  submit: { ar: "إرسال", en: "Submit" },
  cancel: { ar: "إلغاء", en: "Cancel" },
  save: { ar: "حفظ", en: "Save" },
  delete: { ar: "حذف", en: "Delete" },
  search: { ar: "بحث...", en: "Search..." },
  close: { ar: "إغلاق", en: "Close" },
  open: { ar: "فتح", en: "Open" },
  continue: { ar: "متابعة", en: "Continue" },
  confirm: { ar: "تأكيد", en: "Confirm" },
  name: { ar: "الاسم", en: "Name" },
  email: { ar: "البريد الإلكتروني", en: "Email" },
  message: { ar: "الرسالة", en: "Message" },
  placeholder: { ar: "اكتب هنا...", en: "Type here..." },
  horizontal: { ar: "أفقي", en: "Horizontal" },
  vertical: { ar: "عمودي", en: "Vertical" },
  loading: { ar: "جاري التحميل...", en: "Loading..." },
  home: { ar: "الرئيسية", en: "Home" },
  docs: { ar: "التوثيق", en: "Docs" },
  components: { ar: "العناصر", en: "Components" },
  settings: { ar: "الإعدادات", en: "Settings" },
  profile: { ar: "الملف الشخصي", en: "Profile" },
  editProfile: { ar: "تعديل الملف الشخصي", en: "Edit Profile" },
  makeChanges: { ar: "قم بإجراء التغييرات هنا.", en: "Make changes here." },
  saveChanges: { ar: "حفظ التغييرات", en: "Save changes" },
  areYouSure: { ar: "هل أنت متأكد؟", en: "Are you sure?" },
  cannotBeUndone: { ar: "لا يمكن التراجع عن هذا الإجراء.", en: "This action cannot be undone." },
  notifications: { ar: "الإشبارات", en: "Notifications" },
  option1: { ar: "الخيار الأول", en: "Option 1" },
  option2: { ar: "الخيار الثاني", en: "Option 2" },
  option3: { ar: "الخيار الثالث", en: "Option 3" },
  rightClickHere: { ar: "انقر بزر الفأرة الأيمن هنا", en: "Right click here" },
  hoverMe: { ar: "مرر الفأرة هنا", en: "Hover me" },
  tooltipText: { ar: "نص التلميح", en: "Tooltip text" },
  file: { ar: "ملف", en: "File" },
  edit: { ar: "تحرير", en: "Edit" },
  view: { ar: "عرض", en: "View" },
  previous: { ar: "السابق", en: "Previous" },
  next: { ar: "التالي", en: "Next" },
  bold: { ar: "غامق", en: "Bold" },
  italic: { ar: "مائل", en: "Italic" },
  underline: { ar: "تسطير", en: "Underline" },
  item1: { ar: "العنصر الأول", en: "Item 1" },
  item2: { ar: "العنصر الثاني", en: "Item 2" },
  item3: { ar: "العنصر الثالث", en: "Item 3" },
  content1: { ar: "محتوى العنصر الأول", en: "Content for item 1" },
  content2: { ar: "محتوى العنصر الثاني", en: "Content for item 2" },
  content3: { ar: "محتوى العنصر الثالث", en: "Content for item 3" },
  tab1: { ar: "التبويب الأول", en: "Tab 1" },
  tab2: { ar: "التبويب الثاني", en: "Tab 2" },
  tab3: { ar: "التبويب الثالث", en: "Tab 3" },
  showMore: { ar: "عرض المزيد", en: "Show more" },
  scrollableContent: { ar: "محتوى قابل للتمرير", en: "Scrollable content" },
  invoice: { ar: "الفاتورة", en: "Invoice" },
  status: { ar: "الحالة", en: "Status" },
  amount: { ar: "المبلغ", en: "Amount" },
  paid: { ar: "مدفوع", en: "Paid" },
  pending: { ar: "معلق", en: "Pending" },
  total: { ar: "المجموع", en: "Total" },
  showToast: { ar: "عرض الإشعار", en: "Show toast" },
}

export type TKey = keyof typeof translations

const descriptions: Record<string, Record<string, string>> = {
  button: { ar: "يعرض زرًا أو عنصرًا يبدو كزر.", en: "Displays a button or a component that looks like a button." },
  input: { ar: "حقل إدخال نصي.", en: "A text input field." },
  textarea: { ar: "حقل إدخال نصي متعدد الأسطر.", en: "A multi-line text input field." },
  label: { ar: "تسمية لعنصر نموذج.", en: "A label for a form element." },
  select: { ar: "قائمة منسدلة للاختيار من بين خيارات.", en: "A dropdown for selecting from options." },
  checkbox: { ar: "مربع اختيار للتفعيل والتعطيل.", en: "A checkbox for toggling on and off." },
  "radio-group": { ar: "مجموعة أزرار اختيار.", en: "A group of radio buttons." },
  switch: { ar: "مفتاح تبديل بين حالتين.", en: "A toggle switch between two states." },
  slider: { ar: "شريط تمرير لتحديد قيمة من نطاق.", en: "A slider for selecting a value from a range." },
  card: { ar: "حاوية محتوى مع رأس وتذييل.", en: "A content container with header and footer." },
  badge: { ar: "شارة لعرض حالة أو تسمية.", en: "A badge for displaying status or label." },
  alert: { ar: "تنبيه لعرض رسائل مهمة.", en: "An alert for displaying important messages." },
  skeleton: { ar: "عنصر تحميل مؤقت.", en: "A loading placeholder element." },
  separator: { ar: "فاصل بين العناصر.", en: "A separator between elements." },
  progress: { ar: "شريط تقدم لعرض نسبة الإنجاز.", en: "A progress bar showing completion." },
  avatar: { ar: "صورة رمزية للمستخدم.", en: "A user avatar image." },
  toggle: { ar: "زر تبديل بين حالتين.", en: "A toggle button between two states." },
  "toggle-group": { ar: "مجموعة أزرار تبديل.", en: "A group of toggle buttons." },
  table: { ar: "جدول لعرض البيانات.", en: "A table for displaying data." },
  dialog: { ar: "نافذة حوار متراكبة.", en: "A modal dialog overlay." },
  "alert-dialog": { ar: "نافذة حوار تأكيد.", en: "A confirmation dialog." },
  sheet: { ar: "لوحة جانبية منزلقة.", en: "A sliding side panel." },
  popover: { ar: "نافذة منبثقة عائمة.", en: "A floating popover." },
  "hover-card": { ar: "بطاقة تظهر عند التمرير.", en: "A card shown on hover." },
  tooltip: { ar: "تلميح يظهر عند التمرير.", en: "A tooltip shown on hover." },
  "context-menu": { ar: "قائمة سياقية بالنقر بزر الفأرة الأيمن.", en: "A right-click context menu." },
  "dropdown-menu": { ar: "قائمة منسدلة.", en: "A dropdown menu." },
  command: { ar: "لوحة أوامر للبحث السريع.", en: "A command palette for quick search." },
  accordion: { ar: "أقسام قابلة للطي.", en: "Collapsible content sections." },
  collapsible: { ar: "محتوى قابل للطي.", en: "Collapsible content." },
  tabs: { ar: "تبويبات للتنقل بين المحتوى.", en: "Tabs for navigating between content." },
  "scroll-area": { ar: "منطقة قابلة للتمرير.", en: "A scrollable area." },
  "aspect-ratio": { ar: "حاوية بنسبة عرض إلى ارتفاع ثابتة.", en: "A fixed aspect ratio container." },
  sidebar: { ar: "شريط جانبي للتنقل.", en: "A navigation sidebar." },
  breadcrumb: { ar: "مسار التنقل الحالي.", en: "Current navigation path." },
  menubar: { ar: "شريط قوائم.", en: "A menu bar." },
  "navigation-menu": { ar: "قائمة تنقل.", en: "A navigation menu." },
  pagination: { ar: "ترقيم الصفحات.", en: "Page pagination." },
  toast: { ar: "إشعار مؤقت.", en: "A temporary notification." },
  calendar: { ar: "تقويم لاختيار التاريخ.", en: "A date picker calendar." },
}

export function useT() {
  const [dir, setDir] = useState("rtl")

  useEffect(() => {
    const check = () => setDir(document.documentElement.dir || "rtl")
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] })
    return () => observer.disconnect()
  }, [])

  const lang = dir === "rtl" ? "ar" : "en"

  const t = (key: string) => translations[key]?.[lang] || key
  const desc = (component: string) => descriptions[component]?.[lang] || ""

  return { t, desc, lang, dir }
}
