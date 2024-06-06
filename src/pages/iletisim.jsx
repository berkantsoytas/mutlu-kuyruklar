import { MdPhoneInTalk } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationArrow1 } from 'react-icons/ci';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-80 bg-pagination bg-no-repeat mb-12">
        <div className="flex flex-col justify-center h-full items-center">
          <h1 className="text-5xl font-light text-white">İletişim</h1>
          <p className="text-white font-light">Anasayfa / İletişimz</p>
        </div>
      </div>

      <div className="flex w-max h-96 mx-auto gap-48">
        <div className="flex flex-col font-light gap-4 mx-auto p-8">
          <p className="flex items-center gap-2 text-3xl">İletisim</p>

          <p className="flex items-center gap-2">
            <MdPhoneInTalk />
            +90 543 135 25 75
          </p>

          <p className="flex items-center gap-2">
            <AiOutlineMail />
            info@mutlukuyruklar.com
          </p>

          <p className="flex gap-2 items-center text-center font-light text-sm">
            <CiLocationArrow1 />
            Huzurevleri Mh, 77140 sk. No: 3/A Çukurova/ADANA
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                className="w-36 rounded-lg p-2"
                type="text"
                placeholder="Adınız"
              />
              <input
                className="w-36 rounded-lg p-2"
                type="text"
                placeholder="Soyadınız"
              />
            </div>
            <div className="flex gap-2">
              <input
                className="w-36 rounded-lg p-2"
                type="text"
                placeholder="E Posta"
              />
              <input
                className="w-36 rounded-lg p-2"
                type="text"
                placeholder="Telefon"
              />
            </div>

            <textarea
              className="w-96 h-36 rounded-lg p-2"
              placeholder="Mesajınız"
            ></textarea>
          </div>
        </div>

        <div>
          <img
            src="https://animalworld.com.tr/wp-content/uploads/2022/09/harita.png"
            className="w-96 h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
