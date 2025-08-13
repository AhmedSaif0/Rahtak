'use client';

import Link from "next/link";
import VendorCard from "./vendor-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeaturedVendors = () => {
  const vendors = [
    {
      name: "مزرعة الأمل العضوية",
      location: "الخرطوم، السودان",
      rating: 5,
      productCount: 156,
      description: "متخصصون في إنتاج البذور العضوية عالية الجودة منذ أكثر من 15 عاماً",
      avatar: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=100&h=100&fit=crop&crop=face",
      isVerified: true,
      specialization: "بذور عضوية",
      email: "info@rahtak.com"
    },
    {
      name: "حدائق السودان",
      location: "الجزيرة، السودان",
      rating: 4,
      productCount: 89,
      description: "نوفر أفضل أنواع بذور الزينة والنباتات المنزلية من مصادر موثوقة",
      avatar: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop&crop=face",
      isVerified: true,
      specialization: "نباتات زينة",
      email: "info@rahtak.com"
    },
    {
      name: "البستان الأخضر",
      location: "كسلا، السودان",
      rating: 5,
      productCount: 234,
      description: "شركة رائدة في توفير البذور الزراعية والأدوات الزراعية للمزارعين",
      avatar: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=100&h=100&fit=crop&crop=face",
      isVerified: true,
      specialization: "بذور زراعية",
      email: "info@rahtak.com"
    },
    {
      name: "مزارع الوادي",
      location: "النيل الأبيض، السودان",
      rating: 4,
      productCount: 67,
      description: "متخصصون في بذور الخضروات الطازجة المناسبة لمناخ السودان",
      avatar: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=100&h=100&fit=crop&crop=face",
      isVerified: false,
      specialization: "بذور خضروات",
      email: "info@rahtak.com"
    },
  ];

  return (
    <>
  <div className="mb-8 text-left">
    <Link href="/">
      <Button variant="outline" className="text-base px-6">
        ⬅ رجوع
      </Button>
    </Link>
  </div>
  <section className="py-16 bg-background" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            التجار المميزون
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            تعرف على أفضل الموردين والتجار الموثوقين في السودان
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {vendors.map((vendor, index) => (
            <VendorCard key={index} {...vendor} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/vendors">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground"
            >
              عرض جميع التجار
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
  );
};

export default FeaturedVendors;
