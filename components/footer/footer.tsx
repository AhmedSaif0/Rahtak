import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "../ui/button"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "من نحن", href: "/about" },
      { name: "كيف نعمل", href: "/how-it-works" },
      { name: "الشركاء", href: "/partners" },
      { name: "الوظائف", href: "/careers" },
    ],
    support: [
      { name: "مركز المساعدة", href: "/help" },
      { name: "اتصل بنا", href: "/contact" },
      { name: "سياسة الإرجاع", href: "/returns" },
      { name: "الشحن والتوصيل", href: "/shipping" },
    ],
    legal: [
      { name: "سياسة الخصوصية", href: "/privacy" },
      { name: "شروط الاستخدام", href: "/terms" },
      { name: "سياسة الكوكيز", href: "/cookies" },
      { name: "إخلاء المسؤولية", href: "/disclaimer" },
    ],
  }

  return (
     <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">راحتك</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              منصة رائدة لتجارة البذور، المنتجات الزراعية، والحيوانية والآليات الحديثة في السودان. نربط المزارعين
              بالموردين المحليين لضمان جودة المحاصيل وزيادة الإنتاج.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300" dir="ltr">+249 96 215 0640</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">info@rahtak.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">الخرطوم، السودان</span>
              </div>
            </div>

            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">قانوني</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-3 text-gray-300">اشترك في النشرة الإخبارية</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 text-sm"
                  dir="rtl"
                />
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90"
                >
                  اشتراك
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 راحتك. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}