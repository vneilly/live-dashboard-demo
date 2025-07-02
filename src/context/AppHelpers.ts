import { createContext, useContext } from "react";

import type { AppState, AppAction } from "./types";

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_EQUIPMENT":
      return {
        ...state,
        equipment: action.payload,
      };
    case "SET_NODES":
      return {
        ...state,
        networkNodes: action.payload,
      };
    case "SET_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case "UPDATE_TIMESTAMP":
      return {
        ...state,
        lastUpdated: action.payload,
      };
    default:
      return state;
  }
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
