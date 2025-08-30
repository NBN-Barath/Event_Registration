import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, Event, Sponsor, User } from '../types';

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_FEEDBACK_ENABLED'; payload: boolean }
  | { type: 'ADD_EVENT'; payload: Event }
  | { type: 'SET_EVENTS'; payload: Event[] }
  | { type: 'SET_SPONSORS'; payload: Sponsor[] };

const initialState: AppState = {
  feedbackEnabled: false,
  events: [],
  sponsors: [],
  user: null,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_FEEDBACK_ENABLED':
      return { ...state, feedbackEnabled: action.payload };
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.payload] };
    case 'SET_EVENTS':
      return { ...state, events: action.payload };
    case 'SET_SPONSORS':
      return { ...state, sponsors: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
