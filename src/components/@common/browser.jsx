import { AiOutlineLike } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export function Browser({ path }) {
  return (
    <div className="h-full w-full min-h-[500px] max-h-screen overflow-hidden rounded-xl">
      <nav className="w-full bg-white h-5 flex items-center gap-3 justify-between px-5">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-1">
            <div className="w-[8px] h-[8px] rounded-full bg-red-500"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-yellow-500"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center justify-center">
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
        </div>

        <div className="w-full p-1">
          <div className="w-full px-4 text-[8px] bg-slate-100 rounded-sm flex items-center justify-center">
            <span className="text-black/60">{path}</span>
          </div>
        </div>

        <div className="text-[10px] flex items-center justify-end gap-2">
          <AiOutlineLike />
          <FaExternalLinkAlt />
        </div>
      </nav>
      <iframe className="h-full w-full min-h-[500px] max-h-[500px]" src={path}></iframe>
    </div>
  );
}
