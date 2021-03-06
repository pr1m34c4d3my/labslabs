export default function Insertpost() {
  return (
    <div className="w-full rounded-lg bg-white px-4 py-5 shadow-md">
      <div className="flex">
        <div className="flex w-2/12">
          <img src="/profile-pic.png" className="mr-10 h-20 w-24 pl-4" />
        </div>
        <div className="flex w-10/12">
          <input
            className="mr-4 w-full rounded-[20px] bg-gray-100 px-8 font-semibold focus:border-[#0061FF]  focus:outline-none focus:ring-1 focus:ring-[#0061FF]"
            placeholder="Any Thoughts?"
          />
        </div>
      </div>
      <div className="flex justify-end px-5 pt-5">
        <button className="font-reguler flex w-20 items-center justify-center rounded-full bg-blue-600 py-2 text-white hover:bg-blue-500">
          Send
        </button>
      </div>
    </div>
  )
}
