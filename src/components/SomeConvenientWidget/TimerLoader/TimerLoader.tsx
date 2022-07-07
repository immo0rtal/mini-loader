import React from "react";

import Loader from "components/Loader";

import useLoaderMessages from "hooks/useLoaderMessages";

const N = 1;

interface TimerLoaderProps {
  isLoaded: boolean;
  handleTimeOver: () => void;
}

const LoadingStatuses = ["First", "Second", "Third"];

enum LoadingStatus {
  First = 0,
  Second,
  Third,
  Fourth,
}

const TimerLoader: React.FC<TimerLoaderProps> = ({
  isLoaded,
  handleTimeOver,
}) => {
  const timer = React.useRef<ReturnType<typeof setTimeout>>();
  const state = React.useRef<LoadingStatus>(LoadingStatus.First);
  const [message, setMessage] = React.useState<string | null>(null);

  const messages = useLoaderMessages();

  const translate = React.useCallback((value: string) => {
    return value;
  }, []);

  React.useEffect(() => {
    if (state.current > LoadingStatus.Third) return;

    timer.current = setTimeout(() => {
      if (state.current < LoadingStatus.Third) {
        state.current += 1;
        setMessage(translate(messages.Loading[LoadingStatuses[state.current]]));
      } else {
        handleTimeOver();
        setMessage(translate(messages.Error.Timeout));
      }
    }, N * 1000);

    return () => clearTimeout(timer.current);
  }, [messages, translate, handleTimeOver]);

  React.useEffect(() => {
    if (isLoaded) {
      state.current = LoadingStatus.Fourth;
      setMessage(translate(messages.Success.LoadingFinished));
    }
  }, [isLoaded, messages, translate]);

  return <Loader message={message || messages.Loading.First} />;
};

export default TimerLoader;
