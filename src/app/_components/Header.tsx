"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Genres } from "./genres";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], style: ["italic"] });
export const Header = () => {
  const [isSearching, setIsSearching] = useState(true);
  const handleFocus = () => {
    if (isSearching) {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  };
  return (
    <div className="w-[375px] flex mx-auto mt-[12px] items-center justify-between px-[20px]">
      <Link href="/">
        <div className={`flex gap-[8px] ${!isSearching && "hidden"} `}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83366 2.16675V18.8334M14.167 2.16675V18.8334M1.66699 10.5001H18.3337M1.66699 6.33341H5.83366M1.66699 14.6667H5.83366M14.167 14.6667H18.3337M14.167 6.33341H18.3337M3.48366 2.16675H16.517C17.5203 2.16675 18.3337 2.9801 18.3337 3.98341V17.0167C18.3337 18.0201 17.5203 18.8334 16.517 18.8334H3.48366C2.48034 18.8334 1.66699 18.0201 1.66699 17.0167V3.98341C1.66699 2.9801 2.48034 2.16675 3.48366 2.16675Z"
              stroke="#4338CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1
            className={`text-indigo-700 text-[16px] font-bold ${inter.className}`}
          >
            Movie Z
          </h1>
        </div>
      </Link>

      <div
        className={`lg:block ${
          !isSearching ? "block" : "hidden"
        } px-[16px] py-[8px] border-[1px] shadow-sm rounded-md relative`}
      >
        <Popover>
          <PopoverTrigger>
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.5L5 4.5L9 0.5"
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PopoverTrigger>
          <PopoverContent>
            <Genres />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-[12px]">
        <div>
          <Input onFocus={handleFocus} />
        </div>
        <div className="w-[36px] h-[36px] border-[1px] shadow-sm rounded-md flex items-center justify-center ">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.5C6.20435 1.29565 5.75736 2.37478 5.75736 3.5C5.75736 4.62522 6.20435 5.70435 7 6.5C7.79565 7.29565 8.87478 7.74264 10 7.74264C11.1252 7.74264 12.2044 7.29565 13 6.5C13 7.68669 12.6481 8.84673 11.9888 9.83342C11.3295 10.8201 10.3925 11.5892 9.2961 12.0433C8.19975 12.4974 6.99335 12.6162 5.82946 12.3847C4.66558 12.1532 3.59648 11.5818 2.75736 10.7426C1.91825 9.90353 1.3468 8.83443 1.11529 7.67054C0.88378 6.50666 1.0026 5.30026 1.45673 4.2039C1.91085 3.10754 2.67989 2.17047 3.66658 1.51118C4.65328 0.851894 5.81331 0.5 7 0.5Z"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
