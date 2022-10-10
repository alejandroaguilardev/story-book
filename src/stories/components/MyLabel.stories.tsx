import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
	title: "UI/MyLabel",
	component: MyLabel,
	argTypes: {
		size: {
			control: "select",
		},
		color: {
			control: "select",
		},
	},
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	size: "normal",
	allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: "normal",
	allCaps: true,
};

export const Secundary = Template.bind({});
Secundary.args = {
	size: "normal",
	color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: "normal",
	color: "tertiary",
};

export const CustomFontColor = Template.bind({});
Tertiary.args = {
	fontColor: "#FF000",
	size: "h1",
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
	backgroundColor: "#000",
	size: "h1",
};

