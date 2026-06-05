import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSignUpMutation } from "../../store/reducers/user";


export default function SignUp() {
  const dispatch = useDispatch();
  const [signUp, {isLoading, error}]=useSignUpMutation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }).unwrap()
      toast.success("Welcome to BizSphere")
    } catch (err) {
      toast.error("Something went wrong")
      return
    }

  };


  return (
    <div className="min-h-dvh bg-bg flex">
      {/* LEFT */}

      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-primary to-blue-600 text-white p-14 flex-col justify-between relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <i className="ri-service-line text-[320px] text-white/10"></i>
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Join Thousands Of Providers
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight">
            Grow Your
            <br />
            Service Business
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            Create your provider account, list services, receive inquiries, and
            connect with customers across BizSphere.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <i className="ri-check-line text-xl"></i>
              <span>List unlimited services</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-check-line text-xl"></i>
              <span>Receive customer inquiries</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-check-line text-xl"></i>
              <span>Build your provider profile</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white/60">© 2026 BizSphere</div>
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-text-primary">
              Create Account
            </h2>

            <p className="text-text-secondary mt-2">
              Start offering services on BizSphere
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>

              <div className="relative">
                <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

                <input
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
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
                  placeholder="Create password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Confirm Password
              </label>

              <div className="relative">
                <i className="ri-lock-password-line absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"></i>

                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white outline-none focus:border-primary"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" className="mt-1 accent-primary" />

              <span className="text-text-secondary">
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

            <button

              className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-semibold transition"
            >
              {isLoading? "Creating Account..." : "Create Account"}
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
              Already have an account?
              <Link to="/login" className="text-primary ml-1 font-medium">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
