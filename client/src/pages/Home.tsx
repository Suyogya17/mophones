import React from "react";
import {
  ArrowRight,
  Shield,
  Truck,
  RefreshCw,
  GitCompare,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ corrected import
import { useFeaturedPhones } from "../hooks/UsePhones";
import PhoneCard from "../components/PhoneCard";
import Header from "../components/Header";
import type { Phone } from "../shared/types";
import CurvedCarousel from "../pages/sidedish/carousel"; // ✅ fixed import name

const Home: React.FC = () => {
  const { phones: featuredPhones, loading } = useFeaturedPhones();

  const handleAddToCart = (phone: Phone) => console.log("Add to cart:", phone);
  const handleAddToCompare = (phone: Phone) =>
    console.log("Add to compare:", phone);
  const handleViewDetails = (phone: Phone) =>
    console.log("View details:", phone);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect{" "}
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              iPhone
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Compare, trade-in, and buy the latest iPhones with confidence. Get
            the best deals and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/trade-in"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Trade-In Value</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Mophones?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make buying your next iPhone simple, safe, and smart with
              industry-leading features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GitCompare className="w-8 h-8 text-white" />,
                title: "Smart Comparison",
                desc: "Compare specs, prices, and features side-by-side to make the best decision.",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                icon: <RefreshCw className="w-8 h-8 text-white" />,
                title: "Trade-In Program",
                desc: "Get instant quotes for your old device and apply credit to your new purchase.",
                gradient: "from-green-500 to-blue-600",
              },
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: "Secure Purchase",
                desc: "Shop with confidence using our secure payment system and warranty protection.",
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Carousel Section
        <div className="w-full h-100vh  px-6 py-8">
          <CurvedCarousel
            images={[
              "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509_FMT_WHH?wid=618&hei=900&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQjVOVStZaG1ncWFjNXVUZkZ4anVIYkxkU0ZPTlpaU08rcXlLdm5vVFNtWms4Qy8xWXFFK1dKS3pEemhEREZVdTRKWlgzZzdyUXEzcGE2bUxYbWVvdHF2bC94bmFYRGtYTVF5WXZKZDExUW4",
              "https://www.three.ie/content/dam/3ie-wotf/images/blogs/desktop-imagery-updates/three-blogs-desktop_iphone-14-ultimate-guide-2020x580.jpg.transform/transformer-hero-width-2020-height-580/image.jpg",
              "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/delivery-pickup-header-202509_FMT_WHH?wid=592&hei=236&fmt=png-alpha&.v=MUVuRDYvY1VrUXkrVktZRXM2Mm1UWjBBWE5NWlUwL1lwY3BtU2dLNTZORjdqTDd0ME0xTFV5WVl2REpuOVVtVGc5RGkwaE1WSmFwSkEwVk80OVNDTTBNY3pLYlh0SEluWkVrY3FVdzA5Mm5xQ3dmZ0thWVZDUW1iajA0cVRNS0k",
              "https://www.lifewire.com/thmb/8Av4ZM-ovsHTqUgqCPecC_JS7po=/1500x0/filters:no_upscale():max_bytes(200000):strip_icc()/iPhone-16-launch-banner-43cebaf1f397411cb03017e1feac116e.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMbWZqrp8ALucYcIlg1V7Y0dTxox_Rdx-cQ&s",
              "https://i.ytimg.com/vi/Bm8fnD1Xabg/sddefault.jpg",
              "https://f.nooncdn.com/noon-cdn/s/app/com/noon-digest/prod/assets/iphone-17-guide-mobile-header-banner.png",
              "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-applecare-plus.image.large_2x.png",
            ]}
          />
        </div> */}
      </section>

      {/* Featured Phones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured iPhones
              </h2>
              <p className="text-gray-600">
                Discover our handpicked selection of the best iPhones
              </p>
            </div>
            <Link
              to="/shop"
              className="hidden sm:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 animate-pulse"
                >
                  <div className="aspect-square bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPhones.map((phone) => (
                <PhoneCard
                  key={phone.id}
                  phone={phone}
                  onAddToCart={handleAddToCart}
                  onAddToCompare={handleAddToCompare}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="sm:hidden inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <span>View All Phones</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50K+", label: "Happy Customers", color: "text-blue-600" },
            { number: "1000+", label: "Phones Sold", color: "text-purple-600" },
            {
              number: "4.9",
              label: (
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span>Rating</span>
                </div>
              ),
              color: "text-green-600",
            },
            { number: "24/7", label: "Support", color: "text-orange-600" },
          ].map((stat, i) => (
            <div key={i}>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">Mophones</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for buying, selling, and comparing the
                latest iPhones.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/shop"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Shop
                </Link>
                <Link
                  to="/compare"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Compare
                </Link>
                <Link
                  to="/trade-in"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Trade-In
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Warranty
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mophones. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
