'use client';
import useBgCheckFormats from '@/utils/useBgCheckFormats';
import Image from 'next/image';

const Map = () => {
  useBgCheckFormats();
  return (
    <>
      <section
        className="bg-say-bg bg-cover xl:bg-options flex justify-center items-center flex-col cursor-pointer item-bg min-h-[167px]"
        aria-label="Open map"
        title="Open map"
        data-bg="image/map/map-bg.jpg"
      >
        <div className="dark:bg-dark w-full h-full py-[50px]">
          <div className="text-center flex justify-center items-center flex-col">
            <Image
              src="/image/map/map-ico.svg"
              alt="map icon"
              width={19}
              height={15}
            />

            <h2 className="uppercase text-red-500 my-2">Open map</h2>
            <div className="w-[50px] h-1 bg-red-400"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
