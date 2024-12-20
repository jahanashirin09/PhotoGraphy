
import "./DarkMode.css";

const DarkMode = () => {
  return (
    <>
      <div className="toggle-container">
        <input type="checkbox" id="darkmode-toggle" />
        <label htmlFor="darkmode-toggle">
          <svg
            className="sun"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="#000000"
              strokeLinecap="round"
              strokeWidth="2"
              d="M12 4.5V3m0 18v-1.5m9-7.5h-1.5m-15 0H3m14.303-5.303l1.061-1.061M5.636 18.364l1.06-1.06m11.668 1.06l-1.06-1.06M6.696 6.696L5.636 5.636M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            className="moon"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Environment / Moon">
              <path
                id="Vector"
                d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </label>
        <div className="background"></div>
      </div>
    </>
  );
};

export default DarkMode;
