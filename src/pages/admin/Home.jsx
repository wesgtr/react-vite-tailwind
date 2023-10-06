import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Good morning, Wes!</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="145,000"
          text="Total tickets"
        />
        <CardTicket
          ticket="pending"
          totalTickets="5,000"
          text="Pending tickets"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets in process"
        />
        <CardTicket
          ticket="close"
          totalTickets="10,000"
          text="Closed tickets"
        />
      </div>
      <div>
        <h1 className="text-2xl text-white my-10">Most Recent Tickets</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
          <h5>ID</h5>
          <h5>Description</h5>
          <h5>Status</h5>
          <h5>Date</h5>
          <h5>Actions</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Description</h5>
            <p>My computer won't turn on</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Status</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Open
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Date</h5>
            <span>28 October 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Actions</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                  Actions
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Information
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Description</h5>
            <p>My computer won't turn on</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Status</h5>
            <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
              In process
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Date</h5>
            <span>28 October 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Actions</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                  Actions
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Information
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Description</h5>
            <p>My computer won't turn on</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Status</h5>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Closed
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Date</h5>
            <span>28 October 2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Actions</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                  Actions
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/profile"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/profile"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Information
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
