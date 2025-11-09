import React from "react";
import { Phone, ShoppingBag, Star } from "lucide-react";
import Navbar from "../pages/sidedish/navbar";
import Carousel from "../pages/sidedish/carousel";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 via-purple-900 to-black text-white min-h-screen flex flex-col items-center">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center text-center mt-24 mb-10">
        <div className="w-full max-w-full mx-auto px-4">
          <Carousel
            images={[
              "https://cdn.thewirecutter.com/wp-content/media/2025/09/BG-IPHONE-2048px_TOP_ART_2X1.jpg?width=2048",
              "https://beloved-brands.com/wp-content/uploads/2021/07/apple-advertising-study-aug-2022-scaled.jpg",
              "https://images.squarespace-cdn.com/content/v1/57302e3040261d2ef98c91c0/1504757176380-HUXVP37CZWQ9ARBM394S/Screen-Shot-2015-06-25-at-11.01.00-PM-760x418.png?format=1000w"
            ]}
          />

        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white text-purple-800 py-20 rounded-t-[3rem] px-6 mt-10">
       <h3 className="text-2xl font-bold text-center mb-12">? Why Choose Us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
           
          <FeatureCard
            icon={<Phone className="w-10 h-10 text-purple-600" />}
            title="Latest Models"
            desc="Always up-to-date with the newest smartphones."
          />
          <FeatureCard
            icon={<ShoppingBag className="w-10 h-10 text-purple-600" />}
            title="Easy Shopping"
            desc="Smooth, fast, and secure checkout process."
          />
          <FeatureCard
            icon={<Star className="w-10 h-10 text-purple-600" />}
            title="Trusted Reviews"
            desc="Real customer feedback to guide your purchase."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-purple-950 text-center py-6 text-purple-200 mt-auto">
        <p>&copy; {new Date().getFullYear()} <strong>Mophones</strong>. All rights reserved.</p>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <div className="bg-purple-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-sm text-purple-700">{desc}</p>
  </div>
);

export default LandingPage;
