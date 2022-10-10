import "./mylabel.css";

interface MyLabelProps {
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
    fontColor?:string;
}
/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
	allCaps = false,
	color = "primary",
	label = "no Label",
	size = "normal",
    fontColor,
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`}
        style={{color:fontColor}}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
