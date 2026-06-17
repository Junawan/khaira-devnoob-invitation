const features = [

  {
    icon: "🎨",
    title: "Semua Template Premium",
    description:
      "Nikmati seluruh koleksi template tanpa biaya tambahan.",
  },

  {
    icon: "🔄",
    title: "Bebas Ganti Tema",
    description:
      "Ubah tampilan undangan kapan saja tanpa kehilangan data.",
  },

  {
    icon: "💌",
    title: "RSVP Otomatis",
    description:
      "Konfirmasi kehadiran langsung masuk ke dashboard.",
  },

  {
    icon: "💬",
    title: "Ucapan & Doa",
    description:
      "Tamu dapat mengirim doa dan ucapan secara online.",
  },

  {
    icon: "🖼️",
    title: "Galeri Foto",
    description:
      "Tampilkan momen terbaik dalam galeri yang elegan.",
  },

  {
    icon: "🎵",
    title: "Musik Latar",
    description:
      "Tambahkan lagu favorit agar undangan lebih berkesan.",
  },

  {
    icon: "📍",
    title: "Google Maps",
    description:
      "Lokasi acara dapat dibuka langsung dari undangan.",
  },

  {
    icon: "🎁",
    title: "QRIS & Rekening",
    description:
      "Terima hadiah digital dengan QRIS atau transfer bank.",
  },

];

export default function Features() {

  return (

<section
className="
max-w-7xl
mx-auto
px-6
py-24
"
>

<div className="text-center mb-14">

<h2
className="
text-4xl
md:text-5xl
font-bold
"
>

Kenapa Memilih

Khaira Invitation?

</h2>

<p
className="
mt-4
text-zinc-500
max-w-2xl
mx-auto
"
>

Semua fitur premium sudah termasuk dalam satu kali pembelian.
Tidak ada biaya tambahan saat ingin mengganti tema.

</p>

</div>

<div
className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>

{features.map((item)=>(

<div

key={item.title}

className="
bg-white
rounded-3xl
p-8
border
shadow-sm
hover:-translate-y-1
hover:shadow-xl
transition
"

>

<div className="text-5xl">

{item.icon}

</div>

<h3
className="
mt-6
text-xl
font-semibold
"
>

{item.title}

</h3>

<p
className="
mt-3
text-zinc-500
leading-7
"
>

{item.description}

</p>

</div>

))}

</div>

</section>

  );

}