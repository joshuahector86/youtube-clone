import BadgeLine from "@/components/home/badge-line";
import VideoCard from "@/components/home/video-cards";
import Page from "@/components/layout/page";
import { videoCardData } from "@/data/home/video-card-data";

import CustomDialog from "@/components/ui/custom-dialog";
import { useDialogDisplayStore } from "@/stores/dialog-display-store";
import { useMemo, useState } from "react";
const Home = () => {
  const { isDialogDisplay, setIsDialogDisplay } = useDialogDisplayStore();
  const handleDialogToggle = () => {
    return setIsDialogDisplay(!isDialogDisplay);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(videoCardData.length / pageSize));

  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return videoCardData.slice(startIndex, startIndex + pageSize);
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };
  return (
    <Page>
      <div className="flex flex-col gap-4">
        <BadgeLine />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 px-[100px] py-[50px] mx-auto gap-8">
          {paginatedVideos.map((videos) => (
            <button
              key={`${videos.title}-${videos.author}`}
              onClick={handleDialogToggle}
            >
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
        <div className="flex items-center justify-center gap-4">
          <button
            className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Home;
