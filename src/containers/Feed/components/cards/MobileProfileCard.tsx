import { CONFIG } from "site.config";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="p-1 mb-3 dark:text-white">💻 Profile</div>
      <div className="p-2 rounded-2xl bg-white dark:bg-zinc-700 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-20 h-20 relative rounded-lg overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src={CONFIG.profile.image}
                layout="fill"
                objectFit="cover"
                alt="profile_image"
                className="image-smooth trnasform scale-200 trnaslate-x-2 translate-y-2"
              />
            </div>
          </div>
          <div className="h-fit dark:text-white">
            <div className="text-xl font-bold">
              {CONFIG.profile.name}
            </div>
            <div className="text-sm text-gray-500 mb-2 dark:text-gray-400">
              {CONFIG.profile.role}
            </div>
            <div className="text-sm">{CONFIG.profile.bio}</div>
          </div>
        </div>
        {/* <div className="flex">
          {CONFIG.profile.github && (
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer text-gray-500 dark:text-white "
            >
              <AiOutlineGithub className="text-2xl" />
            </a>
          )}
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer text-gray-500 dark:text-white"
            >
              <AiOutlineInstagram className="text-2xl" />
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className="  overflow-hidden p-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer text-gray-500 dark:text-white"
            >
              <AiOutlineMail className="text-2xl flex-shrink-0" />
            </a>
          )}
          {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className="  overflow-hidden p-3 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer text-gray-500 dark:text-white"
            >
              <AiFillLinkedin className="text-2xl flex-shrink-0" />
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default MobileProfileCard;
