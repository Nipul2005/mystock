import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="min-h-screen bg-bg flex">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-l from-secondary to-primary p-12 text-white flex-col justify-between">
        <div>
          {/* Add Logo Here */}
          <Link to="/">
            <img
              src="/bizsphere_icon.png"
              alt="BizSphere"
              className="w-14 h-14 object-contain"
            />
          </Link>
        </div>

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Start Managing Your Inventory Today
          </h2>

          <p className="mt-5 text-lg text-white/80 max-w-md">
            Create your workspace and organize products, stock movements,
            suppliers and analytics.
          </p>

          {/* Add Illustration Here */}
        </div>

        <div className="text-white/60">© 2026 BizSphere</div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white shadow-card rounded-[24px] p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-primary">
              Create Account
            </h2>

            <p className="text-text-secondary mt-2">
              Build your inventory workspace
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
              />
            </div>

            {/* Add Terms & Conditions Checkbox */}

            <button className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-medium transition">
              Create Account
            </button>

            {/* Add Social Signup Buttons Here */}

            <p className="text-center text-text-secondary">
              Already have an account?
              <Link to="/login" className="text-primary ml-1">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
