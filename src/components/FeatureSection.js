import { useEffect, useState } from "react";
import Feature from "./Feature";
import { Carousel } from "primereact/carousel";

const data = [
  {
    title: "Rent Management",
    para: "Setup scheduled payment expectations and reminders & monitor transfers",
  },
  {
    title: "Services Catalogue",
    para: "Don't know an electrician for a location? This catalogue is for you.",
  },
  {
    title: "Maintenance Management",
    para: "Track maintenance in an interactive way with your tenants and service providers. Review and rate providers on maintenance resolutions.",
  },
  {
    title: "Tenant and Owner Reviews",
    para: "Owners and tenants leave reviews and ratings about each other. Easy or tough to talk to? Write it down so others can know!",
  },
  {
    title: "Tenant Searching",
    para: "Hard time finding a tenant that matches your criteria? Search for tenants and let people fill applications online.",
  },
  {
    title: "Tax Reports and Lease Renewals",
    para: "Keep track of official matters in an organised manner",
  },
];

const featureTemplate = (feature) => {
  return <Feature title={feature.title} para={feature.para} />;
};

const FeatureSection = () => {
  const [isVhGreaterThanVw, setIsVhGreaterThanVw] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      setIsVhGreaterThanVw(vh > vw);
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, [isVhGreaterThanVw]);

  return (
    <Carousel
      value={data}
      itemTemplate={featureTemplate}
      numVisible={1}
      numScroll={1}
      autoplayInterval={3000}
      circular={true}
      showIndicators={true}
      showNavigators={false}
      orientation={"vertical"}
    />
  );
};

export default FeatureSection;
