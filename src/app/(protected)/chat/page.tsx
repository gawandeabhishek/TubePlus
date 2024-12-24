import { ChatList } from "@/components/chat/chat-list";
import { ChatArea } from "@/components/chat/chat-area";
import { VideoStream } from "@/components/chat/video-stream";

export default function ChatPage() {
  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block w-80 flex-shrink-0">
        <ChatList />
      </div>
      <ChatArea />
      <div className="hidden lg:block w-80 flex-shrink-0">
        <VideoStream />
      </div>
    </div>
  );
}