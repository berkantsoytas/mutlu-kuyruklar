import { useState } from 'react';
import ProductCard from './product-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

const products = [
  {
    category: 'cat',
    name: 'Adult with Chicken All Breed',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2022/12/8682328740336.png',
  },
  {
    category: 'cat',
    name: 'Sterilised with Black Angus Beef All Breed',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2022/12/8682328740329.png',
  },
  {
    category: 'cat',
    name: 'Adult with Veal All Breed',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2022/12/8682328740305.png',
  },
  {
    category: 'cat',
    name: 'Adult with Black Angus All Breed',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2022/12/8682328740312.png',
  },
  {
    category: 'dog',
    name: 'Adult with Veal Small Breed',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2022/12/8682328740275.png',
  },
  {
    category: 'dog',
    name: 'Adult with Chicken Small Breed',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2022/12/8682328740268.png',
  },
  {
    category: 'dog',
    name: 'Adult with Black Angus Beef Small Breed',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2022/12/8682328740251.png',
  },
  {
    category: 'dog',
    name: 'Sensitive Care Köpek Maması 3 KG',
    image:
      'https://animalworld.com.tr/wp-content/uploads/2023/03/AW_DOG_ADULT_LAMB_3KG-2.png',
  },
];

const cat_products = products.filter((product) => product.category === 'cat');
const dog_products = products.filter((product) => product.category === 'dog');

export default function Products() {
  const [selected, setSelected] = useState(true);

  return (
    <>
      <div className="flex justify-between items-center text-white mt-12 lg:mx-36 xl:mx-36 md:mx-24">
        <div className="flex flex-col gap-4">
          <span className="font-extralight text-3xl">Ürünler</span>
          <span className="font-light text-[#6c6c6c] text-lg">
            Köpek ve kediler gibi en doğal şekilde beslediğimiz dostlarımız,
            kendi doğalarıyla bütünleşerek daha mutlu yaşıyor.
          </span>
        </div>
        <div
          className="p-6 bg-[#F5F5F5] bg-opacity-20 rounded-full hover:cursor-pointer hover:bg-opacity-5 border border-solid border-[#F5F5F5] transition-colors duration-300"
          onClick={() => setSelected(!selected)}
        >
          <div
            className={`w-64 h-32 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300`}
          >
            <div className="w-1/2 flex justify-center relative z-10 flex-col items-center gap-4">
              <img
                src="https://animalworld.com.tr/wp-content/uploads/2022/09/image-1.png"
                alt="Dog"
                className="w-16 h-16"
              />
              <span
                className={`font-light text-lg ml-4 ${
                  selected ? 'text-white' : 'text-[#6c6c6c]'
                }`}
              >
                Köpek
              </span>
            </div>
            <div
              className={`bg-[#f5f5f5] w-32 h-32 rounded-full shadow-md absolute transform transition-transform duration-300 ${
                selected ? 'translate-x-32' : 'translate-x-0'
              }`}
            ></div>
            <div className="w-1/2 flex justify-center relative z-10 flex-col items-center gap-4">
              <img
                src="https://animalworld.com.tr/wp-content/uploads/2022/09/image-2.png"
                alt="Cat"
                className="w-16 h-16"
              />
              <span
                className={`font-light text-lg ml-4 ${
                  !selected ? 'text-white' : 'text-[#6c6c6c]'
                }`}
              >
                Kedi
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="slider-container p-14 shadow-md">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            arrows={true}
            lazyLoad="ondemand"
            autoplaySpeed={2000}
            className="slider "
          >
            {selected
              ? dog_products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    image={product.image}
                    category={product.category}
                  />
                ))
              : cat_products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    image={product.image}
                    category={product.category}
                  />
                ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
