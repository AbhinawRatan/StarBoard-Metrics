import React from 'react';
import { IoWalletSharp, IoStatsChartSharp, IoTrendingDownSharp, IoLogoUsd } from 'react-icons/io5';

export default function DashboardStatsGrid() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoWalletSharp className="text-2xl" /> 
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-xs md:text-sm text-gradient font-normal">Stablecoin Supply</span>
          <div className="flex items-center">
            <strong className="text-lg md:text-xl text-green-500 font-semibold">$73.22B</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoStatsChartSharp className="text-2xl" />
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-xs md:text-sm text-gradient font-normal">Stablecoin TVL</span>
          <div className="flex items-center">
            <strong className="text-lg md:text-xl text-green-500 font-semibold">$8.05%</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoTrendingDownSharp className="text-2xl" />
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-xs md:text-sm text-gradient font-normal">TVL Change 7D</span>
          <div className="flex items-center">
            <strong className="text-lg md:text-xl text-red-500 font-semibold">-3.65%</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-8 md:h-12 w-8 md:w-12 flex items-center justify-center">
          <IoLogoUsd className="text-2xl" />
        </div>
        <div className="pl-2 md:pl-4">
          <span className="text-xs md:text-sm text-gradient font-normal">USDC Dominance</span>
          <div className="flex items-center">
            <strong className="text-lg md:text-xl text-green-500 font-semibold">53.20%</strong>
          </div>
        </div>
      </BoxWrapper>

    </div>
  );

}

function BoxWrapper({ children }) {
    return (
        <div className="bg-black-gradient rounded-md p-3 md:p-4 flex flex-col md:flex-row items-center shadow-xl">{children}</div>
    );
}
