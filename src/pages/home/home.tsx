import BadgeLine from "@/components/home/badge-line";
import VideoCard from "@/components/home/video-cards";
import Page from "@/components/layout/page";
import { videoCardData } from "@/data/home/video-card-data";
import { vid5 } from "@/assets/video-imgs";

const Home = () => {
  return (
    <Page>
      <div className="flex flex-col gap-4">
        <BadgeLine />
        <div className="grid grid-cols-4 gap-4">
          {videoCardData.map((videos) => (
            <VideoCard
              photo={vid5}
              title={videos.title}
              timeAgoPosted={videos.timeAgoPosted}
              author={videos.author}
              videoLength={videos.videoLength}
              viewCount={videos.viewCount}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Home;
