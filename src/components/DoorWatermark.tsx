import Image from "next/image";
import watermarkPhoto from "../../public/photos/watermark-door.jpg";

export default function DoorWatermark() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden bg-stone-50">
      <Image
        src={watermarkPhoto}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top opacity-50 grayscale contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/10 via-stone-50/40 to-stone-50/80" />
    </div>
  );
}
