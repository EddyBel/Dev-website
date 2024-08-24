import { DiVim } from 'react-icons/di';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { IoLogoElectron, IoLogoJavascript } from 'react-icons/io5';
import { MdClearAll } from 'react-icons/md';
import { RiRobot2Fill } from 'react-icons/ri';
import { SiLua, SiNeovim, SiNotion, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export function GetTechIcon({ tech }) {
  switch (tech) {
    case 'javascript':
      return <IoLogoJavascript />;
    case 'typescript':
      return <SiTypescript />;
    case 'html':
      return <FaHtml5 />;
    case 'css':
      return <FaCss3Alt />;
    case 'tailwindcss':
      return <SiTailwindcss />;
    case 'lua':
      return <SiLua />;
    case 'neovim':
      return <SiNeovim />;
    case 'vimscript':
      return <DiVim />;
    case 'react':
      return <SiReact />;
    case 'nextjs':
      return <TbBrandNextjs />;
    case 'python':
      return <SiPython />;
    case 'ia':
      return <RiRobot2Fill />;
    case 'electron':
      return <IoLogoElectron />;
    case 'todos':
      return <MdClearAll />;
    case 'notion':
      return <SiNotion />;

    default:
      return <></>;
  }
}
