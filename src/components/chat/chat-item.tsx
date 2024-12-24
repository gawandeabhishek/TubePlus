import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatItemProps {
  name: string;
  lastMessage: string;
  time: string;
  members?: number;
  active?: boolean;
  avatar?: string;
}

export function ChatItem({ name, lastMessage, time, members, active, avatar }: ChatItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg p-3 cursor-pointer transition-colors",
        active ? "bg-accent" : "hover:bg-muted/50"
      )}
    >
      <Avatar className="h-10 w-10 shrink-0">
        {avatar ? (
          <AvatarImage src={avatar} alt={name} className="object-cover" />
        ) : (
          <AvatarFallback>
            <User className="h-6 w-6" />
          </AvatarFallback>
        )}
      </Avatar>
      <div className="min-w-0 w-20 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold truncate">{name}</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
          {members && (
            <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">• {members} members</span>
          )}
        </div>
      </div>
    </div>
  );
}