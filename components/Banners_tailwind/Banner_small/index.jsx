"use client";
import banner from "@/public/newimages/minibanner.png";
import Image from "next/image";
import "./styled.component.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import Brands_carousel from "../Brands_carousel";

export default function Banner_small() {
  const categoryBrands = { key1: "Segment2", key2: "Sandbox" };
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // Убираем первый символ "#" из строки
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div>
        <div id="real-block" className="main__container">
          <div className="">
            <div className="flex items-center px-2 py-2.5 sm:px-3.5 rounded-md mt-10 flex-col sm:flex-row new-brands">
              <h2 className="text-3xl font-bold tracking-tight text-white random-title">
                {t("TOP NEW")} <span>{t("releases")}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Brands_carousel categoryBrands={categoryBrands} creative={"Top_New_Releases"} />
    </>
  );
}
