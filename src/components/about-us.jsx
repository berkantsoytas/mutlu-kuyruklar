import { GoArrowRight } from 'react-icons/go';
import NaturalEarth from './svg/natural_earth';
import Natural from './svg/natural';
import Beef from './svg/beef';
import Paper from './svg/paper';

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-12 px-8 md:p-16 mt-16 border-[#e7e5e5] shadow-sm rounded-[100px]">
      <img
        src="https://animalworld.com.tr/wp-content/uploads/2022/12/Component-min.png"
        alt="about-us"
        className="w-64 md:w-80 h-auto md:h-80 mb-8 md:mb-0"
      />
      <div className="md:ml-8 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-12 max-w-[50%]">
        <div className="font-light text-xl md:text-3xl mb-4 flex items-end gap-6 justify-between w-full">
          <p>Neden Mutlu Kuyruklar&apos;ı Seçmelisiniz?</p>
          <p className="text-sm flex items-center gap-1 hover:underline opacity-40 hover:opacity-70">
            Hakkımızda <GoArrowRight />
          </p>
        </div>
        <p className="text-sm md:text-base font-light">
          Evdeki sevimli dostlarınızdan, yetiştirdiğimiz evcil hayvanlara kadar,
          her bir hayvanın yaşamı boyunca sevgi ve özen gösterilmesi gerektiğine
          inanıyoruz. Hayvanlar, bizim sorumluluğumuz altında sağlıklı ve mutlu
          bir yaşam sürmelidirler. Bu nedenle, hem petshop hem de veteriner
          kliniğimizde, evcil hayvanınızın yaşam kalitesini artırmaya yönelik
          adımlar atıyoruz.
        </p>
        <div className="flex items-center justify-center gap-16">
          <p className="flex flex-col opacity-70 font-light w-16 text-sm gap-2 hover:bg-[#525151]">
            <NaturalEarth />
            Tamamen doğal mamalar
          </p>
          <p className="flex flex-col opacity-70 font-light w-16 text-sm gap-2 hover:bg-[#525151]">
            <Beef />
            Tamamen doğal mamalar
          </p>
          <p className="flex flex-col opacity-70 font-light w-16 text-sm gap-2 hover:bg-[#525151]">
            <Natural />
            Tamamen doğal mamalar
          </p>
          <p className="flex flex-col opacity-70 font-light w-16 text-sm gap-2 hover:bg-[#525151]">
            <Paper />
            Tamamen doğal mamalar
          </p>
        </div>
      </div>
    </div>
  );
}
