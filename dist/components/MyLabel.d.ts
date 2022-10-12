/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Label contents title
     */
    label?: string;
    /**
     * How large should the button be?
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * text Transform Capitalize
     */
    allCaps?: boolean;
    /**
     * color label class
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * color custom font color
     */
    fontColor?: string;
    /**
     * color custom font color
     */
    backgroundColor?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
