export default function History() {
  return (
    <div className="flex flex-col ">
      <div className="w-full h-80 bg-pagination bg-no-repeat mb-12">
        <div className="flex flex-col justify-center h-full items-center">
          <h1 className="text-5xl font-light text-white">Hikayemiz</h1>
          <p className="text-white font-light">Anasayfa / Hikayemiz</p>
        </div>
      </div>

      <div className="flex h-[30rem] items-center">
        <div className="flex flex-col font-light mx-auto gap-4 max-w-[50%] w-[40%]">
          <p className="text-3xl">Görevimiz onlara güzel bir hayat sunmak.</p>
          <p>
            Veteriner Klinik & Petshop&apos;tan Dostlarınıza En İyi Bakımı Sunan
            Mutlu Kuyruklar Ürünleri
          </p>
          <p>
            Mutlu Kuyruklar, dostlarınız için ihtiyaç duyduğunuz kaliteli ve
            sağlıklı beslenme çözümlerini sunar. Mamalarımız, zengin besin
            değerleri ve yüksek protein oranıyla dikkat çeker, böylece
            dostlarınızın sağlıklı bir şekilde büyümesine ve gelişmesine
            yardımcı olur.
          </p>
          <p>
            Veteriner Klinik & Petshop&apos;ta bulunan Mutlu Kuyruklar ürünleri,
            dostlarınızın keyifli ve iştahla yemesini sağlar. Her bir mama,
            dostlarınızın keyifli anlarını sizinle paylaşırken aynı zamanda
            sağlıklı bir beslenme sağlar.
          </p>
          <p>
            Mutlu Kuyruklar kedi ve köpek mamaları, içerdikleri doğal
            bileşenlerle dostlarınızın doğal beslenmesini destekler. Sindirim
            sistemi sorunlarının önüne geçer ve hassas ciltli veya hassas mideli
            dostlarınızın güvenle ve iştahla yemesini sağlar.
          </p>
          <p>
            Veteriner Klinik & Petshop&apos;tan Mutlu Kuyruklar ürünlerini
            tercih ederek, dostlarınızın mutluluğunu ve sağlığını ön planda
            tutabilirsiniz. Onlara en iyi bakımı sunmak için biz buradayız.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-[50%] w-[40%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="646.428"
            height="682.426"
            viewBox="0 0 646.428 682.426"
            className="w-80 h-80 bg-pets bg-no-repeat bg-cover bg-center transform rotate-45"
          >
            <path
              style={{
                fill: 'white',
                opacity: 0.5,
                animation: 'spotlight 1s ease-in-out forwards',
              }}
              d="M283.978,1A107.521,107.521,0,0,0,257.6,4.28a105.111,105.111,0,0,0-24.956,9.838A103.472,103.472,0,0,0,210.52,30.511a107.515,107.515,0,0,0-17.9,22.96L15.568,357A107.552,107.552,0,0,0,4.334,384.077,103.412,103.412,0,0,0,1.01,411.591a107.024,107.024,0,0,0,51.419,89.522A103.409,103.409,0,0,0,77.87,512.105a107.552,107.552,0,0,0,29.052,3.943H461.034a107.552,107.552,0,0,0,29.052-3.943,103.409,103.409,0,0,0,25.44-10.992,107.024,107.024,0,0,0,51.419-89.522,103.412,103.412,0,0,0-3.324-27.514A107.552,107.552,0,0,0,552.389,357L375.333,53.471a107.515,107.515,0,0,0-17.9-22.96,103.476,103.476,0,0,0-22.128-16.394A105.111,105.111,0,0,0,310.353,4.28,107.52,107.52,0,0,0,283.978,1m0-1c35.81,0,71.62,17.656,92.218,52.968L553.253,356.492c41.518,71.173-9.821,160.556-92.218,160.556H106.922c-82.4,0-133.736-89.382-92.218-160.556L191.76,52.968C212.358,17.656,248.168,0,283.978,0Z"
              transform="matrix(-0.259, 0.966, -0.966, -0.259, 646.428, 133.822)"
            >
              <image
                width="646.428"
                height="682.426"
                href="https://animalworld.com.tr/wp-content/uploads/2022/10/about-banner-2-copy.jpg"
              />
            </path>
          </svg>
        </div>
      </div>

      <div className="flex justify-center mt-24">
        <div className="relative min-h-96">
          <img
            src="https://animalworld.com.tr/wp-content/uploads/2022/10/about-banner-2-copy.jpg"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-4xl font-light border border-white border-opacity-60 rounded-xl p-12">
              Mutlu Kuyruklar
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-screen ">
        <div className="flex w-full max-w-screen-lg h-[32rem]">
          <div className="w-1/2">
            <img
              src="https://animalworld.com.tr/wp-content/uploads/2022/09/about-dog-1.jpg"
              alt="Resim"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-1/2 p-8 flex flex-col gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-4">
                Bizler de sizler gibi aslında gururlu evcil hayvan sahipleriyiz.
              </h2>
              <p className="text-gray-600">
                Biz de kedi ve köpek yetiştiriyoruz. Ancak esas referansımız,
                esas standardımız her zaman sizler oldunuz. Bu gerçekten heyecan
                verici. Mutlu kuyruklar markasının ardında aslında sizler
                varsınız; siz değerli evcil hayvan sahipleri. Bu markayı
                yaratırken uzun yıllar içinde oluşturduğumuz bilgi birikimine
                yaslandık. Bu birikimi ise sizlerden gelen geri bildirimlerle
                oluşturduk. Mesleki tecrübe kazandıkça memnuniyetiniz arttı.
                Çünkü biz, olgunlaştıkça daha kaliteli ve daha doğal ürünler
                üretmeye başladık.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-4">
                Dostluğumuzun gücüyle geliştik, dünyaya açıldık.
              </h2>
              <p className="text-gray-600">
                Yıllarca süren bu güzel serüveni sizlerle paylaşmaktan her zaman
                gurur duyduk. Bugünse artık bu dostluk ağı sınırları aşıyor.
                Başta ülkemiz olmak üzere toplam 13 ülkeden ham madde alıyoruz.
                Çünkü mama formülasyonlarımız yalnızca dünyanın en iyi maddeleri
                kullanılarak hazırlanıyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
