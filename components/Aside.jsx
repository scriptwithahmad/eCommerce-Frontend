import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

// ASIDE LINKS ADDED
var navLinks = [
  { href: "/dashboard", lable: "Dashboard", icon: "fa-solid fa-chart-simple" },
  { href: "/dashboard/products", lable: "Product", icon: "fa-solid fa-box" },
  {
    href: "/dashboard/customer",
    lable: "Customer",
    icon: "fa-solid fa-circle-user",
  },
];

const Aside = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);

  return (
    <aside
      style={{
        width: toggle ? "200px" : "48px",
        transition: ".6s",
      }}
      className={`lg:w-[200px] md:w-12 mt-4 overflow-hidden flex flex-col justify-between ${
        toggle ? "pr-4" : "pr-0"
      }`}
    >
      <div className="flex flex-col relative">
        <div className="flex flex-1 flex-col justify-between h-full my-4">
          <ul className="text-sm">
            {navLinks.map((v, i) => {
              return (
                <>
                  <li key={i}>
                    <Link
                      href={v.href}
                      className={`relative py-1 px-4 flex items-center rounded-none lg:rounded-r-full lg:hover:bg-[#3e1e970b] hover:bg-[#3e1e970b] group cursor-pointer ${
                        router.pathname === v.href
                          ? "group cursor-pointer lg:bg-[#F6F5FD] md:bg-transparent"
                          : ""
                      }`}
                    >
                      <i
                        key={i}
                        className={`${v.icon} text-base ${
                          router.pathname === v.href
                            ? "text-[#3E1E97]"
                            : "text-gray-500"
                        }`}
                      ></i>
                      <div
                        key={i}
                        style={{
                          opacity: toggle ? "1" : "0",
                          transition: ".5s",
                        }}
                        className={`ml-3 ${
                          router.pathname === v.href
                            ? "text-[#3E1E97] font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {v.lable}
                      </div>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="pl-2 mb-3">
        <span onClick={() => setToggle(!toggle)}>
          <i
            style={{
              transition: ".5s",
            }}
            className={`asideAnimate px-2 bg-gray-50 text-gray-600 active:bg-gray-300 cursor-pointer text-lg p-1 rounded-lg ${
              toggle ? "fa-solid fa-angle-left" : "fa-solid fa-angle-right"
            }`}
          ></i>
        </span>
      </div>
    </aside>
  );
};

export default Aside;
