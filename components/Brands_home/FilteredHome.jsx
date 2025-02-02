"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useNavigateBrands from "./Navigate";
import AllBrands from "./AllBrands";
import { useLanguage } from "@/components/switcher/LanguageContext";
import classNames from 'classnames';
import "../../app/filteredComponents.css"

const FilteredHome = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isLoader, setIsLoader] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);

  const navigateBrands = useNavigateBrands();


  const handleTabChange = (tabNumber) => {
    setCurrentTab(tabNumber);
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  };

  return (
    <div className="pt-10 pb-10">
      <div className="main__container">
        {/* <h2 className="">
          {t("Catalog of all 2024 Online Casino Bonuses Offered")}
        </h2>
        <p className="mt-3 pb-4">
          {t("Seeking online casino bonuses and promotions? Explore our current database featuring numerous casino bonus offers for your selection.")}
        </p> */}
        <div className="">
          <nav aria-label="Tabs" className="isolate isolate-tabs flex divide-x overflow-x-auto">
            {navigateBrands.map((item) => (
              <button
                key={item.currentTab}
                className={classNames(
                  currentTab === item.currentTab
                    ? 'decoration-2 underline-offset-8 '
                    : 'text-gray-500',
                  'group relative flex-1 overflow-hidden px-4 py-4 text-center text-sm font-medium flex justify-center flex-row items-center p-2 min-w-40 transition-colors duration-300 ease-in-out',
                )}
                onClick={() => handleTabChange(item.currentTab)}
              >
                {item.icon}
                {item.currentText2}
              </button>
            ))}
          </nav>
        </div>


        {/* Non-tailwind elements */}
        <div className="main other-custom-bonuses filter-brands">
          <div className="overlay-filter">
            {navigateBrands.map((item) => {
              return (
                currentTab === item.currentTab && (
                  <AllBrands
                    key={`${item.currentTab}-${language}`}
                    creative={item.currentText}
                    isLoader={isLoader}
                    segment={item.segment}
                    value={item.value}
                    target={item.target}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredHome;



