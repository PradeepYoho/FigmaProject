import { useState } from "react";
import TicketsChat from "./TicketsChat";

const tickets = [
  {
    name: "Chendran",
    title: "Testing Purpose",
    time: "4 Month Ago",
    status: "Opened",
    priority: "Low",
  },
  {
    name: "Chendran",
    title: "Test the Ticket Management System",
    time: "4 Month Ago",
    status: "Opened",
    priority: "Medium",
  },
  {
    name: "Chendran",
    title: "Testing Purpose",
    time: "2 Month Ago",
    status: "Opened",
    priority: "Low",
  },
];

type Ticket = {
  name: string;
  title: string;
  time: string;
  status: string;
  priority: string;
};

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  return (
    <div className="min-h-screen flex p-6 gap-6">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-md mb-6 px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/80 border border-white/30 backdrop-blur-md outline-none"
        />

        <div className="space-y-4">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-white/20 text-white"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#0E2B56]" />
                  <div>
                    <p className="font-semibold text-blue-900">{ticket.name}</p>
                    <p className="text-sm text-blue-700">{ticket.title}</p>
                  </div>
                </div>
                <p className="text-sm text-white">{ticket.time}</p>
              </div>

              <div className="flex justify-end space-x-4 mt-4">
                <button
                  onClick={() => setSelectedTicket(ticket)}
                  className="px-4 py-1 rounded-md bg-[#0E2B56] text-white text-sm font-semibold cursor-pointer"
                >
                  {ticket.status}
                </button>

                <span
                  className={`px-4 py-1 rounded-md text-sm font-semibold w-20 text-center ${ticket.priority === "Low"
                      ? "bg-white text-[#0E2B56]"
                      : ticket.priority === "Medium"
                        ? "bg-yellow-400 text-[#0E2B56]"
                        : "bg-red-500 text-white"
                    }`}
                >
                  {ticket.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2">
        {selectedTicket ? (
          <TicketsChat />
        ) : (
          <div className="text-white text-center  opacity-60">
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
