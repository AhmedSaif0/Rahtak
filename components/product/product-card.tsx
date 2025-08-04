'use client'

import { Star, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useToast } from "../ui/use-toast";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  vendor: string;
  rating: number;
  image: string | StaticImageData;
  discount?: number;
  isOrganic?: boolean;
  vendorInfo?: {
    name: string;
    phone: string;
    email: string;
    whatsapp?: string;
  };
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  vendor, 
  rating, 
  image, 
  discount,
  isOrganic,
  vendorInfo = {
    name: vendor,
    phone: "+249123456789", 
    email: "vendor@example.com",
    whatsapp: "+249123456789"
  }
}: ProductCardProps) => {
  const { toast } = useToast();

  const handleCopyLink = () => {
    const productUrl = `${window.location.origin}/product/${encodeURIComponent(name)}`;
    navigator.clipboard.writeText(productUrl);
    toast({
      title: "تم نسخ الرابط",
      description: "تم نسخ رابط المنتج بنجاح",
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden" dir="rtl">
      <div className="relative">
        <div className="aspect-square overflow-hidden relative">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {discount && (
            <Badge className="bg-destructive text-destructive-foreground">
              خصم {discount}%
            </Badge>
          )}
          {isOrganic && (
            <Badge className="bg-leaf-green text-white">
              عضوي
            </Badge>
          )}
        </div>
        
        {/* Favorite Button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 left-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white p-0"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            بواسطة {vendor}
          </p>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating 
                    ? "text-yellow-400 fill-current" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground mr-2">
            ({rating}.0)
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              {price} ج.س
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice} ج.س
              </span>
            )}
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopyLink}
            className="h-8 w-8 p-0"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm" 
                className="bg-gradient-primary hover:shadow-soft transition-all flex-1"
              >
                <MessageCircle className="h-4 w-4 ml-1" />
                تواصل مع البائع
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md" dir="rtl">
              <DialogHeader>
                <DialogTitle>معلومات البائع والمنتج</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">تفاصيل المنتج</h4>
                  <p className="text-sm"><strong>الاسم:</strong> {name}</p>
                  <p className="text-sm"><strong>السعر:</strong> {price} ج.س</p>
                  <p className="text-sm"><strong>البائع:</strong> {vendor}</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">معلومات البائع</h4>
                  <p className="text-sm mb-2"><strong>الاسم:</strong> {vendorInfo.name}</p>
                  <p className="text-sm mb-2"><strong>الهاتف:</strong> {vendorInfo.phone}</p>
                  <p className="text-sm mb-2"><strong>البريد الإلكتروني:</strong> {vendorInfo.email}</p>
                  {vendorInfo.whatsapp && (
                    <p className="text-sm mb-2"><strong>واتساب:</strong> {vendorInfo.whatsapp}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(`tel:${vendorInfo.phone}`)}
                  >
                    اتصال
                  </Button>
                  {vendorInfo.whatsapp && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(`https://wa.me/${vendorInfo.whatsapp?.replace(/[^0-9]/g, '')}`)}
                    >
                      واتساب
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(`mailto:${vendorInfo.email}`)}
                  >
                    بريد إلكتروني
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;