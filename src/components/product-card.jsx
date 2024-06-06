import React from 'react';

/**
 * @typedef {Object} ProductCardProps
 * @property {string} name - Ürün adı
 * @property {string} image - Ürün görseli
 * @property {number} [price] - Ürün fiyatı (isteğe bağlı)
 * @property {string} [description] - Ürün açıklaması (isteğe bağlı)
 * @property {Function} [onClick] - Tıklama fonksiyonu (isteğe bağlı)
 */

/**
 * Ürün kartı bileşeni
 * @param {ProductCardProps} props
 */
function ProductCard(props) {
  // eslint-disable-next-line react/prop-types
  const { name, image, price, description, onClick } = props;

  return (
    <div className="relative h-96 bg-[#242424] bg-opacity-5 rounded-lg shadow-md overflow-hidden ml-4 font-light">
      {/* Ürün görseli */}
      <img
        src={image}
        alt={name}
        className="w-full h-3/4 object-contain transition-transform duration-500 hover:scale-110"
      />

      {/* Ürün adı */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg text-white text-center">{name}</h3>
      </div>

      {/* Ürün fiyatı (isteğe bağlı) */}
      {price !== undefined && (
        <div className="absolute bottom-0 right-0 p-4">
          <span className="text-lg font-bold text-white">{price} ₺</span>
        </div>
      )}

      {/* Ürün açıklaması (isteğe bağlı) */}
      {description && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-gray-400">{description}</p>
        </div>
      )}

      {/* Tıklama efekti (isteğe bağlı) */}
      {onClick && (
        <div
          className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-500 cursor-pointer"
          onClick={onClick}
        ></div>
      )}
    </div>
  );
}

export default ProductCard;
