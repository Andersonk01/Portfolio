import { Permanent_Marker } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';
import { CarouselCustom } from './components/CarouselAPI';
import NavBar from './components/MenuSide';
import { Card } from './components/Card';

const permanent_marker = Permanent_Marker({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
});
export default function Projects() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4 bg-fixed bg-[url('/image/bg-gato2.jpg')] bg-center bg-no-repeat bg-cover">
      <NavBar />
      <h1
        className={`${permanent_marker.className} font-sans text-center w-full text-4xl text-[#449cd2] opacity-20 mb-6`}
      >
        Projects
      </h1>

      <div className="mb-10 relative grid-cols-2 flex flex-col gap-2 md:gap-4 md:grid shadow-[5px_2px_0px_#000] mx-auto p-4 bg-[#140f23] rounded-2xl min-w-32 h-min sm:w-[80%]">
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
            disso, os usuários podem pesquisar qualquer filme específico usando
            um campo de pesquisa.
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

      <section className="w-full grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Card
          title="Pesquisa de Imagens - API do Unsplash"
          srcImg="/image/apiunsplash/layout.png"
          linkProject="https://unsplash-search-react-92vd3reb1-andersonk01.vercel.app/"
          linkGit="https://github.com/Andersonk01/unsplash-search-react"
        />
        <Card
          title="Gerador de Senhas"
          typeSite="React Native"
          srcImg="/image/geradorsenha/layout.jpg"
          linkProject="https://github.com/Andersonk01/gerador-senha"
          linkGit="https://github.com/Andersonk01/gerador-senha"
        />
        <Card
          title="Carrinho de Compra"
          typeSite="E-commerce"
          srcImg="/image/pizzaria/pizzaria.png"
          linkProject="https://carrinho-de-compra-pizzaria.vercel.app/"
          linkGit="https://github.com/Andersonk01/carrinho-de-compras"
        />
        <Card
          title="Adicionando Produtos - Cappuccino"
          typeSite="Estudo da Context API do React"
          srcImg="/image/cappuccino/layout.png"
          linkProject="https://cappuccino-one.vercel.app/"
          linkGit="https://github.com/Andersonk01/cappuccino-ecommerce"
        />
      </section>
      <h1 className="mt-6">
        Pagina em construção...Acesse esse o{' '}
        <Link
          href="https://github.com/Andersonk01?tab=repositories"
          target="_blank"
        >
          <Button variant="destructive" className="animate-bounce">
            GitHub
          </Button>
        </Link>{' '}
      </h1>
    </main>
  );
}
