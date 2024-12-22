import Link from "next/link";

const KaabaVideo = () => {
  return (
    <>
      <div className="relative w-full min-h-96 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-96 object-cover"
        >
          <source src="/assets/kaabaVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-96 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
          <div className="space-y-5">
            <h1 className="tracking-widest uppercase">Eid & Umrah in Mekka</h1>
            <p className="font-semibold">
              Accommodation: Luxury Hotel Flight | Visa | Transfer & More
            </p>
          </div>
        </div>
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 space-y-6">
          <h1 className="tracking-widest uppercase">Eid & Umrah in Mekka</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium">
            €600 - €800 (All Inclusive)
          </p>
          <p className="text-sm sm:text-base md:text-lg font-light uppercase">
            January, February, March 2025
          </p>
          <div className="bg-white text-black py-2 px-4 rounded-lg shadow-lg">
            <p className="font-semibold">
              Accommodation: Luxury Hotel <br />
              Flight | Visa | Transfer & More
            </p>
          </div>
          <p className="text-center max-w-xl mx-auto leading-8">
            Umrah from Finland. Join us for a Spiritual Journey: Umrah in Soudi
            Arabia. Embark on a life-changing journey to the holy cities of
            Makkah and Madinah. Join our exclusive 7-days Umrah package and
            experience the peace, blessings, and spirituality of Umrah with
            Comfort and ease.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-light uppercase">
            Tour Route: Jeddah, Mekka, Madinah
          </p>
          <Link
            href="tel:+358449869280"
            className="bg-red-600 hover:bg-red-800 text-lg px-6 py-3 rounded-full shadow-lg transition my-5"
          >
            Book Now: +358 449 869280
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default KaabaVideo;
