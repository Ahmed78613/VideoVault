import { FC } from "react";
import { Stack, Box } from "@mui/material";
import { Video } from "../interfaces/types";
import { VideoCard, ChannelCard } from "../components";

interface Props {
	videos: Video[] | null;
	direction?: string;
}

const Videos: FC<Props> = ({ videos, direction }) => {
	if (!videos?.length) return <h1>Loading...</h1>;
	return (
		<Stack
			direction={direction ? "column" : "row"}
			flexWrap="wrap"
			justifyContent="start"
			gap={2}
		>
			{videos?.map((item: Video, i: number) => (
				<Box key={i}>
					{item.id?.videoId && <VideoCard video={item} />}
					{item.id?.channelId && <ChannelCard channelDetail={item} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
