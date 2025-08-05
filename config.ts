export interface TemplateConfig {
  businessName: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
  modules: string[];
  darkMode?: boolean;
  aiContent?: any;
}

export const defaultConfig: TemplateConfig = {
  businessName: "joe",
  primaryColor: "#6366f1",
  accentColor: "#6366f1",
  fontFamily: "Inter, sans-serif",
  modules: ["hero","about","footer","booking","gallery","blog","staff-management","services"],
  aiContent: undefined
}; 