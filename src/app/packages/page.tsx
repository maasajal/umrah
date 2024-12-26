import CallToAction from "@/components/CallToAction";
import PageCover from "@/components/PageCover";
import PackageDetails from "@/pages/packages/section/PackageDetails";

const Packages = () => {
  return (
    <div>
      <PageCover
        title="Our Exclusive Umrah Packages"
        bgImage="https://images.unsplash.com/photo-1668304521248-0dd0cc00fbfc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PackageDetails />
      <CallToAction />
    </div>
  );
};

export default Packages;
