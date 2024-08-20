"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import "./styled.component.css";

export default function Banner_small() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-10">
        <div className="main__container bg-main">
          <div className="background overflow-hidden background-roulete rounded-xl h-full ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col">
              <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row">
                <div>
                  <h2 className="mt-10 uppercase">
                    Fortune wheel <span>brands</span>
                  </h2>
                  <h5 className="text-lg leading-8 text-gray-300 font-normal">
                    Pick a brand below, make first deposit and <span>win real cash</span>
                  </h5>
                  <div className="flex mt-4">
                    <Link
                      href={`&creative_id=XXL_FORTUNE_WHEEL`}
                      target="_blank"
                    >
                      <div className="btn btn-new">
                        <p>{t("Spin the Roulette")}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-2 p">
            To qualify for withdrawals, ensure your first deposit is at least
            €25 or the equivalent in other currencies and was made after
            requesting a withdrawal.
          </p>
        </div>
      </div>
    </>
  );
}
