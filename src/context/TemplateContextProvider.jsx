import { useState } from "react";
import { TemplateContext } from "./TemplateContext.js";

const TemplateContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  return (
    <TemplateContext.Provider value={{ value, setValue }}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateContextProvider;
