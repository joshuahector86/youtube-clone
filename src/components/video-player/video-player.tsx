import RecordedVideo from "../../assets/recorded-video/Youtube_vs_Clone_Video.mp4";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const VideoPlayer = () => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>YouTube Vs. CloneTube</DialogTitle>
          <DialogDescription>
            Side by side of the quickly put together clone and the inspiration.
            This video has no sound.
          </DialogDescription>
        </DialogHeader>
        <video controls src={RecordedVideo} className="w-full"></video>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
