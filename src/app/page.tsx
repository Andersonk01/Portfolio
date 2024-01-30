import { Profile } from "@/components/Profile";
import { SectionAbout } from "@/components/SectionAbout";
import { Tech } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden items-center justify-center p-2 pt-4 mt-20">
      <section className="max-w-7xl">
        <Profile />
        <SectionAbout />
        <Tech />
      </section>
    </main>
  );
}
