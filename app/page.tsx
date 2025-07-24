import Navbar from "@/components/navbar"
import SearchBar from "@/components/search-bar"
import MainBanner from "@/components/main-banner"
import CategoriesSection from "@/components/categories-section"
import FeaturedProducts from "@/components/featured-products"
import FeaturedVendors from "@/components/featured-vendors"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      <SearchBar />
      <MainBanner />
      <CategoriesSection />
      <FeaturedProducts />
      <FeaturedVendors />
      <Footer />
    </div>
  )
}
