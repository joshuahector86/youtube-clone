import { Cross2Icon } from "@radix-ui/react-icons";
import RecordedVideo from "../../assets/recorded-video/Youtube_vs_Clone_Video.mp4";
import { useDialogDisplayStore } from "@/stores/dialog-display-store";
const CustomDialog = () => {
  const { isDialogDisplay, setIsDialogDisplay } = useDialogDisplayStore();
  const handleDialogToggle = () => {
    return setIsDialogDisplay(!isDialogDisplay);
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="fixed w-full left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
        <div
          onClick={handleDialogToggle}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <Cross2Icon className="h-4 w-4" />
        </div>
        <div className="flex flex-col items-center space-y-1.5 text-center sm:text-left">
          <div className="text-lg font-semibold leading-none tracking-tight">
            YouTube Vs. CloneTube
          </div>
          <div className="text-sm text-muted-foreground">
            Side by side of the quickly put together clone and the inspiration.
            This video has no sound.
          </div>
          <video
            autoPlay
            muted
            controls
            src={RecordedVideo}
            className="w-full aspect-video max-h-[700px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
