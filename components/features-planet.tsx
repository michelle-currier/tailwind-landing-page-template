import Image from "next/image";
import teamClean from "@/public/images/teamclean.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="font-lobster text-3xl font-bold text-gray-200 md:text-4xl">
              Christina's Cleaning Services gets the job done!
            </h2>
          </div>

          <div
            className="grid grid-flow-col grid-rows-2 gap-4"
            data-aos="zoom-y-out"
          >
            <p className="col-span-2 text-[15px] text-gray-400">
              It is difficult to manage your job, family and your social life
              all at the same time. Of course you need some help at home. Take
              back your valuable free time for the things you love by booking
              your trusted cleaner with helping.
            </p>

            <p className="col-span-2 text-[15px] text-gray-400">
              Having a cleaner in your home is a delicate situation - trust is
              very important. It is also important to get along with your
              cleaner on a personal level. The cleaners you can book at Helpling
              all have individual online profiles with ratings from previous
              customers. We also do a background check on all of the cleaners.
            </p>

            <div className="row-span-4">
              <Image
                className="box-content rounded-2xl border-2 border-gray-50"
                src={teamClean}
                width={300}
                height={200}
                alt="cleaning people"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
