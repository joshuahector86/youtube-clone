import { VideoCardType } from "@/types/types";
import { Card } from "@/components/ui/card";
import { CheckCircle, EllipsisVertical } from "lucide-react";

const VideoCard: React.FC<VideoCardType> = ({
  photo,
  title,
  timeAgoPosted,
  author,
  authorImg,
  videoLength,
  viewCount,
}) => {
  return (
    <Card className="mb-2 bg-transparent hover:bg-[#393838]/80 rounded-[20px] ">
      <Card
        className={`w-full 
        bg-transparent 
        
        relative
        inline-block
        m-0`}
      >
        <img
          src={photo}
          alt="video-photo"
          className="rounded-[20px] w-full h-auto block object-cover aspect-video"
        />
        <p className="absolute bottom-[10px] right-[10px] bg-black opacity-70 p-[4px] text-[14px]">
          {videoLength}
        </p>
      </Card>
      <Card className="bg-transparent w-full">
        <div className="flex justify-between p-1 ">
          <div className="flex gap-2 text-left">
            <img
              src={authorImg}
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="ml-1">
              <div>{title}</div>
              <div className="text-muted-foreground flex gap-1 items-center">
                {author} <CheckCircle className="w-3 h-3" />
              </div>
              <div className="flex gap-2 items-center">
                <p className="flex">{viewCount} views</p>
                <p className="flex">{timeAgoPosted}</p>
              </div>
            </div>
          </div>
          <EllipsisVertical className="ml-2" />
        </div>
      </Card>
    </Card>
  );
};

export default VideoCard;
