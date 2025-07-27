import { FOOTER_LINKS } from "../../../constants/footerLinks";

const RightSidebarFooter = () => {
  return (
    <footer className="mt-10 px-3 text-xs text-gray-300">
      <div className="flex flex-wrap gap-x-2">
        {FOOTER_LINKS.map((link) => (
          <a key={link} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </div>
      <div className="mt-4 uppercase">© 2025 INSTAGRAM FROM META</div>
    </footer>
  );
};

export default RightSidebarFooter;
