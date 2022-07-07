import React from "react";
import { MessagesType } from "components/App/App";

export type ContextType = MessagesType | null;

export default React.createContext<ContextType>(null);
