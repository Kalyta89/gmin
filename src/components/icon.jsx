import React from "react";

export const ChevronRight = ({ size = 22, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        className={className}
        d="M367.954 213.588L160.67 5.872c-7.804-7.819-20.467-7.831-28.284-.029-7.819 7.802-7.832 20.465-.03 28.284l207.299 207.731c7.798 7.798 7.798 20.486-.015 28.299L132.356 477.873c-7.802 7.819-7.789 20.482.03 28.284A19.935 19.935 0 00146.513 512c5.125 0 10.25-1.958 14.157-5.873l207.269-207.701c23.394-23.394 23.394-61.459.015-84.838z"
      ></path>
    </svg>
  );
};

export const ChevronLeft = ({ size = 22, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 407.436 407.436"
      version="1.1"
      viewBox="0 0 407.436 407.436"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        className={className}
        d="M315.869 21.178L294.621 0 91.566 203.718 294.621 407.436 315.869 386.258 133.924 203.718z"
      ></path>
    </svg>
  );
};

export const DownAngle = ({ size = 22, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      height={size}
      width={size}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm-.011 356.571L122.714 223.329h266.582L255.989 356.571z"
      ></path>
    </svg>
  );
};

export const Search = ({ size = 22, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512.005 512.005"
      version="1.1"
      viewBox="0 0 512.005 512.005"
      xmlSpace="preserve"
      height={size}
      width={size}
    >
      <path
        fill={color}
        className={className}
        d="M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"
      ></path>
    </svg>
  );
};

export const DownAngleLine = ({ size = 22, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      x="0"
      y="0"
      enableBackground="new 0 0 612 612"
      version="1.1"
      viewBox="0 0 612 612"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M604.501 134.782c-9.999-10.05-26.222-10.05-36.221 0L306.014 422.558 43.721 134.782c-9.999-10.05-26.223-10.05-36.222 0s-9.999 26.35 0 36.399l279.103 306.241c5.331 5.357 12.422 7.652 19.386 7.296 6.988.356 14.055-1.939 19.386-7.296l279.128-306.268c9.998-10.048 9.998-26.322-.001-36.372z"
      ></path>
    </svg>
  );
};
