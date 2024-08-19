import BadgeLine from "@/components/home/badge-line";
import VideoCard from "@/components/home/video-cards";
import Page from "@/components/layout/page";
import RecordedVideo from "../../assets/recorded-video/Youtube_vs_Clone_Video.mp4";
import { videoCardData } from "@/data/home/video-card-data";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Home = () => {
  return (
    <Page>
      <div className="flex flex-col gap-4">
        <BadgeLine />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4  gap-8">
          {videoCardData.map((videos) => (
            <Dialog>
              <DialogTrigger>
                <VideoCard
                  photo={videos.photo}
                  title={videos.title}
                  timeAgoPosted={videos.timeAgoPosted}
                  author={videos.author}
                  authorImg={videos.authorImg}
                  videoLength={videos.videoLength}
                  viewCount={videos.viewCount}
                />
              </DialogTrigger>
              <DialogContent className="max-w-[1200px]">
                <DialogHeader>
                  <DialogTitle>YouTube Vs. CloneTube</DialogTitle>
                  <DialogDescription>
                    Side by side of the quickly put together clone and the
                    inspiration. This video has no sound.
                  </DialogDescription>
                </DialogHeader>
                <video
                  autoPlay
                  muted
                  controls
                  src={RecordedVideo}
                  className="w-full"
                ></video>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Home;
