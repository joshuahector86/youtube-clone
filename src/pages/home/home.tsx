import BadgeLine from "@/components/home/badge-line";
import VideoCard from "@/components/home/video-cards";
import Page from "@/components/layout/page";
import { videoCardData } from "@/data/home/video-card-data";

const Home = () => {
  return (
    <Page>
      <BadgeLine />
      {videoCardData.map((videos) => (
        <VideoCard
          photo={videos.photo}
          title={videos.title}
          timeAgoPosted={videos.timeAgoPosted}
          author={videos.author}
          videoLength={videos.videoLength}
          viewCount={videos.viewCount}
        />
      ))}
    </Page>
  );
};

export default Home;
