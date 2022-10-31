import { createContext } from "react";

interface ContextProps {
    pathname: string;
    sidemenuOpen: boolean;
    modeTheme: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    handleModeTheme: () => void;
}

export const UiContext = createContext({} as ContextProps)