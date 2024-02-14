import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaGithubAlt } from 'react-icons/fa';

export const Social = ({ sizeIcon = 24 }: { sizeIcon: number }) => {
  return (
    <>
      <Link href="https://github.com/andersonk01" target="_blank">
        <FaGithubAlt
          size={sizeIcon}
          className="rounded-full  border p-0.5 hover:scale-125 bg-[#69BFB7]"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/anderson-kauer" target="_blank">
        <FaLinkedinIn
          size={sizeIcon}
          className="rounded-full  border p-0.5 hover:scale-125 bg-[#69BFB7]"
        />
      </Link>
      <Link href="https://www.instagram.com/kauercode/" target="_blank">
        <FaInstagram
          size={sizeIcon}
          className="rounded-full border p-0.5 hover:scale-125 bg-[#69BFB7]"
        />
      </Link>
    </>
  );
};
