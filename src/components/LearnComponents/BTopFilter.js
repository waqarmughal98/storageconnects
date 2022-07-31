import React from "react";

const BTopFilter = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-end">
        <div className="flex flex-row items-center">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3 9.82937C16.5124 9.82937 17.6102 9.89826 18.2855 10.0265C18.296 10.0265 18.9139 10.1536 19.1199 10.2356C19.4172 10.3639 19.6688 10.5955 19.8291 10.8853C19.9438 11.1169 20 11.3616 20 11.617C19.9895 11.883 19.8174 12.3831 19.7367 12.5802C19.2346 13.8796 17.5868 16.3633 16.5815 17.3158C16.4211 17.4774 16.2269 17.652 16.1812 17.6983C15.9284 17.8955 15.6206 18 15.2894 18C14.991 18 14.6937 17.9074 14.4538 17.7209C14.3292 17.6318 14.1473 17.4545 14.0641 17.3714L14.0196 17.3265C12.978 16.3526 11.4121 13.926 10.9089 12.6954C10.8982 12.6954 10.6475 12.0816 10.5968 11.7113L10.5882 11.617V11.5706C10.5882 11.0361 10.8855 10.5373 11.3665 10.2819C11.6298 10.1429 12.3952 10.0147 12.4069 10.0028C13.0927 9.89826 14.1449 9.82937 15.3 9.82937ZM4.70553 9.89052C5.18478 9.89052 5.57926 10.2561 5.63317 10.7277L5.63945 10.8383L5.89575 15.4171C5.89575 16.0846 5.36325 16.625 4.70553 16.625C4.08892 16.625 3.58133 16.15 3.52029 15.5406L3.51414 15.4171L3.77161 10.8383C3.77161 10.3145 4.18942 9.89052 4.70553 9.89052ZM4.71173 -3.8147e-06C5.00783 -3.8147e-06 5.30509 0.0926397 5.54618 0.277927C5.65004 0.352903 5.79368 0.488657 5.88681 0.57993L5.98037 0.673443C7.02079 1.64858 8.58785 4.07394 9.09109 5.30443C9.10075 5.30443 9.35232 5.91922 9.4032 6.28974L9.41177 6.38409V6.43041C9.41177 6.9637 9.11333 7.46255 8.6335 7.71791C8.37017 7.85807 7.60478 7.98516 7.59308 7.99703C6.90727 8.10155 5.85514 8.17044 4.70003 8.17044C3.48757 8.17044 2.38981 8.10155 1.71453 7.97328C1.70282 7.97328 1.08606 7.84619 0.880085 7.76424C0.582823 7.63715 0.331202 7.40435 0.170868 7.11454C0.0561757 6.88294 0 6.63826 0 6.38409C0.0105329 6.11684 0.182571 5.61799 0.262153 5.42083C0.765393 4.12026 2.41204 1.6367 3.41852 0.685321C3.57886 0.522601 3.77313 0.348003 3.81877 0.301682C4.07039 0.104517 4.37936 -3.8147e-06 4.71173 -3.8147e-06ZM15.2947 1.375C15.9113 1.375 16.4179 1.84999 16.4788 2.45938L16.4849 2.58295L16.2286 7.16178C16.2286 7.68558 15.8108 8.10961 15.2947 8.10961C14.8155 8.10961 14.421 7.74399 14.3671 7.27238L14.3608 7.16178L14.1033 2.58295C14.1033 1.91543 14.637 1.375 15.2947 1.375Z"
              fill="#000103"
              fillOpacity="0.7"
            />
          </svg>
          <p className="text-secondary px-2">Sort by: </p>

          <select
            id="countries"
            class="text-secondary bg-white rounded-lg p-4 border-none"
          >
            <option default>Newest</option>
            <option value="old">Older</option>
            <option value="pre">Premium</option>
            <option value="od">Out Dated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BTopFilter;
