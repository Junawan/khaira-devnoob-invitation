"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import ImageUpload
from "@/components/ImageUpload";

import GalleryUpload
from "@/components/GalleryUpload";

import MusicUpload
from "@/components/MusicUpload";

export default function EditInvitationForm({
  slug,
}: {
  slug: string;
}) {

  const [loading, setLoading] =
    useState(true);

  const [groom, setGroom] =
    useState("");

  const [bride, setBride] =
    useState("");

  const [date, setDate] =
    useState("");

    const [akadDate, setAkadDate] =
  useState("");

const [akadTime, setAkadTime] =
  useState("");

const [akadPlace, setAkadPlace] =
  useState("");

const [resepsiDate, setResepsiDate] =
  useState("");

const [resepsiTime, setResepsiTime] =
  useState("");

const [resepsiPlace, setResepsiPlace] =
  useState("");

    const [coverImage,
  setCoverImage] =
  useState("");

const [groomImage,
  setGroomImage] =
  useState("");

const [brideImage,
  setBrideImage] =
  useState("");

  const [gallery,
  setGallery] =
  useState<string[]>([]);

const [qrisImage,
  setQrisImage] =
  useState("");

  const [mapsUrl, setMapsUrl] =
  useState("");

const [bankName, setBankName] =
  useState("");

const [accountNumber,
  setAccountNumber] =
  useState("");

const [accountName,
  setAccountName] =
  useState("");

  const [theme, setTheme] =
  useState("elegant-gold");

  const [groomParents,
  setGroomParents] =
  useState("");

const [brideParents,
  setBrideParents] =
  useState("");

  const [groomTitle, setGroomTitle] =
  useState("");

const [groomFather, setGroomFather] =
  useState("");

const [groomMother, setGroomMother] =
  useState("");

const [brideTitle, setBrideTitle] =
  useState("");

const [brideFather, setBrideFather] =
  useState("");

const [brideMother, setBrideMother] =
  useState("");

  const [musicUrl, setMusicUrl] =
  useState("");

  const [loveStory, setLoveStory] =
  useState<any[]>([]);


  useEffect(() => {

    const load =
      async () => {

        const snap =
          await getDoc(
            doc(
              db,
              "invitations",
              slug
            )
          );

        if (
          snap.exists()
        ) {

          const data =
            snap.data();

          setGroom(
            data.groom || ""
          );

          setBride(
            data.bride || ""
          );

          setDate(
            data.date || ""
          );

          setAkadDate(
  data.akadDate || ""
);

setAkadTime(
  data.akadTime || ""
);

setAkadPlace(
  data.akadPlace || ""
);

setResepsiDate(
  data.resepsiDate || ""
);

setResepsiTime(
  data.resepsiTime || ""
);

setResepsiPlace(
  data.resepsiPlace || ""
);

          setCoverImage(
  data.coverImage || ""
);

setGroomImage(
  data.groomImage || ""
);

setBrideImage(
  data.brideImage || ""
);

setQrisImage(
  data.qrisImage || ""
);

setMapsUrl(
  data.mapsUrl || ""
);

setBankName(
  data.bankName || ""
);

setAccountNumber(
  data.accountNumber || ""
);

setAccountName(
  data.accountName || ""
);

setTheme(
  data.theme ||
  "elegant-gold"
);

setGallery(
  data.gallery || []
);

setGroomParents(
  data.groomParents || ""
);

setBrideParents(
  data.brideParents || ""
);

setGroomTitle(
  data.groomTitle || ""
);

setGroomFather(
  data.groomFather || ""
);

setGroomMother(
  data.groomMother || ""
);

setBrideTitle(
  data.brideTitle || ""
);

setBrideFather(
  data.brideFather || ""
);

setBrideMother(
  data.brideMother || ""
);

setLoveStory(
  data.loveStory || []
);

setMusicUrl(
  data.musicUrl || ""
);
        }

        setLoading(false);
      };

    load();

  }, [slug]);

  const save =
  async () => {

    console.log(
      "GALLERY SAAT DISIMPAN:",
      gallery
    );

    await updateDoc(
      doc(
        db,
        "invitations",
        slug
      ),
      {
        groom,
        bride,
        date,

        coverImage,
        groomImage,
        brideImage,

        qrisImage,

        mapsUrl,

        bankName,
        accountNumber,
        accountName,

        theme,

        akadDate,
        akadTime,
        akadPlace,

        resepsiDate,
        resepsiTime,
        resepsiPlace,

        gallery,
        groomParents,
brideParents,
groomTitle,
groomFather,
groomMother,

brideTitle,
brideFather,
brideMother,
loveStory,
musicUrl,
      }
    );

    alert(
      "Berhasil disimpan"
    );
};

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow">

      <h1 className="text-4xl font-bold mb-8">
        Edit Undangan
      </h1>

      <div className="space-y-4">

        <input
          value={groom}
          onChange={(e) =>
            setGroom(
              e.target.value
            )
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          value={bride}
          onChange={(e) =>
            setBride(
              e.target.value
            )
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
  value={groomTitle}
  onChange={(e)=>
    setGroomTitle(
      e.target.value
    )
  }
  placeholder="Putra Pertama"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={groomFather}
  onChange={(e)=>
    setGroomFather(
      e.target.value
    )
  }
  placeholder="Nama Ayah"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={groomMother}
  onChange={(e)=>
    setGroomMother(
      e.target.value
    )
  }
  placeholder="Nama Ibu"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={brideTitle}
  onChange={(e)=>
    setBrideTitle(
      e.target.value
    )
  }
  placeholder="Putri Kedua"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={brideFather}
  onChange={(e)=>
    setBrideFather(
      e.target.value
    )
  }
  placeholder="Nama Ayah"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={brideMother}
  onChange={(e)=>
    setBrideMother(
      e.target.value
    )
  }
  placeholder="Nama Ibu"
  className="w-full border p-4 rounded-xl"
/>

        <input
          type="datetime-local"
          value={date}
          onChange={(e) =>
            setDate(
              e.target.value
            )
          }
          className="w-full border p-4 rounded-xl"
        />

        <h3 className="font-semibold mt-8">
  Akad Nikah
</h3>

<input
  value={akadDate}
  onChange={(e) =>
    setAkadDate(
      e.target.value
    )
  }
  placeholder="Tanggal Akad"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={akadTime}
  onChange={(e) =>
    setAkadTime(
      e.target.value
    )
  }
  placeholder="Jam Akad"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={akadPlace}
  onChange={(e) =>
    setAkadPlace(
      e.target.value
    )
  }
  placeholder="Lokasi Akad"
  className="w-full border p-4 rounded-xl"
/>

<h3 className="font-semibold mt-8">
  Resepsi
</h3>

<input
  value={resepsiDate}
  onChange={(e) =>
    setResepsiDate(
      e.target.value
    )
  }
  placeholder="Tanggal Resepsi"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={resepsiTime}
  onChange={(e) =>
    setResepsiTime(
      e.target.value
    )
  }
  placeholder="Jam Resepsi"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={resepsiPlace}
  onChange={(e) =>
    setResepsiPlace(
      e.target.value
    )
  }
  placeholder="Lokasi Resepsi"
  className="w-full border p-4 rounded-xl"
/>

        <h3>Cover</h3>

<ImageUpload
  path={`covers/${slug}`}
  onUploaded={
    setCoverImage
  }
/>

<h3>Foto Pria</h3>

<ImageUpload
  path={`groom/${slug}`}
  onUploaded={
    setGroomImage
  }
/>

<h3>Foto Wanita</h3>

<ImageUpload
  path={`bride/${slug}`}
  onUploaded={
    setBrideImage
  }
/>

<h3>QRIS</h3>

<ImageUpload
  path={`qris/${slug}`}
  onUploaded={
    setQrisImage
  }
/>

<input
  value={mapsUrl}
  onChange={(e) =>
    setMapsUrl(
      e.target.value
    )
  }
  placeholder="Google Maps URL"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={bankName}
  onChange={(e) =>
    setBankName(
      e.target.value
    )
  }
  placeholder="Nama Bank"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={accountNumber}
  onChange={(e) =>
    setAccountNumber(
      e.target.value
    )
  }
  placeholder="Nomor Rekening"
  className="w-full border p-4 rounded-xl"
/>

<input
  value={accountName}
  onChange={(e) =>
    setAccountName(
      e.target.value
    )
  }
  placeholder="Nama Pemilik Rekening"
  className="w-full border p-4 rounded-xl"
/>

<h3 className="font-semibold mt-8">
  Lagu Undangan
</h3>

<MusicUpload
  path={`music/${slug}`}
  onUploaded={
    setMusicUrl
  }
/>

{musicUrl && (

  <audio
    controls
    className="w-full mt-3"
  >
    <source
      src={musicUrl}
      type="audio/mpeg"
    />
  </audio>

)}

<select
  value={theme}
  onChange={(e) =>
    setTheme(
      e.target.value
    )
  }
  className="w-full border p-4 rounded-xl"
>

  <option value="elegant-gold">
    Elegant Gold
  </option>

  <option value="luxury-black">
    Luxury Black Gold
  </option>

</select>

<div className="mt-10">

  <h3 className="text-xl font-semibold mb-4">
    Love Story
  </h3>

  {loveStory.map(
    (story, index) => (

      <div
        key={index}
        className="
        border
        rounded-xl
        p-4
        mb-4
        "
      >

        <input
          value={story.year}
          placeholder="Tahun"
          onChange={(e) => {

            const updated =
              [...loveStory];

            updated[index].year =
              e.target.value;

            setLoveStory(updated);

          }}
          className="
          w-full
          border
          p-3
          rounded-lg
          mb-3
          "
        />

        <input
          value={story.title}
          placeholder="Judul"
          onChange={(e) => {

            const updated =
              [...loveStory];

            updated[index].title =
              e.target.value;

            setLoveStory(updated);

          }}
          className="
          w-full
          border
          p-3
          rounded-lg
          mb-3
          "
        />

        <textarea
          value={story.description}
          placeholder="Cerita"
          onChange={(e) => {

            const updated =
              [...loveStory];

            updated[index].description =
              e.target.value;

            setLoveStory(updated);

          }}
          className="
          w-full
          border
          p-3
          rounded-lg
          h-28
          "
        />

        <h4 className="font-medium mb-2">
  Foto Story
</h4>

<ImageUpload
  path={`lovestory/${slug}-${index}`}
  onUploaded={(url) => {

    const updated = [...loveStory];

    updated[index].image = url;

    setLoveStory(updated);

  }}
/>

{story.image && (
  <img
    src={story.image}
    alt=""
    className="
      w-full
      h-48
      object-cover
      rounded-xl
      mt-3
    "
  />
)}

        <button
          type="button"
          onClick={() => {

            const updated =
              loveStory.filter(
                (_, i) =>
                  i !== index
              );

            setLoveStory(updated);

          }}
          className="
          mt-3
          text-red-500
          "
        >
          Hapus Story
        </button>

      </div>

    )
  )}

  <button
    type="button"
    onClick={() =>
      setLoveStory([
        ...loveStory,
        {
          year: "",
          title: "",
          description: "",
        },
      ])
    }
    className="
    bg-blue-500
    text-white
    px-4
    py-2
    rounded-lg
    "
  >
    + Tambah Story
  </button>

  <h3 className="font-semibold mt-8">
  Gallery
</h3>

<GalleryUpload
  slug={slug}
  onUploaded={(urls) => {

  console.log(
    "UPLOAD URLS:",
    urls
  );

  setGallery((prev) => {

    const next = [
      ...prev,
      ...urls,
    ];

    console.log(
      "STATE GALLERY:",
      next
    );

    return next;
  });

}}
/>

<div className="grid grid-cols-2 gap-4 mt-4">

  {gallery.map((url) => (

    <img
      key={url}
      src={url}
      alt=""
      className="rounded-xl"
    />

  ))}

</div>

</div>

        <button
          onClick={save}
          className="bg-[#9A7B45] text-white px-6 py-4 rounded-xl"
        >
          Simpan
        </button>

      </div>

    </div>

    
  );
}