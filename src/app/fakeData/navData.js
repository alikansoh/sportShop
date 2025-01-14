// Import images at the top of the file
import menImage from "../assets/men.jpg";
import womenImage from "../assets/women.jpg";
import kidsImage from "../assets/kids.jpg";
import sportImage from "../assets/sport.jpg";

const navigationData = [
  {
    name: "Sale",
    subCategories: [
      {
        name: "women sale",
        image: menImage,
        subCategories: [
          { name: "Dresses", image: menImage },
          { name: "Tops", image: menImage },
          { name: "Skirts", image: menImage },
          { name: "Tights", image: menImage },
          { name: "Boots", image: menImage },
          { name: "Swimwear", image: menImage },
        ],
      },
      {
        name: "kids sale",
        image: menImage,
      },
    ],
  },
  {
    name: "Men",
    image: menImage,
    subCategories: [
      {
        name: "T-Shirts",
        image: menImage,
        subCategories: [
          { name: "Casual T-Shirts", image: menImage },
          { name: "Graphic T-Shirts", image: menImage },
          { name: "Polo Shirts", image: menImage },
          { name: "Performance T-Shirts", image: menImage },
        ],
      },
      {
        name: "Jeans",
        image: menImage,
        subCategories: [
          { name: "Slim Fit", image: menImage },
          { name: "Bootcut", image: menImage },
          { name: "Straight Leg", image: menImage },
          { name: "Skinny Fit", image: menImage },
        ],
      },
      {
        name: "Shoes",
        image: menImage,
        subCategories: [
          { name: "Sneakers", image: menImage },
          { name: "Formal Shoes", image: menImage },
          { name: "Loafers", image: menImage },
          { name: "Boots", image: menImage },
          { name: "Sandals", image: menImage },
        ],
      },
      {
        name: "Jackets",
        image: menImage,
        subCategories: [
          { name: "Leather Jackets", image: menImage },
          { name: "Bomber Jackets", image: menImage },
          { name: "Puffer Jackets", image: menImage },
          { name: "Denim Jackets", image: menImage },
        ],
      },
      {
        name: "Sweaters",
        image: menImage,
        subCategories: [
          { name: "Crew Neck Sweaters", image: menImage },
          { name: "V-Neck Sweaters", image: menImage },
          { name: "Cardigans", image: menImage },
          { name: "Hoodies", image: menImage },
        ],
      },
    ],
  },
  {
    name: "Women",
    image: womenImage,
    subCategories: [
      {
        name: "Dresses",
        image: womenImage,
        subCategories: [
          { name: "Evening Dresses", image: womenImage },
          { name: "Casual Dresses", image: womenImage },
          { name: "Maxi Dresses", image: womenImage },
          { name: "Mini Dresses", image: womenImage },
        ],
      },
      {
        name: "Tops",
        image: womenImage,
        subCategories: [
          { name: "Blouses", image: womenImage },
          { name: "T-Shirts", image: womenImage },
          { name: "Tank Tops", image: womenImage },
          { name: "Sweaters", image: womenImage },
        ],
      },
      {
        name: "Shoes",
        image: womenImage,
        subCategories: [
          { name: "Heels", image: womenImage },
          { name: "Flats", image: womenImage },
          { name: "Boots", image: womenImage },
          { name: "Sandals", image: womenImage },
          { name: "Sneakers", image: womenImage },
        ],
      },
      {
        name: "Outerwear",
        image: womenImage,
        subCategories: [
          { name: "Coats", image: womenImage },
          { name: "Blazers", image: womenImage },
          { name: "Jackets", image: womenImage },
          { name: "Cardigans", image: womenImage },
        ],
      },
      {
        name: "Activewear",
        image: womenImage,
        subCategories: [
          { name: "Sports Bras", image: womenImage },
          { name: "Leggings", image: womenImage },
          { name: "Tights", image: womenImage },
          { name: "Workout Tops", image: womenImage },
        ],
      },
    ],
  },
  {
    name: "Kids",
    image: kidsImage,
    subCategories: [
      {
        name: "Boys",
        image: kidsImage,
        subCategories: [
          { name: "T-Shirts", image: kidsImage },
          { name: "Shorts", image: kidsImage },
          { name: "Jeans", image: kidsImage },
          { name: "Jackets", image: kidsImage },
          { name: "Sneakers", image: kidsImage },
          { name: "Swimwear", image: kidsImage },
        ],
      },
      {
        name: "Girls",
        image: kidsImage,
        subCategories: [
          { name: "Dresses", image: kidsImage },
          { name: "Tops", image: kidsImage },
          { name: "Skirts", image: kidsImage },
          { name: "Tights", image: kidsImage },
          { name: "Boots", image: kidsImage },
          { name: "Swimwear", image: kidsImage },
        ],
      },
    ],
  },
  {
    name: "Sport",
    image: sportImage,
    subCategories: [
      {
        name: "Running",
        image: sportImage,
        subCategories: [
          { name: "Running Shoes", image: sportImage },
          { name: "Running Apparel", image: sportImage },
          { name: "Fitness Trackers", image: sportImage },
          { name: "Running Socks", image: sportImage },
        ],
      },
      {
        name: "Football",
        image: sportImage,
        subCategories: [
          { name: "Football Boots", image: sportImage },
          { name: "Football Jerseys", image: sportImage },
          { name: "Shin Guards", image: sportImage },
          { name: "Soccer Balls", image: sportImage },
        ],
      },
      {
        name: "Fitness",
        image: sportImage,
        subCategories: [
          { name: "Fitness Equipment", image: sportImage },
          { name: "Yoga Mats", image: sportImage },
          { name: "Workout Clothes", image: sportImage },
          { name: "Resistance Bands", image: sportImage },
          { name: "Dumbbells", image: sportImage },
        ],
      },
      {
        name: "Cycling",
        image: sportImage,
        subCategories: [
          { name: "Cycling Shoes", image: sportImage },
          { name: "Bike Apparel", image: sportImage },
          { name: "Helmets", image: sportImage },
          { name: "Bicycles", image: sportImage },
        ],
      },
      {
        name: "Swimming",
        image: sportImage,
        subCategories: [
          { name: "Swimwear", image: sportImage },
          { name: "Goggles", image: sportImage },
          { name: "Swim Caps", image: sportImage },
          { name: "Water Shoes", image: sportImage },
        ],
      },
    ],
  },
];

export default navigationData;
