"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatItem } from "./chat-item";

export function ChatList() {
  return (
    <div className="w-full border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="relative mt-10 sm:mt-0">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search chats"
            type="search"
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          <ChatItem
            name="Gaming Group"
            lastMessage="Let's watch this game together!"
            time="12:30"
            members={8}
            active
            avatar="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=60"
          />
          <ChatItem
            name="Movie Night"
            lastMessage="How about watching the new Marvel movie?"
            time="11:45"
            members={5}
            avatar="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&auto=format&fit=crop&q=60"
          />
          <ChatItem
            name="Study Group"
            lastMessage="Here's the tutorial video we discussed"
            time="Yesterday"
            members={12}
            avatar="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=60"
          />
        </div>
      </ScrollArea>
    </div>
  );
}