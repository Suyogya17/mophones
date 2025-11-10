import React, { useState } from "react";
import { X, GitCompare, ChevronDown } from "lucide-react";
import Header from "../components/Header";

interface Phone {
  id: string;
  name: string;
  image: string;
  display: string;
  chip: string;
  camera: string;
  battery: string;
  storage: string;
  price: string;
}

const staticPhones: Phone[] = [
  {
    id: "1",
    name: "iPhone 17 Pro Max",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1692893988343",
    display: '6.9" Super Retina XDR',
    chip: "A18 Pro Chip",
    camera: "48MP + 12MP + 12MP",
    battery: "29 hours video playback",
    storage: "256GB / 512GB / 1TB",
    price: "$1,299",
  },
  {
    id: "2",
    name: "iPhone 16 Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-pro-gallery-1?wid=2820&hei=1640&fmt=jpeg&qlt=90&.v=1725038490307",
    display: '6.7" Super Retina XDR',
    chip: "A17 Pro Chip",
    camera: "48MP + 12MP + 12MP",
    battery: "27 hours video playback",
    storage: "128GB / 256GB / 512GB",
    price: "$1,199",
  },
  {
    id: "3",
    name: "iPhone 15 Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blue-titanium_AV2?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1692920972564",
    display: '6.1" Super Retina XDR',
    chip: "A16 Bionic Chip",
    camera: "48MP + 12MP + 12MP",
    battery: "23 hours video playback",
    storage: "128GB / 256GB / 512GB / 1TB",
    price: "$999",
  },
  {
    id: "4",
    name: "iPhone 14",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1661027784889",
    display: '6.1" Super Retina XDR',
    chip: "A15 Bionic Chip",
    camera: "12MP + 12MP",
    battery: "20 hours video playback",
    storage: "128GB / 256GB / 512GB",
    price: "$799",
  },
];

const Compare: React.FC = () => {
  const [selectedPhones, setSelectedPhones] = useState<Phone[]>([]);

  const handleAddPhone = (id: string) => {
    const phone = staticPhones.find((p) => p.id === id);
    if (phone && !selectedPhones.find((s) => s.id === id) && selectedPhones.length < 3) {
      setSelectedPhones([...selectedPhones, phone]);
    }
  };

  const handleRemovePhone = (id: string) => {
    setSelectedPhones(selectedPhones.filter((p) => p.id !== id));
  };

  const specs = [
    { key: "display", label: "Display" },
    { key: "chip", label: "Chipset" },
    { key: "camera", label: "Camera" },
    { key: "battery", label: "Battery Life" },
    { key: "storage", label: "Storage" },
    { key: "price", label: "Price" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
          <GitCompare className="w-8 h-8" /> Compare iPhones
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Select up to 3 iPhones to compare their features and specs side by side.
        </p>
      </section>

      {/* Compare Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Dropdown */}
        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <ChevronDown className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Select Phones to Compare
              </h2>
            </div>

            <select
              onChange={(e) => handleAddPhone(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
              value=""
            >
              <option value="">-- Choose a phone --</option>
              {staticPhones.map((phone) => (
                <option key={phone.id} value={phone.id}>
                  {phone.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        {selectedPhones.length > 0 ? (
          <div className="overflow-x-auto">
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `200px repeat(${selectedPhones.length}, minmax(250px, 1fr))`,
              }}
            >
              {/* Spec Labels */}
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="h-56 flex items-center justify-center font-semibold text-gray-700">
                  Specs
                </div>
                {specs.map((spec) => (
                  <div
                    key={spec.key}
                    className="py-4 px-2 border-t text-gray-700 font-medium"
                  >
                    {spec.label}
                  </div>
                ))}
              </div>

              {/* Selected Phones */}
              {selectedPhones.map((phone) => (
                <div
                  key={phone.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {/* Header */}
                  <div className="relative p-4 border-b">
                    <button
                      onClick={() => handleRemovePhone(phone.id)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="w-32 h-32 object-contain mx-auto mb-2"
                    />
                    <h3 className="text-lg font-semibold text-center text-gray-800">
                      {phone.name}
                    </h3>
                  </div>

                  {/* Specs */}
                  {specs.map((spec) => (
                    <div
                      key={spec.key}
                      className="py-4 px-3 border-t text-center text-gray-600"
                    >
                      {phone[spec.key as keyof Phone]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <GitCompare className="w-10 h-10 mx-auto mb-4 text-gray-400" />
            <p>Select phones from the dropdown above to start comparing.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Compare;
