/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroCarousel from "@/components/modules/home/Hero";
import ServiceCard from "@/components/modules/service/ServiceCard";
import { getAllService } from "@/services/service";

export default async function Home() {
  const { data } = await getAllService();

  return (
    <div>
      <HeroCarousel />
      <div className="grid grid-cols-4 gap-5">
        {data?.slice(0, 4).map((s: any) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
