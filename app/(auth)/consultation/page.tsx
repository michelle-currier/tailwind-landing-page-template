export const metadata = {
  title: "Consultation",
  description: "Page description",
};

export default function Consultation() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <h2>Schedule an estimate today!</h2>
          </div>
        </div>
        <div className="mt-6">
          <button className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]">
            <a
              href="https://booking.setmore.com/scheduleappointment/aaf0bee6-80a6-4232-95a8-7a5b0a94aea8"
              target="_blank"
            >
              Book a Consultation
            </a>
          </button>
        </div>
      </form>
    </>
  );
}
