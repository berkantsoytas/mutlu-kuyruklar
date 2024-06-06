import { AiOutlinePhone } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { CiLocationArrow1 } from 'react-icons/ci';

export default function Footer() {
  return (
    <div className="flex h-96 w-[80%] mx-auto">
      <div className="flex flex-col items-left justify-center gap-4">
        <img
          src="https://placehold.co/600x400/EEE/31343C"
          className="w-44 h-44 object-contain"
        />

        <p className="flex gap-2 items-center text-center font-light text-sm">
          <AiOutlinePhone />
          +90 543 135 25 75
        </p>

        <p className="flex gap-2 items-center text-center font-light text-sm">
          <CgMail />
          info@mutlukuyruklar.com
        </p>

        <p className="flex gap-2 items-center text-center font-light text-sm">
          <CiLocationArrow1 />
          Huzurevleri Mh, 77140 sk. No: 3/A Çukurova/ADANA
        </p>
      </div>

      <div className="flex flex-col items-left justify-center gap-2 mx-auto">
        <p className="text-3xl font-light mb-6">Hızlı Menü</p>
        <p className="font-light">Anasayfa</p>
        <p className="font-light">Ürünler</p>
        <p className="font-light">Hikayemiz</p>
        <p className="font-light">İletişim</p>
      </div>

      <div className="flex flex-col items-left justify-center gap-2 mx-auto">
        <p className="text-3xl font-light mb-6">Köpek-Kedi</p>
        <p className="font-light">Yetişkin Mamalar</p>
        <p className="font-light">Yavru Mamalar</p>
      </div>

      <div className="flex flex-col items-left justify-center gap-2 mx-auto">
        <p className="text-3xl font-light mb-6">Kedi</p>
        <p className="font-light">Yetişkin Mamalar</p>
        <p className="font-light">Yavru Mamalar</p>
      </div>
    </div>
  );
}
