"use client";

import { useState } from "react";
import { Menu, MoreVertical, Video, Smile, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChatMessage } from "./chat-message";
import { ChatVideo } from "./chat-video";
import { ChatList } from "./chat-list";

export function ChatArea() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <ChatList />
            </SheetContent>
          </Sheet>
          <div>
            <h2 className="text-lg font-semibold">Gaming Group</h2>
            <span className="text-sm text-muted-foreground">8 members</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <ChatMessage
            sender="John Doe"
            message="Hey everyone! Check out this awesome gaming video I found!"
            time="12:30"
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
          />
          <ChatVideo
            title="Epic Gaming Moments 2025 - Best Plays and Highlights from Pro Gamers"
            duration="3:45"
            views="1.2M"
            thumbnail="/placeholder.jpg"
          />
          <ChatMessage
            sender="Alice Smith"
            message="This is amazing! The gameplay at 2:15 is insane 🎮"
            time="12:32"
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
          />
          <ChatMessage
            sender="Bob Wilson"
            message="I've been practicing that move for weeks! Still can't get it right 😅"
            time="12:33"
            avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60"
          />
          <ChatMessage
            sender="Sarah Johnson"
            message="Let's have a practice session together this weekend. We can stream it live for the group!"
            time="12:35"
            avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60"
          />
        </div>
      </ScrollArea>

      <div className="p-4 border-t bg-background">
        <div className="max-w-2xl mx-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Smile className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-w-0"
          />
          <Button size="icon" className="shrink-0">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}