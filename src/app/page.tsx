import { Profile } from '@/components/Profile';
import { SectionAbout } from '@/components/SectionAbout';
import { Tech } from '@/components/TechStack';

import { ScrollDownButton } from '@/components/ScrollDown';
import { HeaderMain } from '@/components/HeaderMain';

export default function Home() {
  return (
    <main className="bg-fixed bg-[url('/image/bg-flame.png')] bg-center bg-no-repeat bg-cover flex min-h-screen flex-col overflow-hidden items-center justify-center p-2 pt-14">
      <HeaderMain />

      <section className="max-w-7xl">
        <Profile />
        <ScrollDownButton isLink />
        <SectionAbout />
        <Tech />
      </section>
    </main>
  );
}
