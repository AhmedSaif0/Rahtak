import { getVendors } from "./lib/getVendors"
import FeaturedVendors from "@/components/vendor/featured-vendors"

export default async function VendorsPage() {
  const vendors = await getVendors()
  return ( <FeaturedVendors vendors={vendors} /> )
}



/// app/vendors/page.tsximport Image from "next/image";

// import { Star, MapPin, Package, Mail } from "
// import { getVendors } from "./lib/getVendors";
// import VendorCard from "@/components/vendor/vendor-card";

// export default async function VendorsPage() {
//   const vendors = await getVendors();

//   return (
//     <>
//       {vendors.map((vendor, index) => (
//         <VendorCard key={index} vendors={vendor} />
//       ))}
//     </>
//   );
// }