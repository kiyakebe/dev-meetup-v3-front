import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[87vh] bg-slate-600 overflow-x-hidden relative">
      <div className="min-h-[87vh] mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px] bg-slate-800 rounded-[2rem]">
        <div className="flex flex-col gap-x-10 md:flex-row">
          <div className=" md:w-1/2 p-6 grid place-items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-7xl font-bold bg-gradient-to-r from-white via-team-50 to-teal-200 bg-clip-text text-transparent">
                V3 Dev MeetUp
              </h1>
              <p className="text-slate-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium obcaecati atque perspiciatis nobis in labore nostrum
                quos veniam debitis! Nihil.
              </p>
              <div className="relative space-x-6">
                <Link
                  href="/waitlist"
                  className="bg-gradient-to-r from-teal-600 to-teal-400 text-white inline-block py-4 px-10 rounded-2xl"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 grid place-items-center">
            <Image
              src="/placeholder.png?height=600&width=600"
              alt="AWW Smm Panel"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
