import { React, useState } from 'react';

function AccordionItem({
  id,
  title,
  description,
  isActive,
  toggleActive,
  noLast,
}) {
  return (
    <>
      <h2 id={`accordion-flush-heading-${id}`} className="font-[RobotoMono]">
        <button
          type="button"
          className={
            noLast
              ? 'flex items-center w-full md:text-[22px] text-[18px] font-medium rtl:text-right text-gray-200 gap-3 h-[55px]'
              : 'flex items-center w-full md:text-[22px] text-[18px] font-medium rtl:text-right text-gray-200 border-b-[0.5px] border-[#747474aa] gap-3 h-[55px]'
          }
          data-accordion-target={`#accordion-flush-body-${id}`}
          aria-expanded={isActive}
          aria-controls={`accordion-flush-body-${id}`}
          onClick={() => toggleActive(id)}
        >
          <span id={`accordion-icon-${id}`}>
            {isActive ? (
              <img
                src="./assets/images/icon/tab_blue_icon.png"
                className="w-[2px] h-[30px]"
                alt="Blue Icon"
              />
            ) : (
              <img
                src="./assets/images/icon/tab_gray_icon.png"
                className="w-[2px] h-[30px]"
                alt="Gray Icon"
              />
            )}
          </span>
          <span>{title}</span>
        </button>
      </h2>
      <div
        id={`accordion-flush-body-${id}`}
        className={
          isActive
            ? "bg-[url('../assets/images/bg_images/leftLighting.png')] bg-no-repeat bg-top bg-topfont-[RobotoMono]"
            : 'hidden'
        }
        aria-labelledby={`accordion-flush-heading-${id}`}
      >
        <div
          className={
            noLast
              ? 'py-[24px] px-[6px] gridLine border-t-[0.5px] border-[#747474aa] dark:border-[#747474aa] text-center'
              : 'py-[24px] px-[6px] gridLine border-b-[0.5px] border-[#747474aa] dark:border-[#747474aa] text-center'
          }
        >
          <p className="mb-2 text-gray-200 dark:text-gray-200">{description}</p>
        </div>
      </div>
    </>
  );
}

const CONTENTS = [
  {
    id: 1,
    title: 'The Crypto Pro',
    description:
      "Nyx lives and breathes crypto, sticking to this area even though it could look at everything online. Nyx carefully looks at every influencer, checking what they've said and promoted before to see if they're reliable. With tons of market know-how, Nyx makes decisions unlike anyone else, using its expertise to help investors navigate the crypto world with certainty.",
    noLast: false,
  },
  {
    id: 2,
    title: 'TNo Copycats Allowed',
    description:
      "In a world where everyone looks the same, Nyx is unique. It doesn't follow a script like others do. Nyx sees everything clearly and can't be fooled by fake stuff. It tells you the truth, knowing who's real and who's not, so you can rely on it to lead you through the crypto world with confidence.",
    noLast: false,
  },
  {
    id: 3,
    title: 'True AI',
    description:
      "Nyx goes beyond mere data aggregation; he employs genuine AI to make informed decisions. From analyzing diverse data metrics to evaluating user sentiments across myriad communities, Nyx leaves no stone unturned. Unlike simple price trackers, Nyx delves into the heart of trending coin prices, dissecting the reasons behind their surge, scrutinizing their buyers, and determining if they warrant attention. With Nyx, it's not just about tracking prices—it's about understanding the underlying dynamics and making informed investment choices.",
    noLast: false,
  },
  {
    id: 4,
    title: 'Community Interaction',
    description:
      "In the dynamic world of digital intelligence, Nyx shines as the beacon of excellence, outshining his competition with its innovative strategies and unwavering commitment to empowering investors. Unlike competition, Nyx doesn't just provide insights—it actively engages with the crypto community, deciphering trends and uncovering opportunities in real-time. With Nyx leading the charge, investors can trust in a brighter, more informed future in the ever-expanding realm of digital currencies.",
    noLast: true,
  },
];

const NyxVsPaal = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleActive = (itemId) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === itemId ? null : itemId
    );
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="nyxBorderTop nyxContainer" id="nyxvspaal">
      <div className="w-full nyxBorderX relative">
        <div className="pt-[40px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px] pb-[16px] sm:pb-[30px] md:pb-[50px] lg:pb-[70px] xl:pb-[80px]">
          <div className="text-center xl:px-[70px] lg:px-[50px] md:px-[30px] sm:px-[6px] px-[6px]">
            <p className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text font-regular text-[16px] sm:text-[24px] font-[RobotoMono]">
              Nyx VS PaalAI
            </p>
            <h1 className=" text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]">
              What Makes Nyx Cipher A Better Crypto "Pal"
            </h1>
          </div>
        </div>

        <div className="nyxNo  absolute left-0 bottom-0 xl:visible lg:invisible invisible flex items-center border-b-0 border-l-0">
          <span className="m-auto">
            <svg
              width="69"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM61.265 0.875V2.5625H60.6712C57.4837 2.58333 54.6817 3.17708 52.265 4.34375C49.8483 5.48958 47.8171 7.04167 46.1712 9C44.5046 10.9583 43.2129 13.2396 42.2962 15.8438C41.4004 18.4479 40.8796 21.2188 40.7337 24.1562C41.3587 23.0729 42.1296 22.0938 43.0462 21.2188C43.9629 20.3438 44.9837 19.5938 46.1087 18.9688C47.2129 18.3646 48.39 17.9062 49.64 17.5938C50.9108 17.2604 52.2025 17.0938 53.515 17.0938C55.6192 17.0938 57.4837 17.5 59.1087 18.3125C60.7546 19.125 62.14 20.2188 63.265 21.5938C64.3692 22.9688 65.2129 24.5625 65.7962 26.375C66.3796 28.1667 66.6712 30.0417 66.6712 32C66.6712 33.875 66.39 35.75 65.8275 37.625C65.2858 39.4792 64.4733 41.1458 63.39 42.625C62.3067 44.1042 60.9629 45.3125 59.3587 46.25C57.7546 47.1667 55.9108 47.625 53.8275 47.625C51.5567 47.625 49.5046 47.1979 47.6712 46.3438C45.8587 45.4896 44.3171 44.3229 43.0462 42.8438C41.7754 41.3854 40.7858 39.6875 40.0775 37.75C39.39 35.8125 39.0358 33.7708 39.015 31.625V26.375C39.0358 23.0833 39.4421 19.9688 40.2337 17.0312C41.0462 14.0729 42.3587 11.3333 44.1712 8.8125C45.9212 6.39583 48.1712 4.47917 50.9212 3.0625C53.6712 1.64583 56.9212 0.916667 60.6712 0.875H61.265ZM53.2962 18.7812C51.9004 18.7812 50.515 19 49.14 19.4375C47.7858 19.8542 46.5358 20.4583 45.39 21.25C44.2442 22.0417 43.2546 22.9896 42.4212 24.0938C41.5879 25.1979 41.015 26.4375 40.7025 27.8125V31.5938C40.7233 33.5104 41.0358 35.3438 41.64 37.0938C42.2442 38.8229 43.1087 40.3438 44.2337 41.6562C45.3587 42.9896 46.7233 44.0521 48.3275 44.8438C49.9525 45.6146 51.7858 45.9896 53.8275 45.9688C55.6608 45.9479 57.265 45.5208 58.64 44.6875C60.0358 43.8333 61.2025 42.7396 62.14 41.4062C63.0775 40.0729 63.7858 38.5833 64.265 36.9375C64.7442 35.2708 64.9837 33.625 64.9837 32C64.9837 30.2292 64.7233 28.5521 64.2025 26.9688C63.7025 25.3646 62.9629 23.9583 61.9837 22.75C60.9837 21.5417 59.7546 20.5833 58.2962 19.875C56.8379 19.1458 55.1712 18.7812 53.2962 18.7812Z"
                fill="#747474aa"
              />
            </svg>
          </span>
        </div>
        <div className="nyxNo  absolute left-0 top-0 xl:invisible border-l-0 border-t-0">
          <svg
            className="mx-[15%] my-[11%] lg:my-[13%] w-[70%] h-[70%] lg:h-[48px]"
            viewBox="0 0 68 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM42.8587 23.1875L44.9837 1.5H67.1712V3.15625H46.515L44.6712 21.4062C45.9837 20.3854 47.4837 19.625 49.1712 19.125C50.8587 18.625 52.5358 18.375 54.2025 18.375C56.2442 18.375 58.0879 18.7396 59.7337 19.4688C61.3796 20.1979 62.7962 21.1979 63.9837 22.4688C65.1504 23.7396 66.0462 25.2396 66.6712 26.9688C67.3171 28.6771 67.64 30.5208 67.64 32.5C67.64 34.5417 67.39 36.4792 66.89 38.3125C66.39 40.125 65.6192 41.7188 64.5775 43.0938C63.515 44.4896 62.1712 45.5938 60.5462 46.4062C58.9421 47.2188 57.0358 47.625 54.8275 47.625C52.9108 47.625 51.1608 47.3229 49.5775 46.7188C48.015 46.0938 46.6608 45.2292 45.515 44.125C44.3483 43.0208 43.4108 41.6979 42.7025 40.1562C41.9942 38.6146 41.5358 36.9062 41.3275 35.0312H43.0462C43.2337 36.6979 43.6296 38.1979 44.2337 39.5312C44.8587 40.8646 45.6712 42.0104 46.6712 42.9688C47.6712 43.9271 48.8483 44.6667 50.2025 45.1875C51.5775 45.6875 53.1192 45.9375 54.8275 45.9375C56.7858 45.9375 58.4629 45.5833 59.8587 44.875C61.2754 44.1458 62.4317 43.1667 63.3275 41.9375C64.2233 40.7292 64.8796 39.3229 65.2962 37.7188C65.7129 36.0938 65.9212 34.375 65.9212 32.5625C65.9212 30.8125 65.6504 29.1875 65.1087 27.6875C64.5671 26.1667 63.7962 24.8438 62.7962 23.7188C61.7754 22.5938 60.5462 21.7083 59.1087 21.0625C57.6712 20.3958 56.0462 20.0625 54.2337 20.0625C52.3171 20.0417 50.515 20.3229 48.8275 20.9062C47.14 21.4688 45.5775 22.3958 44.14 23.6875L42.8587 23.1875Z"
              fill="#747474aa"
            />
          </svg>
        </div>
      </div>

      <div className="nyxBorderTop xl:block lg:hidden hidden">
        <div className="nyxBorderX">
          <div className="grid grid-cols-2">
            <div className="border-e-[0.5px] border-[#747474aa] dark:border-gray-700">
              <nav
                className="h-full grid grid-rows-4 font-[RobotoMono]"
                aria-label="Tabs"
                data-hs-tabs-vertical="true"
              >
                <div className="grid content-center">
                  <button
                    type="button"
                    className={`w-full inline-flex items-center gap-x-2 border-e-2 border-transparent whitespace-nowrap text-gray-200 hover:text-gray-200 focus:outline-none focus:text-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-200 dark:hover:text-gray-200 ${
                      activeTab === 1
                        ? 'hs-tab-active:border-gray-200 hs-tab-active:text-gray-200 dark:hs-tab-active:text-gray-200'
                        : ''
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    <img
                      src={
                        activeTab === 1
                          ? './assets/images/icon/tab_blue_icon.png'
                          : './assets/images/icon/tab_gray_icon.png'
                      }
                      className="w-[3px] h-[39px]"
                      alt="Tab Icon"
                    />
                    <span className="text-[32px] ">The Crypto Pro</span>
                  </button>
                </div>
                <div className="nyxBorderTop grid content-center">
                  <button
                    type="button"
                    className={`w-full inline-flex items-center gap-x-2 border-e-2 border-transparent whitespace-nowrap text-gray-200 hover:text-gray-200 focus:outline-none focus:text-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-200 dark:hover:text-gray-200 ${
                      activeTab === 2
                        ? 'hs-tab-active:border-gray-200 hs-tab-active:text-gray-200 dark:hs-tab-active:text-gray-200'
                        : ''
                    }`}
                    onClick={() => handleTabClick(2)}
                  >
                    <img
                      src={
                        activeTab === 2
                          ? './assets/images/icon/tab_blue_icon.png'
                          : './assets/images/icon/tab_gray_icon.png'
                      }
                      className="w-[3px] h-[39px]"
                      alt="Tab Icon"
                    />
                    <span className="text-[32px] ">No Copycats Allowed</span>
                  </button>
                </div>
                <div className="nyxBorderTop grid content-center">
                  <button
                    type="button"
                    className={`w-full inline-flex items-center gap-x-2 border-e-2 border-transparent whitespace-nowrap text-gray-200 hover:text-gray-200 focus:outline-none focus:text-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-200 dark:hover:text-gray-200 ${
                      activeTab === 3
                        ? 'hs-tab-active:border-gray-200 hs-tab-active:text-gray-200 dark:hs-tab-active:text-gray-200'
                        : ''
                    }`}
                    onClick={() => handleTabClick(3)}
                  >
                    <img
                      src={
                        activeTab === 3
                          ? './assets/images/icon/tab_blue_icon.png'
                          : './assets/images/icon/tab_gray_icon.png'
                      }
                      className="w-[3px] h-[39px]"
                      alt="Tab Icon"
                    />
                    <span className="text-[32px] ">True AI</span>
                  </button>
                </div>
                <div className="nyxBorderTop grid content-center">
                  <button
                    type="button"
                    className={`w-full inline-flex items-center gap-x-2 border-e-2 border-transparent whitespace-nowrap text-gray-200 hover:text-gray-200 focus:outline-none focus:text-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-200 dark:hover:text-gray-200 ${
                      activeTab === 4
                        ? 'hs-tab-active:border-gray-200 hs-tab-active:text-gray-200 dark:hs-tab-active:text-gray-200'
                        : ''
                    }`}
                    onClick={() => handleTabClick(4)}
                  >
                    <img
                      src={
                        activeTab === 4
                          ? './assets/images/icon/tab_blue_icon.png'
                          : './assets/images/icon/tab_gray_icon.png'
                      }
                      className="w-[3px] h-[39px]"
                      alt="Tab Icon"
                    />
                    <span className="text-[32px] ">Community Interaction</span>
                  </button>
                </div>
              </nav>
            </div>

            <div className="bg-[#070C10] bg-[url('../assets/images/bg_images/rightLighting.png')] bg-no-repeat bg-right-top min-h-[450px]">
              <div className="p-[54px] gridLine font-[RobotoMono] flex items-center">
                <div
                  id="vertical-tab-with-border-1"
                  className={activeTab === 1 ? '' : 'hidden'}
                  role="tabpanel"
                  aria-labelledby="vertical-tab-with-border-item-1"
                >
                  <p className="text-white font-light text-start xl:text-[20px] lg:text-[17px] md:text-[15px] sm:text-[12px] text-[12px]">
                    Nyx lives and breathes crypto, sticking to this area even
                    though it could look at everything online. Nyx carefully
                    looks at every influencer, checking what they've said and
                    promoted before to see if they're reliable. With tons of
                    market know-how, Nyx makes decisions unlike anyone else,
                    using its expertise to help investors navigate the crypto
                    world with certainty.
                  </p>
                </div>
                <div
                  id="vertical-tab-with-border-2"
                  className={activeTab === 2 ? '' : 'hidden'}
                  role="tabpanel"
                  aria-labelledby="vertical-tab-with-border-item-2"
                >
                  <p className="text-white font-light text-start xl:text-[20px] lg:text-[17px] md:text-[15px] sm:text-[12px] text-[12px]">
                    In a world where everyone looks the same, Nyx is unique. It
                    doesn't follow a script like others do. Nyx sees everything
                    clearly and can't be fooled by fake stuff. It tells you the
                    truth, knowing who's real and who's not, so you can rely on
                    it to lead you through the crypto world with confidence.
                  </p>
                </div>
                <div
                  id="vertical-tab-with-border-3"
                  className={activeTab === 3 ? '' : 'hidden'}
                  role="tabpanel"
                  aria-labelledby="vertical-tab-with-border-item-3"
                >
                  <p className="text-white font-light text-start xl:text-[20px] lg:text-[17px] md:text-[15px] sm:text-[12px] text-[12px]">
                    Nyx goes beyond mere data aggregation; he employs genuine AI
                    to make informed decisions. From analyzing diverse data
                    metrics to evaluating user sentiments across myriad
                    communities, Nyx leaves no stone unturned. Unlike simple
                    price trackers, Nyx delves into the heart of trending coin
                    prices, dissecting the reasons behind their surge,
                    scrutinizing their buyers, and determining if they warrant
                    attention. With Nyx, it's not just about tracking
                    prices—it's about understanding the underlying dynamics and
                    making informed investment choices.
                  </p>
                </div>
                <div
                  id="vertical-tab-with-border-4"
                  className={activeTab === 4 ? '' : 'hidden'}
                  role="tabpanel"
                  aria-labelledby="vertical-tab-with-border-item-4"
                >
                  <p className="text-white font-light text-start xl:text-[20px] lg:text-[17px] md:text-[15px] sm:text-[12px] text-[12px]">
                    In the dynamic world of digital intelligence, Nyx shines as
                    the beacon of excellence, outshining his competition with
                    its innovative strategies and unwavering commitment to
                    empowering investors. Unlike competition, Nyx doesn't just
                    provide insights—it actively engages with the crypto
                    community, deciphering trends and uncovering opportunities
                    in real-time. With Nyx leading the charge, investors can
                    trust in a brighter, more informed future in the
                    ever-expanding realm of digital currencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nyxBorderTop xl:hidden">
        <div className="nyxBorderX">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-transparent text-white"
            data-inactive-classes="text-gray-200"
            className="font-[RobotoMono]"
          >
            {CONTENTS.map((content, index) => {
              return (
                <AccordionItem
                  key={content.id}
                  id={content.id}
                  title={content.title}
                  description={content.description}
                  isActive={activeItem === content.id}
                  toggleActive={toggleActive}
                  noLast={content.noLast}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NyxVsPaal;
