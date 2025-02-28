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
    <div
      className={`${
        id != 4
          ? 'border-b-[0.5px] border-[#747474aa]'
          : 'border-b-0 md:border-b-[0.5px] border-[#747474aa]'
      }`}
    >
      <h2
        id={`accordion-flush-heading-${id}`}
        className="font-[RobotoMono] ps-[8px] md:ps-0 pr-[14px] md:pr-0 py-[14px]"
      >
        <button
          type="button"
          className={
            noLast
              ? 'flex justify-between items-center w-full text-white font-[RobotoMono] text-[16px] md:text-[18px]'
              : 'flex justify-between items-center w-full text-white font-[RobotoMono] text-[16px] md:text-[18px] '
          }
          data-accordion-target={`#accordion-flush-body-${id}`}
          aria-expanded={isActive}
          aria-controls={`accordion-flush-body-${id}`}
          onClick={() => toggleActive(id)}
        >
          <span className="ml-[3px] text-left">{title}</span>
          <img
            id={`accordion-icon-${id}`}
            src="./assets/images/icon/plus.png"
            className={
              isActive
                ? 'h-[25px] w-[25px] duration-500 -rotate-[135deg]'
                : 'h-[25px] w-[25px] duration-500 group-focus:-rotate-[135deg]'
            }
          />
        </button>
      </h2>
      <div
        id={`accordion-flush-body-${id}`}
        className={isActive ? 'bg-top font-[RobotoMono]' : 'hidden'}
        aria-labelledby={`accordion-flush-heading-${id}`}
      >
        <div className="items-center transition-all duration-1000">
          <p className="px-[15px] md:px-[7px] text-gray-400 md:text-[16px] sm:text-[14px] text-[14px] py-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

const CONTENTS = [
  {
    id: 1,
    title: 'How does the NYX Cipher work?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex eacommodo consequat.',
    noLast: false,
  },
  {
    id: 2,
    title: 'What are the benefits of joining the NYX Cipher?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex eacommodo consequat.',
    noLast: false,
  },
  {
    id: 3,
    title:
      'Who is eligible to become a NYX Cipher User? How will I know if I’ve bee accepted?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex eacommodo consequat.',
    noLast: false,
  },
  {
    id: 4,
    title: 'Does it cots anything to be a NYX Cipher client?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex eacommodo consequat.',
    noLast: true,
  },
];

const Faqs = () => {
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
    <div className="nyxBorderTop nyxContainer" id="faqs">
      <div className="relative nyxBorderX pt-[42px] md:pt-0">
        <div className="md:px-[70px] md:pb-[100px] md:pt-[85px] xl:px-[155px] xl:pb-[200px] xl:pt-[185px]">
          <h1 className="font-[VioletSans] nyxTitle text-white md:mb-[16px] ml-[6px]">
            FAQ
            <font className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
              s
            </font>
          </h1>

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

        {/* <div className="nyxNo  absolute left-0 bottom-0 xl:visible lg:invisible invisible flex items-center border-b-0 border-l-0">
          <span className="m-auto">
            <svg
              width="69"
              height="48"
              viewBox="0 0 69 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM67.265 13.0625C67.265 14.4167 67.0358 15.6667 66.5775 16.8125C66.1192 17.9583 65.5046 18.9792 64.7337 19.875C63.9421 20.7708 63.015 21.5417 61.9525 22.1875C60.9108 22.8333 59.7962 23.3438 58.6087 23.7188C59.9421 24.0729 61.2129 24.5938 62.4212 25.2812C63.6296 25.9479 64.6921 26.7604 65.6087 27.7188C66.5046 28.6771 67.2233 29.7812 67.765 31.0312C68.3067 32.2812 68.5775 33.6562 68.5775 35.1562C68.5775 37.1979 68.1817 39 67.39 40.5625C66.5983 42.1042 65.5358 43.3958 64.2025 44.4375C62.8483 45.5 61.2962 46.3021 59.5462 46.8438C57.7962 47.3646 55.9837 47.625 54.1087 47.625C52.2129 47.625 50.39 47.3646 48.64 46.8438C46.89 46.3021 45.3483 45.5104 44.015 44.4688C42.6608 43.4271 41.5879 42.1354 40.7962 40.5938C40.0046 39.0312 39.6087 37.2188 39.6087 35.1562C39.6087 33.6562 39.8692 32.2812 40.39 31.0312C40.9108 29.7812 41.6192 28.6771 42.515 27.7188C43.4108 26.7604 44.4525 25.9479 45.64 25.2812C46.8275 24.5938 48.0879 24.0729 49.4212 23.7188C48.2337 23.3438 47.1192 22.8438 46.0775 22.2188C45.0567 21.5729 44.1608 20.7917 43.39 19.875C42.6192 18.9792 42.0046 17.9688 41.5462 16.8438C41.1087 15.6979 40.89 14.4375 40.89 13.0625C40.89 11.1875 41.2233 9.5 41.89 8C42.5775 6.47917 43.515 5.1875 44.7025 4.125C45.89 3.08333 47.2754 2.28125 48.8587 1.71875C50.4629 1.15625 52.1712 0.875 53.9837 0.875C55.7754 0.875 57.4733 1.15625 59.0775 1.71875C60.7025 2.28125 62.1192 3.08333 63.3275 4.125C64.5358 5.1875 65.4942 6.47917 66.2025 8C66.9108 9.5 67.265 11.1875 67.265 13.0625ZM66.8587 35.3125C66.8587 33.5833 66.4837 32.0521 65.7337 30.7188C65.0046 29.3854 64.0358 28.2604 62.8275 27.3438C61.6192 26.4271 60.2442 25.7396 58.7025 25.2812C57.1817 24.8021 55.6296 24.5625 54.0462 24.5625C52.4629 24.5625 50.9108 24.8021 49.39 25.2812C47.8692 25.7396 46.515 26.4167 45.3275 27.3125C44.1192 28.2292 43.14 29.3646 42.39 30.7188C41.6608 32.0521 41.2962 33.5833 41.2962 35.3125C41.2962 37.0833 41.6608 38.6354 42.39 39.9688C43.1192 41.3021 44.0879 42.4062 45.2962 43.2812C46.5046 44.1771 47.8692 44.8438 49.39 45.2812C50.9317 45.7188 52.5046 45.9375 54.1087 45.9375C55.7129 45.9375 57.2754 45.7188 58.7962 45.2812C60.3379 44.8229 61.7025 44.1458 62.89 43.25C64.0775 42.375 65.0358 41.2708 65.765 39.9375C66.4942 38.6042 66.8587 37.0625 66.8587 35.3125ZM65.5775 12.9062C65.5775 11.3438 65.2442 9.92708 64.5775 8.65625C63.9317 7.36458 63.0775 6.27083 62.015 5.375C60.9317 4.47917 59.6921 3.79167 58.2962 3.3125C56.9004 2.8125 55.4629 2.5625 53.9837 2.5625C52.4629 2.5625 51.015 2.80208 49.64 3.28125C48.265 3.76042 47.0567 4.4375 46.015 5.3125C44.9525 6.20833 44.1087 7.30208 43.4837 8.59375C42.8796 9.86458 42.5775 11.3021 42.5775 12.9062C42.5775 14.5104 42.9004 15.9271 43.5462 17.1562C44.1921 18.3854 45.0462 19.4271 46.1087 20.2812C47.1712 21.1354 48.39 21.7812 49.765 22.2188C51.14 22.6562 52.5671 22.875 54.0462 22.875C55.5046 22.875 56.9212 22.6562 58.2962 22.2188C59.6921 21.7604 60.9317 21.1042 62.015 20.25C63.0775 19.3958 63.9317 18.3542 64.5775 17.125C65.2442 15.8958 65.5775 14.4896 65.5775 12.9062Z"
                fill="#747474aa"
              />
            </svg>
          </span>
        </div> */}
        <div className="nyxNo  absolute right-0 top-0 xl:invisible border-t-0 border-e-0">
          <svg
            className="mx-[15%] my-[11%] lg:my-[13%] w-[70%] h-[70%] lg:h-[48px]"
            viewBox="0 0 69 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM67.265 13.0625C67.265 14.4167 67.0358 15.6667 66.5775 16.8125C66.1192 17.9583 65.5046 18.9792 64.7337 19.875C63.9421 20.7708 63.015 21.5417 61.9525 22.1875C60.9108 22.8333 59.7962 23.3438 58.6087 23.7188C59.9421 24.0729 61.2129 24.5938 62.4212 25.2812C63.6296 25.9479 64.6921 26.7604 65.6087 27.7188C66.5046 28.6771 67.2233 29.7812 67.765 31.0312C68.3067 32.2812 68.5775 33.6562 68.5775 35.1562C68.5775 37.1979 68.1817 39 67.39 40.5625C66.5983 42.1042 65.5358 43.3958 64.2025 44.4375C62.8483 45.5 61.2962 46.3021 59.5462 46.8438C57.7962 47.3646 55.9837 47.625 54.1087 47.625C52.2129 47.625 50.39 47.3646 48.64 46.8438C46.89 46.3021 45.3483 45.5104 44.015 44.4688C42.6608 43.4271 41.5879 42.1354 40.7962 40.5938C40.0046 39.0312 39.6087 37.2188 39.6087 35.1562C39.6087 33.6562 39.8692 32.2812 40.39 31.0312C40.9108 29.7812 41.6192 28.6771 42.515 27.7188C43.4108 26.7604 44.4525 25.9479 45.64 25.2812C46.8275 24.5938 48.0879 24.0729 49.4212 23.7188C48.2337 23.3438 47.1192 22.8438 46.0775 22.2188C45.0567 21.5729 44.1608 20.7917 43.39 19.875C42.6192 18.9792 42.0046 17.9688 41.5462 16.8438C41.1087 15.6979 40.89 14.4375 40.89 13.0625C40.89 11.1875 41.2233 9.5 41.89 8C42.5775 6.47917 43.515 5.1875 44.7025 4.125C45.89 3.08333 47.2754 2.28125 48.8587 1.71875C50.4629 1.15625 52.1712 0.875 53.9837 0.875C55.7754 0.875 57.4733 1.15625 59.0775 1.71875C60.7025 2.28125 62.1192 3.08333 63.3275 4.125C64.5358 5.1875 65.4942 6.47917 66.2025 8C66.9108 9.5 67.265 11.1875 67.265 13.0625ZM66.8587 35.3125C66.8587 33.5833 66.4837 32.0521 65.7337 30.7188C65.0046 29.3854 64.0358 28.2604 62.8275 27.3438C61.6192 26.4271 60.2442 25.7396 58.7025 25.2812C57.1817 24.8021 55.6296 24.5625 54.0462 24.5625C52.4629 24.5625 50.9108 24.8021 49.39 25.2812C47.8692 25.7396 46.515 26.4167 45.3275 27.3125C44.1192 28.2292 43.14 29.3646 42.39 30.7188C41.6608 32.0521 41.2962 33.5833 41.2962 35.3125C41.2962 37.0833 41.6608 38.6354 42.39 39.9688C43.1192 41.3021 44.0879 42.4062 45.2962 43.2812C46.5046 44.1771 47.8692 44.8438 49.39 45.2812C50.9317 45.7188 52.5046 45.9375 54.1087 45.9375C55.7129 45.9375 57.2754 45.7188 58.7962 45.2812C60.3379 44.8229 61.7025 44.1458 62.89 43.25C64.0775 42.375 65.0358 41.2708 65.765 39.9375C66.4942 38.6042 66.8587 37.0625 66.8587 35.3125ZM65.5775 12.9062C65.5775 11.3438 65.2442 9.92708 64.5775 8.65625C63.9317 7.36458 63.0775 6.27083 62.015 5.375C60.9317 4.47917 59.6921 3.79167 58.2962 3.3125C56.9004 2.8125 55.4629 2.5625 53.9837 2.5625C52.4629 2.5625 51.015 2.80208 49.64 3.28125C48.265 3.76042 47.0567 4.4375 46.015 5.3125C44.9525 6.20833 44.1087 7.30208 43.4837 8.59375C42.8796 9.86458 42.5775 11.3021 42.5775 12.9062C42.5775 14.5104 42.9004 15.9271 43.5462 17.1562C44.1921 18.3854 45.0462 19.4271 46.1087 20.2812C47.1712 21.1354 48.39 21.7812 49.765 22.2188C51.14 22.6562 52.5671 22.875 54.0462 22.875C55.5046 22.875 56.9212 22.6562 58.2962 22.2188C59.6921 21.7604 60.9317 21.1042 62.015 20.25C63.0775 19.3958 63.9317 18.3542 64.5775 17.125C65.2442 15.8958 65.5775 14.4896 65.5775 12.9062Z"
              fill="#747474aa"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
