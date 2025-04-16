import { Search } from "lucide-react"
import { useState } from "react"
import { IoIosSearch } from "react-icons/io"


function UserWallet() {

    const transactionData = [
        {
            Date: "2/04/2025",
            Activity: "Order",
            From: "alamin",
            "Order ID": "54fasdg64wg",
            Amount: "$250",
        },
        {
            Date: "2/04/2025",
            Activity: "Tip",
            From: "amin",
            "Order ID": "54fasdg64wg",
            Amount: "$250",
        },
        {
            Date: "2/04/2025",
            Activity: "Withdrawal Request/Transferred Successfully",
            From: "Username",
            "Order ID": "54fasdg64wg",
            Amount: "-$250",
        },
        {
            Date: "2/04/2025",
            Activity: "Expense",
            From: "Username",
            "Order ID": "54fasdg64wg",
            Amount: "-$250",
        },
    ]


    const [searchQuery, setSearchQuery] = useState("")

    // Filter transactions based on search query
    const filteredTransactions = transactionData.filter((transaction) =>
        transaction.From.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    return (
        <div className='py-10 nunito px-6'>
            <h1 className=' text-[24px] text-[#154153] font-bold'>Wallet</h1>

            <div className='flex justify-between gap-10 mt-6'>
                <div className='border border-[#5C91B1] rounded-[7px] p-2 w-full space-y-3 '>
                    <h1 className='text-[#154153] text-[16px]'>Available balance for use</h1>
                    <p className='text-[30px] font-bold text-[#3C4545]'> $44.00</p>
                    <div className="flex gap-4">
                        <button className='text-[#F6F8FA] bg-[#2E9DE0] text-[12px] rounded p-2 w-full cursor-pointer'>
                            Withdraw
                        </button>
                        <button className='text-[#2E9DE0] border rounded border-[#2E9DE0] text-[12px] p-2 w-full cursor-pointer'>
                            Manage method
                        </button>
                    </div>

                </div>
                <div className='border border-[#5C91B1] rounded-[7px] p-2 w-full space-y-3  '>
                    <h1 className='text-[#154153] text-[16px]'>Payment request being cleared</h1>
                    <p className='text-[30px] font-bold text-[#3C4545]'> $454.00</p>
                    <h1 className='text-[#154153] text-[16px]'>Date of request: 28 jan 2025</h1>

                </div>
                <div className='border border-[#5C91B1] rounded-[7px] p-2 w-full space-y-3'>
                    <h1 className='text-[#154153] text-[16px]'>Payments for active orders</h1>
                    <p className='text-[30px] font-bold text-[#3C4545]'> $454.00</p>
                    <h1 className='text-[#154153] text-[16px]'>Total task: 28(Under processing)</h1>


                </div>
                <div className='border border-[#5C91B1] rounded-[7px] p-2 w-full space-y-3 '>
                    <h1 className='text-[#154153] text-[16px]'>Expenses to date</h1>
                    <p className='text-[30px] font-bold text-[#3C4545]'> $454.00</p>
                    <h1 className='text-[#154153] text-[16px]'>Expenses since joining</h1>


                </div>


            </div>
            <p className='text-[#154153] text-[16px] mt-2 text-end'>Note: ChaskiX will charge 5% in every withdrawal.</p>
            <div className="  rounded-lg mt-5">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                        <span>Date Range</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                    {/* <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by username"
                             className="bg-[#F6F8FA] rounded-l p-2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute left-3 top-2.5 text-gray-400">
                        <IoIosSearch className="bg-[#acaeaf23] p-3 size-10 text-[#B9C0C7]" />
                        </div>
                    </div> */}

                     <div className="flex items-center">
                     <input
                            type="text"
                            placeholder="Search by username"
                             className="bg-[#F6F8FA] rounded-l p-2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                              <IoIosSearch className="bg-[#acaeaf23] p-3 size-10 text-[#B9C0C7]" />
                            </div>
                </div>

                <div className="">
                    <table className="w-full border-x border-[#D5DCE5] ">
                        <thead>
                            <tr className="  bg-[#d7e3eb]  border-b border-[#D5DCE5]">
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Date</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Activity</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">From</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Order ID</th>
                                <th className="py-3 px-4 text-right text-sm font-medium text-gray-600">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((transaction, index) => (
                                <tr key={index} className={`border-b border-[#D5DCE5] `}>
                                    <td className="py-4 px-4 text-sm text-gray-700">{transaction.Date}</td>
                                    <td className="py-4 px-4 text-sm text-gray-700 ">{transaction.Activity}</td>
                                    <td className="py-4 px-4 text-sm text-gray-700">{transaction.From}</td>
                                    <td className="py-4 px-4 text-sm text-gray-700">{transaction["Order ID"]}</td>
                                    <td
                                        className={`py-4 px-4 text-sm text-right ${transaction.Amount.startsWith("-") ? "text-red-500" : "text-green-600"
                                            }`}
                                    >
                                        {transaction.Amount.startsWith("-") ? transaction.Amount : transaction.Amount.replace("$", "$")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserWallet