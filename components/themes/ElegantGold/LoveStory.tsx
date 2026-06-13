export default function elegantGoldLoveStory({
  stories,
}: {
  stories: {
    year: string;
    title: string;
    description: string;
    image?: string;
  }[];
}) {
  if (!stories?.length)
    return null;

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <div className="relative w-40 h-40 mx-auto mb-6">

            <img
              src="/images/luxury/round_frame.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#9A7B45] text-4xl">
                ♡
              </span>
            </div>

          </div>

          <h2 className="text-4xl font-serif text-[#9A7B45]">
            Love Story
          </h2>

          {stories.length > 1 && (
  <p
    className="
    text-zinc-500
    text-sm
    mt-3
    tracking-widest
    "
  >
    Geser untuk melihat perjalanan kami →
  </p>
)}

          <img
            src="/images/luxury/18.png"
            alt=""
            className="w-56 mx-auto mt-4"
          />

        </div>

        <div
  className="
  mt-16
  flex
  gap-6
  justify-center
  overflow-x-auto
  snap-x
  snap-mandatory
  pb-6
  scrollbar-hide
  "
>

          {stories.map((story, index) => (

            <div
              key={index}
              className="
              w-[320px]
              snap-center
              bg-zinc-900/50
              border
              border-yellow-500/20
              rounded-3xl
              p-5
              flex-shrink-0
              "
            >

              {story.image && (

                <img
                  src={story.image}
                  alt={story.title}
                  className="
w-full
h-48
object-contain
rounded-2xl
border
border-yellow-500/20
mb-4
bg-black
"
                />

              )}

              <p
                className="
                text-yellow-400
                text-xs
                tracking-[3px]
                uppercase
                "
              >
                {story.year}
              </p>

              <h3
                className="
                text-xl
                text-yellow-400
                mt-2
                font-semibold
                "
              >
                {story.title}
              </h3>

              <p
                className="
                text-zinc-300
                mt-3
                leading-relaxed
                text-sm
                "
              >
                {story.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}