"use client";

import { useTheme } from "@/theme/ThemeProvider";

export default function Opening() {

  const theme = useTheme();

  return (

<section
className="
relative
py-20
"
>

<div
className="
max-w-3xl
mx-auto
px-6
text-center
"
>

<img
src={theme.opening.ornament}
alt=""
className="
w-56
mx-auto
mb-2
"
/>

<p
className={`
text-lg
${theme.text.primary}
`}
>
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
</p>

<img
src={theme.opening.ornament}
alt=""
className="
w-56
mx-auto
my-4
"
/>

<p
className={`
mt-4
text-[22px]
leading-loose
${theme.text.body}
${theme.font.script}
`}
>
Dengan memohon rahmat dan ridho Allah SWT,
kami bermaksud menyelenggarakan acara
pernikahan putra-putri kami.
</p>

<p
className={`
mt-6
text-[22px]
leading-loose
${theme.text.body}
${theme.font.script}
`}
>
Merupakan suatu kehormatan dan kebahagiaan
bagi kami apabila Bapak/Ibu/Saudara/i
berkenan hadir untuk memberikan doa restu
kepada kedua mempelai.
</p>

<img
src={theme.opening.ornament}
alt=""
className="
w-56
mx-auto
mt-6
"
/>

</div>

</section>

  );

}