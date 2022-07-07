import React from "react";

import s from "./Loader.module.css";

import loaderGif from "assets/loader.gif";

interface LoaderProps {
  message?: string | null;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className={s.root}>
      <div className={s.image}>
        <img className={s.imageContent} src={loaderGif} alt="loader" />
      </div>
      <div className={s.message}>{message}</div>
    </div>
  );
};

export default React.memo(Loader);
