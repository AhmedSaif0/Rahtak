import Navbar from "@/components/navbar/navbar"
import SearchBar from "@/components/search-bar/search-bar"
import MainBanner from "@/components/main-banner/main-banner"
import CategoriesSection from "@/components/categories/categories-section"
import ProductsPage from "./products/page"
import Footer from "@/components/footer/footer"
import VendorsPage from "./vendors/page"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <SearchBar />
      <MainBanner />
      <CategoriesSection />
      <ProductsPage />
      <VendorsPage />
      <Footer />
    </div>
  )
}