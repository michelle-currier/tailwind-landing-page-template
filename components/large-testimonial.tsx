export default function LargeTestimonial() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 px-6 max-w-6xl mx-auto lg:grid-cols-3">
        <div className="py-12 md:py-20" data-aos="zoom-y-out">
          <div className="space-y-3 text-center">
            <p className="text-2xl font-bold text-gray-900">
              “Fantastic!”{" "}
              <em className="italic text-gray-500">
                Very neat and fantastically cleaned. The windows are shining
                again!
              </em>
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Whitney - 4.5/5 </span>{" "}
            </div>
          </div>
        </div>
        <div
          className="py-12 md:py-20"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          <div className="space-y-3 text-center">
            <p className="text-2xl font-bold text-gray-900">
              “Friendly and punctual”{" "}
              <em className="italic text-gray-500">
                Christina's Cleaning is always friendly and punctual. The
                quality of there work never disappoints and is well cared for.
              </em>
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Matilde - 5/5 </span>{" "}
            </div>
          </div>
        </div>
        <div
          className="py-12 md:py-20"
          data-aos="zoom-y-out"
          data-aos-delay={300}
        >
          <div className="space-y-3 text-center">
            <p className="text-2xl font-bold text-gray-900">
              “Quick and thorough help!”{" "}
              <em className="italic text-gray-500">
                Cristina's is a quick and thorough cleaning service. They get a
                lot done in a short time and also cleans things that are hidden.
              </em>
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Brad - 4.7/5 </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
