import BadgeLine from "@/components/home/badge-line";
import VideoCard from "@/components/home/video-cards";
import Page from "@/components/layout/page";
import { videoCardData } from "@/data/home/video-card-data";

import CustomDialog from "@/components/ui/custom-dialog";
import { useDialogDisplayStore } from "@/stores/dialog-display-store";
const Home = () => {
  const { isDialogDisplay, setIsDialogDisplay } = useDialogDisplayStore();
  const handleDialogToggle = () => {
    return setIsDialogDisplay(!isDialogDisplay);
  };
  return (
    <Page>
      <div className="flex flex-col gap-4">
        <BadgeLine />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4  gap-8">
          {videoCardData.map((videos) => (
            <button onClick={handleDialogToggle}>
              <VideoCard
                photo={videos.photo}
                title={videos.title}
                timeAgoPosted={videos.timeAgoPosted}
                author={videos.author}
                authorImg={videos.authorImg}
                videoLength={videos.videoLength}
                viewCount={videos.viewCount}
              />
            </button>
          ))}
          {isDialogDisplay ? <CustomDialog /> : ""}
        </div>
      </div>
    </Page>
  );
};

export default Home;
