import { VideoCardType } from "@/types/types";
import { Card } from "@/components/ui/card";
import { CheckCircle, CircleUser, Dot, EllipsisVertical } from "lucide-react";

const VideoCard: React.FC<VideoCardType> = ({
  photo,
  title,
  timeAgoPosted,
  author,
  videoLength,
  viewCount,
}) => {
  return (
    <Card className="mb-2 bg-transparent">
      <Card className="w-full bg-transparent ">
        <img
          src={photo}
          alt="video-photo"
          className="rounded  hover:rounded-none min-h-[200px]"
        />
      </Card>
      <Card className="bg-transparent w-full">
        <div className="flex justify-between">
          <CircleUser className="w-8 h-8 flex-shrink-0" />
          <div className="ml-1">
            <div>{title}</div>
            <div className="text-muted-foreground flex gap-1 items-center">
              {author} <CheckCircle className="w-3 h-3" />
            </div>
            <div className="flex items-center">
              {viewCount} views <Dot /> {timeAgoPosted} <Dot />{" "}
              <p className="text-right ">{videoLength}</p>
            </div>
          </div>
          <EllipsisVertical />
        </div>
      </Card>
    </Card>
  );
};

export default VideoCard;
