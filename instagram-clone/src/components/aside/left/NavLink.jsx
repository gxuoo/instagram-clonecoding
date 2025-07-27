import Icon from "../../icons/Icon";
import { Link } from "react-router-dom";

// icon 이름을 실제 경로로 매핑
const iconToRouteMap = {
  title: "/home",
  home: "/home",
  search: "/search",
  explore: "/explore",
  reels: "/reels",
  notifications: "/notifications",
  messages: "/direct/inbox",
  create: "/create",
  profile: "/profile",
};

const NavLink = ({ icon, text, hasNotification, isProfile, avatar }) => {
  const route = iconToRouteMap[icon] || "/home";

  return (
    <Link
      to={route}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors"
    >
      {isProfile ? (
        // <img src={avatar} alt="Profile" className="w-6 h-6 rounded-full" />
        <img
          src={"/assets/test-profile.jpg"}
          alt="Profile"
          className="w-6 h-6 rounded-full"
        />
      ) : (
        <Icon name={icon} />
      )}
      <span className="text-base font-medium hidden xl:inline dark:text-white">
        {text}
      </span>
      {hasNotification && (
        <div className="ml-auto w-2 h-2 bg-red-500 rounded-full hidden xl:block"></div>
      )}
    </Link>
  );
};

export default NavLink;
