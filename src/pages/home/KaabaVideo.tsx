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

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 w-full h-96 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold text-center py-5">
              Welcome to Umrah
            </h1>
            <p className="text-center max-w-xl mx-auto leading-8">
              Umrah from Finland. Join us for a Spiritual Journey: Umrah in
              Soudi Arabia. Embark on a life-changing journey to the holy cities
              of Makkah and Madinah. Join our exclusive 7-days Umrah package and
              experience the peace, blessings, and spirituality of Umrah with
              Comfort and ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KaabaVideo;
