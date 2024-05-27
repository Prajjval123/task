import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { trading, bell, coin, pfp, trending, leaderboard } from "../assets/icons";
import { data } from "../constants/data";

const Leaderboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const data = [
  //   {
  //     rank: 1,
  //     name: "Selling with re entr",
  //     calmar: 3.96,
  //     profit: 381845,
  //     avgProfit: 319.54,
  //     winPercentage: 0.65,
  //     price: 0,
  //     action: "View",
  //   },
  //   {
  //     rank: 2,
  //     name: "strategy_name",
  //     calmar: 3.62,
  //     profit: 268872.5,
  //     avgProfit: 216.31,
  //     winPercentage: 0.64,
  //     price: 500,
  //     action: "Buy",
  //   },
  //   {
  //     rank: 3,
  //     name: "Based on premium and",
  //     calmar: 3.42,
  //     profit: 255425,
  //     avgProfit: 208.51,
  //     winPercentage: 0.64,
  //     price: 0,
  //     action: "View",
  //   },
  //   // Add more data as needed
  // ];

  const navLinks = [
    { href: "/", label: "LeaderBoard" },
    { href: "/leaderboard", label: "Historical Trading" },
    { href: "/strategies", label: "Historical Chart" },
    { href: "/scanners", label: "Scanners" },
    { href: "/alerts", label: "Alerts" },
    { href: "/basic-backtest", label: "Basic Backtest" },
    { href: "/advanced-backtest", label: "Advanced Backtest" },
    { href: "/pricing", label: "Pricing" },
    { href: "/earnings", label: "My Earnings" },
  ];

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <section className="h-24 border-b flex items-center justify-between px-4 md:px-20">
        <div className="flex items-center cursor-pointer">
          <img src={trading} alt="unifluke" width={150} />
        </div>
        <div className="flex items-center">
          <div className="flex gap-6">
            <img src={bell} alt="bell icon" width={30} height={30} className="cursor-pointer"/>
            <img src={coin} alt="coin icon" width={30} height={30} className="cursor-pointer"/>
            <img src={pfp} alt="profile icon" width={30} height={30} className="cursor-pointer"/>
          </div>
        </div>
      </section>
      <header className="flex flex-wrap justify-between items-center py-4 px-4 md:px-20">
        <button
          className="block md:hidden ml-auto text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-wrap md:justify-center flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0`}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block md:inline-block mr-4 mb-2 md:mb-0 text-black hover:text-red-400 font-semibold"
            >
              <div className="flex gap-1">
                {link.label === 'LeaderBoard' && (
                  <img src={leaderboard} alt="leaderboard" width={20} />
                )}
                {link.label}
              </div>
            </a>
          ))}
        </nav>
      </header>
      <div className="my-4 text-center px-4 md:px-20">
        <h1 className="text-4xl font-semibold mb-4">Leader<span className="text-red-400">Board</span></h1>
        <div className="flex justify-end mb-4">
          <div className="relative w-full md:w-1/5">
            <input
              type="text"
              placeholder="Search strategies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pl-10 border border-gray-300 rounded-md w-full"
            />
            <FaSearch className="absolute top-3.5 left-3 text-gray-400" />
          </div>
        </div>
        <div className="overflow-x-auto p-4 bg-white shadow-md rounded-lg">
          <div className="max-sm:flex-col justify-between items-center mb-4 md:flex">
            <div className="text-3xl font-semibold">Basic Backtest</div>
            <div className="relative">
              <button className="p-2 border border-gray-300 rounded-l-md bg-gray-200 border-r-0">
                Slippage
              </button>
              <select className="p-2 border border-gray-300 rounded-r-md border-l-0">
                <option value="0%">0%</option>
                <option value="0.5%">0.5%</option>
                <option value="1%">1%</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-orange-400 text-white">
                <tr>
                  <th className="w-1/12 py-2 px-4 whitespace-nowrap">Rank</th>
                  <th className="w-2/12 py-2 px-4 whitespace-nowrap">Name</th>
                  <th className="w-1/12 py-2 px-4 whitespace-nowrap">
                    Calmar Ratio
                  </th>
                  <th className="w-1/12 py-2 px-4 whitespace-nowrap">
                    Overall Profit
                  </th>
                  <th className="w-1/12 py-2 px-4 whitespace-nowrap">
                    Avg. Daily Profit
                  </th>
                  <th className="w-1/12 py-2 px-4 whitespace-nowrap">
                    Win %(Day)
                  </th>
                  <th className="w-1/12 py-2 px-4 whitespace-nowrap">
                    Price (Rs)
                  </th>
                  <th className="w-1/12 py-2 px-4 whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center border-b hover:bg-gray-100"
                    >
                      <td className="py-2 px-4">{item.rank}</td>
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">
                        <div className="flex items-center justify-center gap-1">
                          <img
                            src={trending}
                            alt="trending icon"
                            width={20}
                            className="text-green-500"
                          />
                          {item.calmar}
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        {item.profit.toLocaleString()}
                      </td>
                      <td className="py-2 px-4">{item.avgProfit}</td>
                      <td className="py-2 px-4">{item.winPercentage}</td>
                      <td className="py-2 px-4">{item.price}</td>
                      <td className="py-2 px-4">
                        {item.action === "View" ? (
                          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            View
                          </button>
                        ) : (
                          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
                            Buy
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="py-4 text-center">
                      No strategies found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
