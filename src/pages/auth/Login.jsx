import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {useLoginMutation} from '../../store/reducers/user.js'

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation()


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      toast.error("Fill the all field")
      return
    }
    try {
      const res = await login(formData).unwrap();
  
      toast.success("Welcome to BizSphere")
    } catch (err) {
      toast.error("Something went wrong")
      return
    }
    
  };

  return (
    <div className="min-h-dvh bg-bg flex">
      {/* LEFT */}

      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-r from-primary to-blue-600 text-white p-14  relative overflow-hidden flex-col items-start justify-between pb-6">
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <i className="ri-user-star-line text-[320px] text-white/10"></i>
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Welcome Back
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight">
            Continue
            <br />
            Growing Your Business
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            Access your provider dashboard, manage services, respond to customer
            inquiries and track your business performance.
          </p>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-3">
              <i className="ri-check-line text-xl"></i>
              <span>Manage your listed services</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-check-line text-xl"></i>
              <span>Receive customer requests</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-check-line text-xl"></i>
              <span>Track business growth</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white/60 ">© 2026 BizSphere</div>
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-text-primary">Sign In</h2>

            <p className="text-text-secondary mt-2">
              Access your BizSphere account
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

                <input
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>

              <div className="relative">
                <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-primary" />
                Remember me
              </label>

              <Link to="/forgot-password" className="text-primary font-medium">
                Forgot Password?
              </Link>
            </div>
            <button
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-semibold transition"
            >
              {isLoading ? "Logging..." : "Sign in"}
            </button>

            <div className="relative py-2">
              <div className="border-t border-border"></div>

              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg px-4 text-sm text-text-secondary">
                OR
              </span>
            </div>

            <button
              type="button"
              className="w-full py-4 rounded-2xl border border-border flex items-center justify-center gap-3 font-medium"
            >
              <i className="ri-google-fill text-lg"></i>
              Continue with Google
            </button>

            <p className="text-center text-text-secondary">
              Don't have an account?
              <Link to="/signup" className="text-primary ml-1 font-medium">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
