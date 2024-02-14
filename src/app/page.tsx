import { Profile } from '@/components/Profile';
import { SectionAbout } from '@/components/SectionAbout';
import { Tech } from '@/components/TechStack';

import { ScrollDownButton } from '@/components/ScrollDown';

export default function Home() {
  return (
    <main className="bg-fixed bg-[url('/image/bg-flame.png')] bg-center bg-no-repeat bg-coover flex min-h-screen flex-col overflow-hidden items-center justify-center p-2 pt-14">
      <section className="max-w-7xl">
        <Profile />
        <ScrollDownButton />
        <SectionAbout />
        <Tech />
      </section>
    </main>
  );
}
