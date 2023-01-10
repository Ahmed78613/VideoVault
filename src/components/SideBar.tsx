import { FC } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

interface Props {
	selectedCategory: string;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar: FC<Props> = ({ selectedCategory, setSelectedCategory }) => (
	<Stack
		direction="row"
		sx={{
			overflowY: "auto",
			height: { sx: "auto", md: "95%" },
			flexDirection: { md: "column" },
		}}
	>
		{categories.map((category) => (
			<button
				className="category-btn"
				onClick={() => setSelectedCategory(category.name)}
				style={{
					background: category.name === selectedCategory ? "#F31503" : "",
					color: "white",
				}}
				key={category.name}
			>
				<span
					style={{
						color: category.name === selectedCategory ? "white" : "red",
						marginRight: "15px",
					}}
				>
					{category.icon}
				</span>
				<span
					style={{
						opacity: category.name === selectedCategory ? 1 : 0.8,
					}}
				>
					{category.name}
				</span>
			</button>
		))}
		SideBar
	</Stack>
);

export default SideBar;
