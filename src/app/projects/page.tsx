import { Permanent_Marker } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';
import { CarouselCustom } from './components/CarouselAPI';
import NavBar from './components/MenuSide';

const permanent_marker = Permanent_Marker({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
});
export default function Projects() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-2 bg-fixed bg-[url('/image/bg-gato2.jpg')] bg-center bg-no-repeat bg-cover">
      <NavBar />
      <section className="flex flex-col items-center w-full min-h-[80vh] h-full p-2">
        <h1
          className={`${permanent_marker.className} font-sans text-center w-full text-4xl text-[#449cd2] opacity-20 mb-6`}
        >
          Projects
        </h1>
        <div className="relative grid-cols-2 flex flex-col gap-2 md:gap-4 md:grid shadow-[5px_5px_0px_#bf02de47] mx-auto p-4 bg-[#140f23] rounded-2xl min-w-32 h-min sm:w-[80%]">
          <span className="flex justify-center items-center w-full mb-1 max-h-96">
            <CarouselCustom />
          </span>
          <span>
            <p className="font-mono w-max font-extralight text-gray-300 text-[0.6rem] rounded-none opacity-85 h-[18px]">
              Descrição do Projeto
            </p>
            <h2 className="mb-2 text-lg">Consumindo API de Filmes</h2>
            <p className="text-xs text-justify mb-4 p-1 font-extralight">
              Uma aplicação web desenvolvida com Next.js que consome uma API de
              filmes. A aplicação permite aos usuários explorar filmes em várias
              categorias, como Ação, Aventura e os filmes mais populares. Além
              disso, os usuários podem pesquisar qualquer filme específico
              usando um campo de pesquisa.
            </p>
            <span className="flex gap-1 h-min items-center">
              <Link
                href="https://github.com/Andersonk01/consumindo-api-filme"
                target="_blank"
              >
                <Button variant="default" size="sm" className="">
                  <FaGithub size={20} />
                </Button>
              </Link>
              <Link
                href="https://consumindo-api-filme.vercel.app/"
                target="_blank"
              >
                <Button variant="default" size="sm" className="text-xs">
                  Visitar Projeto
                </Button>
              </Link>
            </span>
          </span>
        </div>

        <h1 className="mt-6">
          Pagina em construção...Acesse esse{' '}
          <Link
            href="https://github.com/Andersonk01?tab=repositories"
            target="_blank"
          >
            <Button variant="destructive" className="animate-bounce">
              Link
            </Button>
          </Link>{' '}
          para mais projetos.
        </h1>
      </section>
    </main>
  );
}
