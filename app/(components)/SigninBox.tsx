export default function SigninBox() {
  return (
    <div className="max-w-md mx-auto mt-10 shadow-xl bg-white py-8 px-6 rounded-lg">
      <h3 className="text-3xl font-bold text-center mb-6">
        Login
      </h3>

      <div className="flex flex-col mb-4 gap-3">
        <label htmlFor="name" className="text-base font-semibold block">
          Email or Username
        </label>
        <input type="text" name="email" id="name" placeholder="Enter your email or username" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      <div className="mb-4 flex flex-col gap-3">
        <label htmlFor="password" className="text-base font-semibold block">
          Password
        </label>
        <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      <button type="submit" className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full w-full flex items-center justify-center">
        Sign in
        <span className="ml-2">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29688 17.9301L14.0019 12.2251C14.6756 11.5513 14.6756 10.4488 14.0019 9.77507L8.29688 4.07007" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      </button>

      <div className="mt-4 text-center">
        <span className="text-gray-600 text-sm font-semibold">
          Dont have an account?
        </span>
        <a href="http://localhost:3000/signup" className="text-blue-500 text-sm font-bold ml-1">
          Sign Up
        </a>
      </div>
    </div>
  );
}
