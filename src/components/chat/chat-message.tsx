import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  sender: string;
  message: string;
  time: string;
  avatar?: string;
}

export function ChatMessage({ sender, message, time, avatar }: ChatMessageProps) {
  return (
    <div className="group animate-fade-in">
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8 shrink-0">
          {avatar ? (
            <AvatarImage src={avatar} alt={sender} className="object-cover" />
          ) : (
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold hover:underline cursor-pointer">
              {sender}
            </span>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          <p className="text-sm mt-1 leading-relaxed text-foreground/90">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}