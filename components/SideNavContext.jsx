import { createContext, useState } from "react";

const SideNavContext = createContext();

export const SideNavProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [autopilot, setAutopilot] = useState(false);
  const [priceChoice, setPriceChoice] = useState(1)
  const [wheel, setWheel] = useState(1)
  const [carColor, setCarColor] = useState(1);
  const [outlineColor, setColor] = useState(1);
  const [motor, setMotor] = useState(1) 

  return (
    <SideNavContext.Provider
      value={{
        active,
        setActive,
        outlineColor,
        setColor,
        autopilot,
        setAutopilot,
        carColor,
        setCarColor,
        wheel,
        setWheel,
        priceChoice,
        setPriceChoice,
        motor,
        setMotor
      }}
    >
      {children}
    </SideNavContext.Provider>
  );
};

export default SideNavContext;
