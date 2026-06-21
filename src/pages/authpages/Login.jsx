import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../store/reducers/user.js";
import { setCredentials, finishLoading } from "../../store/reducers/auth.js";

export default function Login() {
  const [see, setSee] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      toast.error("Fill the all field");
      return;
    }
    try {
      const res = await login(formData).unwrap();
      toast.success("Welcome to BizSphere");
      dispatch(setCredentials(res?.data));
      dispatch(finishLoading());

      return navigate("/dashboard");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
      return;
    }
  };

  return (
    <div className="min-h-dvh bg-slate-50 flex">
      {/* LEFT SIDE */}

      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        {/* Background Icon */}

        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
          <i className="ri-shield-check-line text-[320px] text-white"></i>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 max-w-xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Trusted Marketplace
          </span>

          <h1 className="mt-8 text-6xl font-bold text-white leading-tight">
            Find Trusted
            <br />
            Service Providers
          </h1>

          <p className="mt-6 text-blue-100 text-lg">
            Connect with verified professionals, discover quality services, and
            grow your business with confidence.
          </p>

          
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
          {/* Logo */}

          <Link to="/" className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/bizsphere_icon.png"
              alt="BizSphere"
              className="w-12 h-12"
            />

            <div>
              <h2 className="text-2xl font-bold text-slate-900">BizSphere</h2>

              <p className="text-xs text-slate-500">Service Marketplace</p>
            </div>
          </Link>

          {/* Header */}

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900">Welcome Back</h1>

            <p className="text-slate-500 mt-2">
              Sign in to access your account.
            </p>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

                <Link to="/forgot-password" className="text-primary text-sm">
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <input
                  type={see ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-primary"
                />

                <button
                  type="button"
                  onClick={() => setSee(!see)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <i className={`ri-${see ? "eye" : "eye-close"}-line`}></i>
                </button>
              </div>
            </div>

            <button
              disabled={isLoading}
              className="w-full py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-semibold transition"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            <button
              type="button"
              className="w-full py-4 rounded-2xl border border-slate-200 flex items-center justify-center gap-3 font-medium"
            >
              <i className="ri-google-fill text-lg"></i>
              Continue with Google
            </button>
          </form>

          {/* Footer */}

          <p className="text-center text-slate-500 mt-8">
            Don't have an account?
            <Link to="/signup" className="text-primary ml-1 font-semibold">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
