import { useEffect, useState } from 'react';

function nyxConverter() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/currency/convert?from=USD&to=USD&amount=1'
        );
        const data = await response.json();
        if (response.ok && data.allRates) {
          setCurrencies(Object.keys(data.allRates));
        }
        console.log(data);
        console.log('should be hree');
      } catch (err) {
        console.error('Error fetching currency list:', err);
      }
    };
    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    if (!amount) {
      setError('Please enter an amount');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/currency/convert?from=${from}&to=${to}&amount=${amount}`
      );
      const data = await response.json();
      if (response.ok) {
        setResult(data.convertedAmount);
        setError(null);
      } else {
        setError(data.error || 'Conversion failed. Please try again.');
      }
    } catch (err) {
      setError('Conversion failed. Please try again.');
    }
  };

  return (
    <div className="nyxToolkit nyxBorderTop nyxContainer" id="usecases">
      <div className="nyxBorderX">
        <div className="relative ">
          <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] xl:py-[100px] lg:py-[80px] md:py-[60px] sm:py-[40px] py-[40px] text-center">
            <h1 className=" text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]">
              Nyx's Currency Converter:{' '}
              <font className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
                A right value in a right place
              </font>
            </h1>
          </div>
          <div className="nyxNo  absolute right-0 top-[0px] xl:visible lg:invisible invisible border-r-0 border-t-0 flex ">
            <span className="m-auto">
              <svg
                className="m-auto"
                width="69"
                height="48"
                viewBox="0 0 68 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM42.8587 23.1875L44.9837 1.5H67.1712V3.15625H46.515L44.6712 21.4062C45.9837 20.3854 47.4837 19.625 49.1712 19.125C50.8587 18.625 52.5358 18.375 54.2025 18.375C56.2442 18.375 58.0879 18.7396 59.7337 19.4688C61.3796 20.1979 62.7962 21.1979 63.9837 22.4688C65.1504 23.7396 66.0462 25.2396 66.6712 26.9688C67.3171 28.6771 67.64 30.5208 67.64 32.5C67.64 34.5417 67.39 36.4792 66.89 38.3125C66.39 40.125 65.6192 41.7188 64.5775 43.0938C63.515 44.4896 62.1712 45.5938 60.5462 46.4062C58.9421 47.2188 57.0358 47.625 54.8275 47.625C52.9108 47.625 51.1608 47.3229 49.5775 46.7188C48.015 46.0938 46.6608 45.2292 45.515 44.125C44.3483 43.0208 43.4108 41.6979 42.7025 40.1562C41.9942 38.6146 41.5358 36.9062 41.3275 35.0312H43.0462C43.2337 36.6979 43.6296 38.1979 44.2337 39.5312C44.8587 40.8646 45.6712 42.0104 46.6712 42.9688C47.6712 43.9271 48.8483 44.6667 50.2025 45.1875C51.5775 45.6875 53.1192 45.9375 54.8275 45.9375C56.7858 45.9375 58.4629 45.5833 59.8587 44.875C61.2754 44.1458 62.4317 43.1667 63.3275 41.9375C64.2233 40.7292 64.8796 39.3229 65.2962 37.7188C65.7129 36.0938 65.9212 34.375 65.9212 32.5625C65.9212 30.8125 65.6504 29.1875 65.1087 27.6875C64.5671 26.1667 63.7962 24.8438 62.7962 23.7188C61.7754 22.5938 60.5462 21.7083 59.1087 21.0625C57.6712 20.3958 56.0462 20.0625 54.2337 20.0625C52.3171 20.0417 50.515 20.3229 48.8275 20.9062C47.14 21.4688 45.5775 22.3958 44.14 23.6875L42.8587 23.1875Z"
                  fill="#747474aa"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="nyxBorderTop bg-[#070C10] bg-no-repeat lg:bg-[url('../assets/images/bg_images/leftLighting.png')] lg:bg-[200px_top] lg:bg-[length:500px_300px] md:bg-right-top md:bg-[url('../assets/images/bg_images/responsive/leftLighting.png')] md:bg-[length:400px_300px] bg-[length:400px_300px] bg-right-top bg-[url('../assets/images/bg_images/responsive/leftLighting.png')]">
          <div className="gridLine md:min-h-[280px] min-h-[115px] flex justify-center items-center">
            <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px]">
              <div className="text-white md:text-center sm:text-left md:text-[18px] sm:text-[12px] text-[12px] font-[RobotoMono]">
                <div className="py-16">
                  <div className="p-5 border border-gray-300 rounded-md">
                    <h3>Choose a currency and input an amount</h3>
                    <div className="text-black">
                      <select
                        className="m-5 p-2 rounded-md"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                      >
                        {currencies.map((currency) => (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                      <span className="text-white"> to </span>
                      <select
                        className="m-5 p-2 rounded-md"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                      >
                        {currencies.map((currency) => (
                          <option
                            className="text-black"
                            key={currency}
                            value={currency}
                          >
                            {currency}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <input
                        className="text-black block m-2 p-2 rounded-md"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                      />
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                      <button className="" onClick={handleConvert}>
                        Convert
                      </button>
                      <h4 className={result ? 'visible' : 'invisible'}>
                        Converted Amount: {result || '...'}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default nyxConverter;
