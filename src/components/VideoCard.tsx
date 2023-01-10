import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoChannelTitle,
} from "../utils/constants";
import { Video } from "../interfaces/types";

interface Props {
	video: Video;
}

const VideoCard: FC<Props> = ({ video: { id, snippet } }) => {
	return (
		<Card
			sx={{
				width: { xs: "100%", sm: "358px", md: "320px" },
				boxShadow: "none",
				borderRadius: "0",
			}}
		>
			<Link to={id?.videoId ? `/video/${id?.videoId}` : demoVideoUrl}>
				<CardMedia
					image={snippet?.thumbnails?.high?.url}
					sx={{
						width: { xs: "100%", sm: "358px", md: "320px" },
						height: "180px",
					}}
				/>
			</Link>
			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
				<Link to={snippet?.channelId ? `/video/${id?.videoId}` : demoVideoUrl}>
					<Typography variant="subtitle1" fontWeight="bold" color="#FFF">
						{snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Link
					to={
						snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl
					}
				>
					<Typography variant="subtitle2" fontWeight="bold" color="gray">
						{snippet?.channelTitle || demoChannelTitle}
						<CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
					</Typography>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
