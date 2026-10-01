import {useState } from "react";
import { TemplateContext } from "./TemplateContext.js";
import {defaultTemplateData} from '../data/templateDefaultData.js'
const TemplateContextProvider = ({ children }) => {
  
  const [value, setValue] = useState(null);
  return (
    <TemplateContext.Provider value={{ value, setValue }}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateContextProvider;
