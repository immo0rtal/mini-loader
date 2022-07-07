import React from "react";

import LoaderContext from "providers/LoaderContext";

import { ContextType } from "providers/LoaderContext";
import { MessagesType } from "components/App/App";

const useLoaderMessages = (): Record<string, MessagesType> => {
  const messages = React.useContext<ContextType>(LoaderContext);

  return Object.keys(messages).reduce((acc, item: string) => {
    const [status, postStatus] = item.split(".");

    if (!acc[status]) {
      acc[status] = {};
    }

    acc[status][postStatus] = messages[item];

    return acc;
  }, {});
};

export default useLoaderMessages;
