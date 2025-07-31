
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div className="bg-gradient-natural py-8" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            ابحث عن البذور والمنتجات الزراعية
          </h2>
          <p className="text-muted-foreground">
            اكتشف أفضل أنواع البذور من موردين موثوقين
          </p>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="flex">
            <Input
              type="text"
              placeholder="ابحث عن البذور، الخضروات، الفواكه..."
              className="h-12 text-right pr-12 pl-4 text-lg border-2 border-primary/20 focus:border-primary"
              dir="rtl"
            />
            <Button 
              size="lg" 
              className="h-12 px-8 mr-2 bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Search className="h-5 w-5 ml-2" />
              بحث
            </Button>
          </div>
          <Search className="absolute right-4 top-3.5 h-5 w-5 text-muted-foreground pointer-events-none" />
        </div>
        
        {/* Popular Searches */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">البحث الشائع:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["بذور طماطم", "بذور خيار", "بذور فلفل", "نباتات زينة", "بذور عضوية"].map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;