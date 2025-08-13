
'use client';

import Link from "next/link";
import { Star, MapPin, Package } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface VendorCardProps {
  name: string;
  location: string;
  rating: number;
  productCount: number;
  description: string;
  avatar: string;
  isVerified?: boolean;
  specialization?: string;
}

const VendorCard = ({
  name,
  location,
  rating,
  productCount,
  description,
  avatar,
  isVerified,
  specialization
}: VendorCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-300 group p-6" dir="rtl">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-primary">
            <Image
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
              width={64}
              height={64}
            />
          </div>
          {isVerified && (
            <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
              ✓
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            {specialization && (
              <Badge variant="secondary" className="text-xs">
                {specialization}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <Package className="h-4 w-4" />
              {productCount} منتج
            </div>
          </div>
          
          <div className="flex items-center gap-2">
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
            <span className="text-sm text-muted-foreground">
              ({rating}.0)
            </span>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex gap-3">
        <Link href={`/vendors/${encodeURIComponent(name)}`} >
  <Button 
    size="sm" 
    className="flex-1 bg-gradient-primary hover:shadow-soft transition-all"
  >
    زيارة المتجر
  </Button>
</Link>
        <Button 
          size="sm" 
          variant="outline"
          className="px-6"
        >
          تابع
        </Button>
      </div>
    </div>
  );
};

export default VendorCard;