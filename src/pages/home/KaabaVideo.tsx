const KaabaVideo = () => {
  return (
    <>
      <video
        className="w-full h-[300px] MuiCardMedia-media"
        autoPlay
        loop
        muted
      >
        <source src="/assets/kaabaVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default KaabaVideo;
