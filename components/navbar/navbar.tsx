import { useState } from 'react';
import { Search, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const mainNavLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "التجار", href: "/#featured-vendors" },
    { name: "الآليات الزراعية", href: "/machinery" },
    { name: "من نحن", href: "/about" }
  ];

  const productCategories = [
    { name: "أسمدة", href: "/products/fertilizers" },
    { name: "مبيدات", href: "/products/pesticides" },
    { name: "بذور محسنة", href: "/products/improved-seeds" },
    { name: "بيوت محمية", href: "/products/greenhouses" },
    { name: "منتجات الدواجن", href: "/products/poultry-products" },
    { name: "محاصيل", href: "/products/crops" },
    { name: "طاقة شمسية والبطاريات", href: "/products/solar-energy-batteries" },
    { name: "طلمبات غطاسة", href: "/products/submersible-pumps" },
    { name: "مدخلات تصنيع زراعي", href: "/products/agricultural-manufacturing-inputs" },
    { name: "مدخلات إنتاج حيواني", href: "/products/animal-production-inputs" }
  ];

  return (
    <nav className="bg-background border-b shadow-soft sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
           
              <span className="text-2xl font-bold text-primary bg-transparent">راحتك</span>
    
              {/* <Image
                src="/logo.png"
                alt="Rahtak Logo"
                width={150}
                height={50}
                onError={() => setLogoError(true)}
              /> */}
    
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu dir="rtl">
              <NavigationMenuList className="space-x-reverse">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      الرئيسية
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors bg-transparent">
                    المنتجات
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2 bg-background border rounded-md shadow-lg">
                      {productCategories.map((category) => (
                        <NavigationMenuLink key={category.name} asChild>
                          <Link
                            href={category.href}
                            className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                          >
                            {category.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {mainNavLinks.slice(1).map(link => (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink asChild>
                      <Link 
                        href={link.href} 
                        className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button asChild variant="ghost" size="sm">
              <Link href="/auth">تسجيل الدخول</Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-primary">
              <Link href="/auth">إنشاء حساب</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]" dir="rtl">
                <div className="flex flex-col space-y-4 mt-8">
                  {mainNavLinks.map(link => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-foreground mb-2">المنتجات</p>
                    {productCategories.map(category => (
                      <Link 
                        key={category.name} 
                        href={category.href} 
                        className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-sm"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button asChild variant="ghost">
                      <Link href="/auth">تسجيل الدخول</Link>
                    </Button>
                    <Button asChild className="bg-gradient-primary">
                      <Link href="/auth">إنشاء حساب</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;