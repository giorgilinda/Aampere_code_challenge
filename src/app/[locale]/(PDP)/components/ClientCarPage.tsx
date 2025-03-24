'use client';

import { findCars } from '@/utils/CarsUtils';
import { Chip } from '@material-tailwind/react';
import { useCarContext } from 'contexts/carContext';
import { useFormatter } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type ClientCarPageProps = {
  translations: {
    [key: string]: string;
  };
};

const ClientCarPage: React.FC<ClientCarPageProps> = ({ translations }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { car, saveCar } = useCarContext();
  const format = useFormatter();

  useEffect(() => {
    if (!car) {
      const url = pathname.split('/');
      const carList = findCars({ brand: url[1] ?? '', model: url[2] ?? '' });

      if (carList.length === 0 || !carList[0]) {
        // FIXME: not redirecting
        throw new Error('Car not found');
        //        return notFound;
      }

      saveCar(carList[0]);
    }
  }, [car]);

  // FIXME: add slider for pics
  // FIXME: add label to svgs
  // FIXME: fix currency

  const CHECK_MARK = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-[#3ec099]"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>;
  const CROSS_MARK = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-[#3ec099]"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" /></svg>;

  const backButtonClickHandler = () => {
    router.push('/');
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-2 py-5 mx-auto">
        <button type="button" className="flex ml-auto text-white bg-[#3ec099] border-0 py-2 px-6 focus:outline-none hover:bg-[#3ec099] rounded" onClick={backButtonClickHandler}>{translations.back}</button>
        <div className="mx-auto flex flex-wrap">
          <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{car?.brand}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{car?.model}</h1>
            {/* car?.images.map((image, key) => <img key={key} alt="ecommerce" className="h-full w-full object-cover" src={image} />) */}
            <div className="mt-10 mb-5">
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.condition}</span>
                <span className="ml-auto text-gray-900">
                  <Chip value={car?.condition} className="rounded-full bg-[#3ec099] border-0 py-1 px-2" />
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.year}</span>
                <span className="ml-auto text-gray-900">{car?.year}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.color}</span>
                <span className="ml-auto text-gray-900">{car?.color}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.seats}</span>
                <span className="ml-auto text-gray-900">{car?.seats}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.location}</span>
                <span className="ml-auto text-gray-900">{car?.location}</span>
              </div>
            </div>
            <div className="mt-10 mb-10">
              <h3 className="title-font text-[#37a987] tracking-widest mt-10">Technical data</h3>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.range_km}</span>
                <span className="ml-auto text-gray-900">{format.number(car?.range_km ?? 0)}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.battery_capacity_kWh}</span>
                <span className="ml-auto text-gray-900">{format.number(car?.battery_capacity_kWh ?? 0)}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.charging_speed_kW}</span>
                <span className="ml-auto text-gray-900">{format.number(car?.charging_speed_kW ?? 0)}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.drivetrain}</span>
                <span className="ml-auto text-gray-900">{car?.drivetrain}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.autopilot}</span>
                <span className="ml-auto text-gray-900">{car?.autopilot ? CHECK_MARK : CROSS_MARK}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.kilometer_count}</span>
                <span className="ml-auto text-gray-900">{format.number(car?.kilometer_count ?? 0)}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{translations.accidents}</span>
                <span className="ml-auto text-gray-900">{car?.accidents ? CHECK_MARK : CROSS_MARK}</span>
              </div>
            </div>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">{format.number(car?.price ?? 0, { style: 'currency', currency: 'EUR' })}</span>
              <button type="button" className="flex ml-auto text-white bg-[#3ec099] border-0 py-2 px-6 focus:outline-none hover:bg-[#3ec099] rounded">{translations.submit_button}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarPage;
