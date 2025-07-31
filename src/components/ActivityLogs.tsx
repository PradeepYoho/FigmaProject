
function ActivityLogs() {
    const notes = [
        {
            title: 'Notes Created',
            user: 'JhgfdsA',
            timestamp: 'July 17, 2025 At 06:13:23 PM',
        },
        {
            title: 'Notes Created',
            user: 'JhgfdsA',
            timestamp: 'July 17, 2025 At 06:13:23 PM',
        },
    ];

    return (
        <div className="flex">
            <div className="relative">
                <div className="absolute left-3 top-8 bottom-8 w-1 bg-green-400 rounded-full z-0"></div>

                {notes.map((note, index) => (
                    <><div key={index} className="relative mb-16 pl-20">
                        <div className="absolute left-0 top-0 flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full z-10" />
                            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                                {note.title}
                            </span>
                        </div>
                        <div className=" bg-white/40 backdrop-blur-md rounded-lg shadow-md px-6 py-4 w-[400px] ml-4">
                            <h3 className="text-[#0E2B56] font-semibold mb-1">Note</h3>
                            <p className="text-sm text-[#0E2B56]">
                                Create <span className="font-semibold">{note.user} - {note.title}</span>
                            </p>
                            <p className="text-xs text-right text-gray-600 mt-1">{note.timestamp}</p>
                        </div>

                    </div>
                    </>

                ))}
            </div>
        </div>
    );
}

export default ActivityLogs;
