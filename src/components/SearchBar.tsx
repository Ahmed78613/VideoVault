import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		// navigate to specific url
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
		}
		// reset search term
		setSearchTerm("");
	};

	return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 }, // sm = small devices
			}}
		>
			<input
				className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<IconButton>
				<Search type="submit" sx={{ p: "10", color: "red" }} />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
