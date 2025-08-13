
import MachineryFilters from "@/components/machinery/machinery-filters"
import MachineryGrid from "@/components/machinery/machinery-grid"
import MachineryHero from "@/components/machinery/machinery-hero"

export default function MachineryPage() {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <MachineryHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              {/* <MachineryFilters /> */}
            </aside>
            <main className="lg:w-3/4">
              <MachineryGrid />
            </main>
          </div>
        </div>
      </div>
    )
  }
  