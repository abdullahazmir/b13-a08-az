import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import QurbaniTips from "@/components/QurbaniTips";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <QurbaniTips/>
      <WhyChooseUs/>
     
    </div>
  );
}
