export default function LuxuryBlackLoveStory({
  stories,
}: {
  stories: {
    year: string;
    title: string;
    description: string;
    image?: string;
  }[];
}) {

  if (!stories?.length) return null;

  return (
    <section className="py-20 bg-black">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <div className="relative w-40 h-40 mx-auto mb-6">

            <img
              src="/images/luxury/round_frame.png"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-yellow-400 text-4xl">
                ♡
              </span>
            </div>

          </div>

          <h2 className="text-4xl 
          font-[family-name:var(--font-great-vibes)]
          font-bold
           text-yellow-400">
            Love Story
          </h2>

          <img
            src="/images/luxury/18.png"
            className="w-56 mx-auto mt-4"
          />

        </div>

        <div className="mt-14 space-y-10">

          {stories.map((story, index) => (

            <div
              key={index}
              className="
              bg-zinc-900/50
              border
              border-yellow-500/20
              rounded-3xl
              overflow-hidden
              "
            >

              {story.image && (

                <div
  className="
  bg-black
  flex
  justify-center
  items-center
  p-5
  "
>
  <img
    src={story.image}
    alt={story.title}
    className="
w-full
h-auto
rounded-2xl
border
border-yellow-500/20
"
  />
</div>

              )}

              <div className="p-8">

                <p
                  className="
                  text-yellow-400
                  font-[family-name:var(--font-great-vibes)]
                  tracking-[4px]
                  uppercase
                  text-xs
                  "
                >
                  {story.year}
                </p>

                <h3
                  className="
                  text-3xl
                  font-[family-name:var(--font-great-vibes)]
                  text-yellow-300
                  mt-2
                  "
                >
                  {story.title}
                </h3>

                <p
                  className="
                  text-zinc-300
                  text-1xl
md:text-1xl
font-[family-name:var(--font-title)]
                  mt-5
                  leading-8
                  "
                >
                  {story.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}