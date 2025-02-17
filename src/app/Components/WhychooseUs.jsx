import React from "react";
import { FaTruck, FaHeadset, FaCheckCircle, FaGift, FaLeaf, FaStar } from "react-icons/fa"; // You can replace these with your custom icons

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaCheckCircle size={40} />,
      title: "Top-Quality Products",
      description:
        "Only the best brands and appliances, rigorously tested for durability and performance.",
    },
    {
      id: 2,
      icon: <FaTruck size={40} />,
      title: "Free Shipping & Delivery",
      description: "Enjoy fast, free delivery on all orders with no hidden fees.",
    },
    {
      id: 3,
      icon: <FaHeadset size={40} />,
      title: "24/7 Customer Support",
      description: "We’re always here to help. Reach out anytime for assistance.",
    },
    {
      id: 4,
      icon: <FaGift size={40} />,
      title: "Exclusive Discounts",
      description: "Get access to special deals and offers that you won’t find anywhere else.",
    },
    {
      id: 5,
      icon: <FaLeaf size={40} />,
      title: "Eco-Friendly Options",
      description:
        "Choose energy-efficient appliances that are kind to your wallet and the planet.",
    },
    {
      id: 6,
      icon: <FaStar size={40} />,
      title: "Expert-Approved",
      description: "All products are tested and reviewed by experts to ensure top-notch quality.",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white flex flex-col p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4  self-center text-orange-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
