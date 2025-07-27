import NavLink from "./NavLink";
import { mainNavLinks, bottomNavLinks } from "../../../config/navigation";

const LeftNav = ({ user }) => (
  <aside className="w-[72px] xl:w-64 p-3 border-r border-gray-300 dark:border-[#262626] flex flex-col fixed h-full">
    <div className="px-0 p-5 dark:text-white">
      <NavLink icon="title" />
    </div>
    <nav className="flex flex-col gap-2 flex-grow">
      {mainNavLinks.map((link) => (
        <NavLink
          key={link.id}
          icon={link.icon}
          text={link.text}
          hasNotification={link.hasNotification}
          isProfile={link.isProfile}
          avatar={link.isProfile ? user.avatar : undefined}
        />
      ))}
    </nav>
    <div className="flex flex-col gap-2 mt-auto">
      {bottomNavLinks.map((link) => (
        <NavLink key={link.id} icon={link.icon} text={link.text} />
      ))}
    </div>
  </aside>
);

export default LeftNav;
