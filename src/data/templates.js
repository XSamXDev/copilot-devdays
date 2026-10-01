import TemplateOneDark from "../components/templates/TemplateOneDark";
import TemplateOneLight from "../components/templates/TemplateOneLight";
import XPhotoLight from "../components/templates/XPhotoLight";
import XPhotoDark from "../components/templates/XPhotoDark"; '../components/templates/XPhotoDark'
export const TEMPLATE_LIST = [

  {
    id: "dark-premium",
    name: "Dark Premium",
    Component: TemplateOneDark,
  },
  {
    id: "light-premium",
    name: "Dark Premium",
    Component: TemplateOneLight,
  },
  {
    id: "light-X",
    name: "Light X Image",
    Component: XPhotoLight,
  },
  {
    id: "light-X",
    name: "Dark X Image",
    Component: XPhotoDark,
  },


];

export function getTemplateById(templateId) {
  return TEMPLATE_LIST.find((template) => template.id === templateId) ?? TEMPLATE_LIST[0];
}
