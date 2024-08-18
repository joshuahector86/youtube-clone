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
    <Card>
      <Card>
        <img src={photo} alt="video-photo" />
        <p>{videoLength}</p>
      </Card>
      <Card>
        <div>
          <CircleUser />
          <div>
            <div>{title}</div>
            <div className="text-muted-foreground">
              {author} <CheckCircle />
            </div>
            <div>
              {viewCount} views <Dot /> {timeAgoPosted}
            </div>
          </div>
          <EllipsisVertical />
        </div>
      </Card>
    </Card>
  );
};

export default VideoCard;
