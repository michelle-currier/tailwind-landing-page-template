import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Img01 from "@/public/images/clean-livingroom.webp";
import Img02 from "@/public/images/clean-bathroom.jpg";
import Img03 from "@/public/images/clean-bedroom.jpg";
import Img04 from "@/public/images/clean-other.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="font-lobster mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl text-teal-700"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Schedule an estimate today!
            </h1>
            <div className="mx-auto max-w-3xl">
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-teal-600 to-teal-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://booking.setmore.com/scheduleappointment/aaf0bee6-80a6-4232-95a8-7a5b0a94aea8"
                  >
                    <span className="relative inline-flex items-center">
                      Book a consultation today!{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        - &gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-6xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="grid gap-4 overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
              <Image
                className="box-content rounded-2xl border-2 border-gray-50"
                src={Img01}
                width={320}
                height={200}
                alt="Avatar 01"
              />
              <div>
                <Image
                  className="box-content rounded-2xl border-2 border-gray-50"
                  src={Img02}
                  width={320}
                  height={200}
                  alt="Avatar 01"
                />
                <h2 className="font-lobster text-3xl text-center text-slate-700">
                  Bathrooms
                </h2>
              </div>
              <div>
                <Image
                  className="box-content rounded-2xl border-2 border-gray-50"
                  src={Img03}
                  width={320}
                  height={200}
                  alt="Avatar 02"
                />
                <h2 className="font-lobster text-3xl text-center text-blue-700">
                  Bedrooms
                </h2>
              </div>
              <div>
                <Image
                  className="box-content rounded-2xl border-2 border-gray-50"
                  src={Img04}
                  width={320}
                  height={200}
                  alt="Avatar 03"
                />
                <h2 className="font-lobster text-3xl text-center text-teal-700">
                  Living areas
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
