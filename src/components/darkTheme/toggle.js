import React from "react";
import { ThemeContext } from "./themeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <>
      <label className="text-primary absolute -top-2 right-7 overflow-hidden h-24">
        <input
          type="checkbox"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          className="hidden"
        ></input>
        <DarkModeSwitch
          style={{marginBottom:"2rem", maxWidth:"50px"}}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={120}
          sunColor={'white'}
          moonColor={'white'}
        />
      </label>
    </>
  );
};
