import { createUser } from "./user/page";



export default function Page() {

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <form action={createUser} className="bg-white p-8 rounded-2xl shadow-lg w-[350px] flex flex-col gap-4">
        
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Contact Form
        </h1>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Submit
        </button>
      </form>

    </div>
    </>
  );
}