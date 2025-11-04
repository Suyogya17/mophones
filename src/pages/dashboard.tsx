import { motion } from "framer-motion";

const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <button
    className={`bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-3xl shadow-lg p-6 border border-purple-200 hover:shadow-2xl transition ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export default function Dashboard() {
  const trendingPhones = [
    { name: "iPhone 15 Pro", price: "Rs. 1,50,000" },
    { name: "iPhone 14 Pro", price: "Rs. 1,20,000" },
    { name: "iPhone 13", price: "Rs. 90,000" },
    { name: "iPhone SE", price: "Rs. 60,000" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          Compare. Trade. Buy.
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-purple-200 mb-8 drop-shadow">
          The smartest way to compare smartphones, check trade-in value, and shop trusted devices.
        </p>
        <Button className="text-lg">Start Exploring</Button>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          { title: "Compare Phones", desc: "Side-by-side specs, performance, and price insights." },
          { title: "Trade-In Value", desc: "Get instant estimates for your old devices." },
          { title: "Buy Devices", desc: "Shop certified new and used smartphones." },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <Card className="text-center border-purple-300 hover:border-purple-400">
              <CardContent>
                <div className="bg-gradient-to-tr from-purple-200 to-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-purple-700 font-bold text-xl shadow-inner">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-2xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Trending Phones Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-800">Trending Phones</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trendingPhones.map((phone, idx) => (
            <Card key={idx} className="relative overflow-hidden hover:scale-105 transform transition group">
              <CardContent className="p-6 text-center">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-5 flex items-center justify-center text-purple-700 font-bold text-xl shadow-inner">
                  Image
                </div>
                <h4 className="font-bold text-lg mb-1">{phone.name}</h4>
                <p className="text-purple-600 font-semibold mb-4">{phone.price}</p>
                <Button className="w-full py-2 rounded-full">View Details</Button>

                {/* Decorative Glowing Circle */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-300 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-400 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
