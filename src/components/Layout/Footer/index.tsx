import { ReactComponent as Home } from "@/assets/svgs/home.svg";
import { ReactComponent as Search } from "@/assets/svgs/search.svg";
import { ReactComponent as Ticket } from "@/assets/svgs/ticket.svg";
import { ReactComponent as User } from "@/assets/svgs/user.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  {
    text: "추천",
    image: <Home />,
  },
  {
    text: "둘러보기",
    image: <Search />,
  },
  {
    text: "티켓",
    image: <Ticket />,
  },
  {
    text: "마이페이지",
    image: <User />,
  },
];

const Footer = () => {
  const [isActive, setIsActive] = useState<string>(CATEGORIES[0].text);
  const navigate = useNavigate();

  const handleFooter = (category: string) => {
    setIsActive(category);
    navigate("show/1");
  };

  return (
    <footer className="h-[74px] w-screen max-w-[450px] text-common-white bg-[#202020] shadow-footer fixed bottom-0 z-50">
      <div className="flex justify-around space-x-5 px-5 py-[10px]">
        {CATEGORIES.map((category, index) => (
          <div
            key={index}
            className={`flex-col items-center justify-center w-13 h-6 text-center cursor-pointer ${isActive === category.text ? "text-primary-500" : ""}`}
            onClick={() => handleFooter(category.text)}
          >
            <span className="flex justify-center">{category.image}</span>
            <span
              className={`text-[11px] ${isActive === category.text ? "font-bold" : "font-medium"} leading-none`}
            >
              {category.text}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
