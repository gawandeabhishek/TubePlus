import Image from "next/image";
import { Clock, Eye } from "lucide-react";

interface ChatVideoProps {
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
}

export function ChatVideo({ title, duration, views }: ChatVideoProps) {
  return (
    <div className="ml-11">
      <div className="bg-muted/50 w-60 sm:w-80 aspect-video rounded-lg overflow-idden">
        <div className="p-3">
          <p className="text-sm mb-3">{title}</p>
          <div className="aspect-video relative rounded-md overflow-hidden bg-background">
            <Image
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60"
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views} views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}