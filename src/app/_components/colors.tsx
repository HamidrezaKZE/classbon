import { FC } from "react";

export const ColorsDemo: FC = () => {
const colors: Record<string, string> = {
    // White & Utility
    white: "bg-white",
    current: "bg-current",
    transparent: "bg-transparent",
    
    // Primary family
    primary: "bg-primary",
    "primary-focus": "bg-primary-focus",
    "primary-content": "bg-primary-content",
    
    // Secondary family
    secondary: "bg-secondary",
    "secondary-focus": "bg-secondary-focus",
    "secondary-content": "bg-secondary-content",
    
    // Accent family
    accent: "bg-accent",
    "accent-focus": "bg-accent-focus",
    "accent-content": "bg-accent-content",
    
    // Neutral family
    neutral: "bg-neutral",
    "neutral-focus": "bg-neutral-focus",
    "neutral-content": "bg-neutral-content",
    
    // Info family
    info: "bg-info",
    "info-content": "bg-info-content",
    
    // Success family
    success: "bg-success",
    "success-content": "bg-success-content",
    
    // Warning family
    warning: "bg-warning",
    "warning-content": "bg-warning-content",
    
    // Error family
    error: "bg-error",
    "error-content": "bg-error-content",
    
    // Gradient colors
    "gradient-first": "bg-gradient-first",
    "gradient-second": "bg-gradient-second",
};
    return (
        <div className="flex flex-wrap justify-center p-4 gap-4" dir="ltr">
            {
                Object.entries(colors).map(([name,color])=>
                (<div key={name} className={`${color} w-96 h-96 flex items-center justify-center uppercase rounded-xl shadow`}>
                    <span className="font-semibold text-lg bg-white p-2 rounded-lg">{name}</span>
                </div>))
            }
        </div>
    );
};

export default ColorsDemo;