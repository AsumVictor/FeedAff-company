export const BottomLeftMask = ({
  className,
  primaryColor,
  secondaryColor,
}: {
  className: string;
  primaryColor: string;
  secondaryColor: string;
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        className={className}
      >
        <path
          d="M30.8799 30.75V0.75C30.8799 16.75 16.8799 30.75 0.879883 30.75H30.8799Z"
          fill={secondaryColor}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        className={className}
      >
        <path
          d="M30.8799 30.75V0.75C30.8799 16.75 16.8799 30.75 0.879883 30.75H30.8799Z"
          fill={primaryColor}
        />
      </svg>
    </>
  );
};

export const TopRightMask = ({
  className,
  primaryColor,
  secondaryColor,
}: {
  className: string;
  primaryColor: string;
  secondaryColor: string;
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        className={className}
      >
        <path
          d="M30.5 30.1599V0.159912C30.5 16.1599 16.5 30.1599 0.5 30.1599H30.5Z"
          fill={secondaryColor}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        className={className}
      >
        <path
          d="M30.5 30.1599V0.159912C30.5 16.1599 16.5 30.1599 0.5 30.1599H30.5Z"
          fill={primaryColor}
        />
      </svg>
    </>
  );
};
