const KaabaVideo = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
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
            <h1 className="text-5xl font-bold mb-4">Your Heading Here</h1>
            <p className="text-xl">
              This is some content that will appear over the video background.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KaabaVideo;
