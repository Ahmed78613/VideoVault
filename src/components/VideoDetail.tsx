import { FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Video } from "../interfaces/types";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail: FC = () => {
	const { id } = useParams();
	const [videoDetail, setVideoDetail] = useState<Video | null>(null);
	const [videos, setVideos] = useState<Video[] | null>(null);

	useEffect(() => {
		fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data: any) =>
			setVideoDetail(data.items[0])
		);
		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data: any) => setVideos(data.items)
		);
	}, [id]);

	if (!videoDetail?.snippet) return <h1>Loading...</h1>;

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	}: any = videoDetail;

	return (
		<Box minHeight="95vh">
			<Stack direction={{ xs: "column", md: "row" }}>
				<Box flex={1}>
					<Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							className="react-player"
							controls={true}
						/>
						<Typography color="#fff" variant="h5" fontWeight="bold">
							{title}
						</Typography>
						<Stack
							direction="row"
							justifyContent="space-between"
							sx={{ color: "#fff", py: 1, px: 2 }}
						>
							<Link to={`/channel/${channelId}`}>
								<Typography variant="subtitle1" color="#fff">
									{channelTitle}
								</Typography>
								<CheckCircle
									sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
								/>
							</Link>
							<Stack direction="row" gap="20px" alignItems="center">
								<Typography variant="body1" sx={{ opacity: 0.7 }}>
									{parseInt(viewCount).toLocaleString()} views
								</Typography>
								<Typography variant="body1" sx={{ opacity: 0.7 }}>
									{parseInt(likeCount).toLocaleString()} likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
				<Box
					px={2}
					py={{ md: 1, xs: 5 }}
					justifyContent="center"
					alignItems="center"
				>
					<Videos videos={videos} direction="column" />
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
