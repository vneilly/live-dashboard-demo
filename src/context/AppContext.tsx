import { useReducer } from "react";
import type { ReactNode } from "react";
import type { AppState } from "./types";
import { AppContext, appReducer } from "./AppHelpers";

const initialState: AppState = {
  equipment: [],
  networkNodes: [],
  filters: {
    type: null,
    status: null,
  },
  lastUpdated: Date.now(), // Initialize with the current timestamp
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
