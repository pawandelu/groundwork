import React from "react";

const Icon = ({ icon, className, pathName }) => {
  const icons = {
    search: (
      <svg
        className={className}
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="41" height="41" rx="6" fill="white" fill-opacity="0.2" />
        <path
          className={pathName}
          d="M19.458 29.6143C13.8538 29.6143 9.30176 25.0622 9.30176 19.458C9.30176 13.8538 13.8538 9.30176 19.458 9.30176C19.8851 9.30176 20.2393 9.65592 20.2393 10.083C20.2393 10.5101 19.8851 10.8643 19.458 10.8643C14.7184 10.8643 10.8643 14.7184 10.8643 19.458C10.8643 24.1976 14.7184 28.0518 19.458 28.0518C24.1976 28.0518 28.0518 24.1976 28.0518 19.458C28.0518 19.0309 28.4059 18.6768 28.833 18.6768C29.2601 18.6768 29.6143 19.0309 29.6143 19.458C29.6143 25.0622 25.0622 29.6143 19.458 29.6143Z"
          fill="white"
        />
        <path
          d="M28.833 13.9893H22.583C22.1559 13.9893 21.8018 13.6351 21.8018 13.208C21.8018 12.7809 22.1559 12.4268 22.583 12.4268H28.833C29.2601 12.4268 29.6143 12.7809 29.6143 13.208C29.6143 13.6351 29.2601 13.9893 28.833 13.9893Z"
          fill="white"
        />
        <path
          d="M25.708 17.1143H22.583C22.1559 17.1143 21.8018 16.7601 21.8018 16.333C21.8018 15.9059 22.1559 15.5518 22.583 15.5518H25.708C26.1351 15.5518 26.4893 15.9059 26.4893 16.333C26.4893 16.7601 26.1351 17.1143 25.708 17.1143Z"
          fill="white"
        />
        <path
          d="M29.0005 31.7396C28.9171 31.7396 28.8338 31.7292 28.7609 31.7188C28.2713 31.6563 27.3859 31.3229 26.8859 29.8333C26.6255 29.0521 26.7192 28.2708 27.1463 27.6771C27.5734 27.0833 28.2921 26.75 29.115 26.75C30.1775 26.75 31.0109 27.1562 31.3859 27.875C31.7609 28.5938 31.6567 29.5104 31.063 30.3958C30.3234 31.5104 29.5213 31.7396 29.0005 31.7396ZM28.3755 29.3438C28.5525 29.8854 28.8025 30.1563 28.9692 30.1771C29.1359 30.1979 29.4484 30 29.7713 29.5313C30.0734 29.0833 30.0942 28.7604 30.0213 28.6146C29.9484 28.4688 29.6567 28.3125 29.115 28.3125C28.7921 28.3125 28.5525 28.4167 28.4171 28.5938C28.2921 28.7708 28.2713 29.0417 28.3755 29.3438Z"
          fill="white"
        />
      </svg>
    ),
    brightarrow: (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={pathName}
          d="M3.2002 5.0001L12.8002 14.6001"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.8002 9.0001V14.6001H7.2002"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    toparrow: (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={pathName}
          d="M3.2002 14.6L12.8002 5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.8002 10.6V5H7.2002"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };
  return icons[icon];
};

export default Icon;
