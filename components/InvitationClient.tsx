"use client";

import useInvitation from "@/hooks/useInvitation";

import {
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import LuxuryBlack
from "./themes/LuxuryBlack";

import ElegantGold
from "./themes/ElegantGold";

import Events from "@/components/sections/Events";

import Hero
from "@/components/sections/Hero";

import Opening
from "@/components/sections/Opening";

import Couple
from "@/components/sections/Couple";

import InvitationWrapper
from "./sections/InvitationWrapper";

import { useEffect } from "react";

import Countdown
from "@/components/sections/Countdown";

import Rsvp
from "@/components/sections/Rsvp";

import Location
from "@/components/sections/Location";

import LoveStory
from "@/components/sections/LoveStory";

import Gallery
from "@/components/sections/Gallery";

import Wishes
from "@/components/sections/Wishes";

import Gift
from "@/components/sections/Gift";

import { ThemeProvider } from "@/theme/ThemeProvider";

import ThemeLayout
from "@/components/common/ThemeLayout";

import Reveal
from "@/components/common/Reveal";

export default function InvitationClient({
  slug,
  guestName,
}: {
  slug: string;
  guestName?: string;
}) {
  console.log(
  "GUEST NAME:",
  guestName
);

  const {
    data,
    loading,
  } = useInvitation(slug);

  useEffect(() => {

  const key =
    `viewed-${slug}`;

  const viewed =
    localStorage.getItem(
      key
    );

  if (viewed)
    return;

  const addView =
    async () => {

      await updateDoc(
        doc(
          db,
          "invitations",
          slug
        ),
        {
          views:
            increment(1),
        }
      );

      localStorage.setItem(
        key,
        "true"
      );
    };

  addView();

}, [slug]);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-10">
        Undangan tidak ditemukan
      </div>
    );
  }

    const isLuxury =
  data.theme === "luxury-black";

  console.log("DATA INVITATION:", data);

  return (
  <ThemeProvider theme={data.theme}>

    <InvitationWrapper
  groom={data.groom}
  bride={data.bride}
  guestName={guestName || ""}
  coverImage={data.coverImage}
  musicUrl={data.musicUrl}
>

    <ThemeLayout>

      <main>

      {isLuxury ? (

  <>
    <Hero
groom={data.groom}
bride={data.bride}
coverImage={data.coverImage}
/>

<Reveal>

    <Opening />

</Reveal>

<Reveal delay={0.1}>

    <Couple data={data} />

</Reveal>

<Reveal delay={0.15}>

<LoveStory stories={data.loveStory}
/>

</Reveal>

     <Reveal delay={0.2}>

    <Events data={data}/>

</Reveal>

<Reveal direction="scale">

    <Gallery
  gallery={data.gallery}
/>

</Reveal>

<Reveal>

    <Countdown
  targetDate={data.date}
/>

</Reveal>
<Rsvp slug={slug} />

<Wishes
    slug={slug}
/>

<Location
  mapsUrl={data.mapsUrl}
  akadPlace={data.akadPlace}
  resepsiPlace={data.resepsiPlace}
/>

<Reveal direction="up">

    <Gift
    data={data}
/>

</Reveal>
  </>

) : (

  <>
  <Hero
groom={data.groom}
bride={data.bride}
coverImage={data.coverImage}
/>

<Reveal>

    <Opening />

</Reveal>

<Reveal delay={0.1}>

    <Couple data={data} />

</Reveal>

<Reveal delay={0.15}>

<LoveStory stories={data.loveStory}
/>

</Reveal>

  <Reveal delay={0.2}>

    <Events data={data}/>

</Reveal>

 <Reveal direction="scale">

    <Gallery
  gallery={data.gallery}
/>

</Reveal>

<Reveal>

    <Countdown
  targetDate={data.date}
/>

</Reveal>

<Rsvp slug={slug} />

<Wishes
    slug={slug}
/>

<Location
  mapsUrl={data.mapsUrl}
  akadPlace={data.akadPlace}
  resepsiPlace={data.resepsiPlace}
/>

<Reveal direction="up">

    <Gift
    data={data}
/>

</Reveal>
</>

)}
    </main>
    </ThemeLayout>

    </InvitationWrapper>

</ThemeProvider>
  );
}