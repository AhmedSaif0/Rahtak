import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ر</span>
              </div>
              <span className="text-xl font-bold text-primary-600">راحتك</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                الرئيسية
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                المنتجات
              </Link>
              <Link href="/vendors" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                التجار
              </Link>
              <Link href="/machinery" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                الآليات الزراعية
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                من نحن
              </Link>
            </div>
          </div>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <button className="border border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium">
              تسجيل الدخول
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              إنشاء حساب
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
