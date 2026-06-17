import ThemeCard from "./ThemeCard";

import {
  invitationThemes,
} from "@/app/data/InvitationThemes";

export default function ThemeCatalog() {

  return (

<section
id="template"
className="
max-w-7xl
mx-auto
px-6
pb-24
"
>

<div className="text-center mb-14">

<h2
className="
text-4xl
font-bold
"
>

Pilih Template

</h2>

<p
className="
mt-4
text-zinc-500
"
>

Pilih desain favorit Anda
dan lihat demonya secara langsung.

</p>

</div>

<div
className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"
>

{invitationThemes.map((theme)=>(

<ThemeCard

key={theme.id}

{...theme}

/>

))}

</div>

</section>

  );

}