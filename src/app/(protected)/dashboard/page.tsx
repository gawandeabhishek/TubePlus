import { MainContent } from "@/components/dashboard/main-content";
import { VideoSections } from "@/components/dashboard/video-sections";
import { Sidebar } from "@/components/global/sidebar";
import { MobileNav } from "@/components/global/sidebar/mobile-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <div className="sticky top-0 z-50 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="flex items-center gap-2 p-4">
          <MobileNav />
          <h1 className="font-semibold">Dashboard</h1>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content + Mobile Video Sections */}
        <main className="flex-1 border-x min-h-screen">
          <MainContent />
          <div className="lg:hidden border-t">
            <VideoSections />
          </div>
        </main>

        {/* Desktop Video Sections */}
        <div className="hidden lg:block">
          <VideoSections isDesktop />
        </div>
      </div>
    </div>
  );
}