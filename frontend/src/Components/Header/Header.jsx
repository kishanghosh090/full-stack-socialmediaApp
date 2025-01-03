import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios";
export default function Header(data) {
  const handleLogout = () => {
    axios
      .post("api/v1/users/logout")
      .then(() => {
        window.location.href = "/Login";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-slate-500 fixed  w-full z-[10]">
      <Navbar className="flex justify-between p-2 bg-slate-200">
        <NavbarContent>
          <NavbarBrand className="mr-4">
            <p className=" sm:block font-bold text-inherit">ACME</p>
          </NavbarBrand>
          {/* <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            type="search"
          /> */}
          <NavLink
            color="primary"
            variant="flat"
            to="/CreatePost"
            className={({ isActive }) =>
              `${
                isActive ? "" : ""
              } flex justify-center items-center flex-col   py-1 rounded-full w-[5rem] text-[2rem] bg-green-400 text-green-900`
            }
          >
            <CiCirclePlus />
          </NavLink>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={`${data?.data?.avatar}`}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">
                  {data?.data?.email || "default"}
                </p>
              </DropdownItem>
              <DropdownItem
                key="settings"
                onClick={() => {
                  window.location.href = "/Settings";
                }}
              >
                My Settings
              </DropdownItem>

              <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
