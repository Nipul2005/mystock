import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSignUpMutation } from "../../store/reducers/user";
import { finishLoading, setCredentials } from "../../store/reducers/auth";
import LoadingAnime from "../../components/Common/LoadingAnime";

export default function SignUp() {
  const [see, setSee] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, { isLoading, error }] = useSignUpMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.username === "" ||
      formData.type === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userName: formData.username,
        type: formData.type,
      }).unwrap();
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
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
          <i className="ri-user-star-line text-[320px] text-white"></i>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 max-w-xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Join BizSphere
          </span>

          <h1 className="mt-8 text-6xl font-bold text-white leading-tight">
            Grow Your
            <br />
            Business Faster
          </h1>

          <p className="mt-6 text-blue-100 text-lg">
            Join thousands of providers and consumers using BizSphere to
            connect, collaborate and grow together.
          </p>

          <div className="space-y-4 mt-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <i className="ri-briefcase-line text-xl text-white"></i>
              </div>

              <div>
                <h3 className="font-semibold text-white">Offer Services</h3>

                <p className="text-blue-100 text-sm">
                  Reach customers actively looking for help.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <i className="ri-team-line text-xl text-white"></i>
              </div>

              <div>
                <h3 className="font-semibold text-white">Build Connections</h3>

                <p className="text-blue-100 text-sm">
                  Connect with trusted businesses and clients.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <i className="ri-line-chart-line text-xl text-white"></i>
              </div>

              <div>
                <h3 className="font-semibold text-white">Grow Revenue</h3>

                <p className="text-blue-100 text-sm">
                  Expand your business opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-5">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
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

          {/* Heading */}

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900">
              Create Account
            </h1>

            <p className="text-slate-500 mt-2">
              Start your journey with BizSphere.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johndoe"
                  className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
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
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={see ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
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
            </div>

            {/* Account Type */}

            <div className="mt-6">
              <label className="block mb-3 text-sm font-medium text-slate-700">
                Account Type
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                <label
                  className={`cursor-pointer rounded-2xl border p-5 transition ${
                    formData.type === "consumer"
                      ? "border-primary bg-blue-50"
                      : "border-slate-200"
                  }`}
                >
                  <input
                    type="radio"
                    className="hidden"
                    name="type"
                    value="consumer"
                    checked={formData.type === "consumer"}
                    onChange={handleChange}
                  />

                  <i className="ri-user-line text-2xl text-primary"></i>

                  <h3 className="font-semibold mt-3">Consumer</h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Find and hire trusted service providers.
                  </p>
                </label>

                <label
                  className={`cursor-pointer rounded-2xl border p-5 transition ${
                    formData.type === "provider"
                      ? "border-primary bg-blue-50"
                      : "border-slate-200"
                  }`}
                >
                  <input
                    type="radio"
                    className="hidden"
                    name="type"
                    value="provider"
                    checked={formData.type === "provider"}
                    onChange={handleChange}
                  />

                  <i className="ri-briefcase-line text-2xl text-primary"></i>

                  <h3 className="font-semibold mt-3">Provider</h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Offer services and grow your business.
                  </p>
                </label>
              </div>
            </div>

            <button
              disabled={isLoading}
              className="w-full py-3 rounded-full border-primary border bg-primary text-white font-semibold flex justify-center items-center transition-all ease-in-out cursor-pointer hover:bg-white hover:text-primary mt-6"
            >
              {isLoading ? <LoadingAnime /> : "SignUp"}
            </button>
          </form>

          <p className="text-center text-slate-500 mt-8">
            Already have an account?
            <Link to="/login" className="text-primary ml-1 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
