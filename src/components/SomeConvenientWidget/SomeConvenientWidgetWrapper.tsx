import React from "react";

import TimerLoader from "./TimerLoader";
import SomeConvenientWidget from "./SomeConvenientWidget";

const SomeConvenientWidgetWrapper = () => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [isTimeover, setIsTimeover] = React.useState<boolean>(false);

  const handleWidgetLoad = React.useCallback(() => {
    if (!isTimeover) {
      setIsLoaded(true);
    }
  }, [isTimeover]);

  const handleTimeOver = () => {
    setIsTimeover(true);
  };

  return (
    <>
      <SomeConvenientWidget onLoad={handleWidgetLoad} />
      <TimerLoader isLoaded={isLoaded} handleTimeOver={handleTimeOver} />
    </>
  );
};

export default SomeConvenientWidgetWrapper;
