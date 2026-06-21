import React from 'react'

function Security() {
  return (
    <section className="bg-white border border-border rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
          <i className="ri-shield-keyhole-line text-2xl text-red-500"></i>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary">
            Security Settings
          </h2>

          <p className="text-text-secondary">
            Protect your account and keep your credentials secure.
          </p>
        </div>
      </div>

      {/* Security Status */}

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
          <div className="flex items-center gap-3">
            <i className="ri-verified-badge-line text-xl text-green-600"></i>

            <div>
              <p className="font-medium text-green-700">Email Verification</p>

              <p className="text-sm text-green-600">Your account is verified</p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-3">
            <i className="ri-time-line text-xl text-blue-600"></i>

            <div>
              <p className="font-medium text-blue-700">Last Password Change</p>

              <p className="text-sm text-blue-600">14 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Password Form */}

      <div className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">Current Password</label>

          <div className="relative">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            />

            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <i className="ri-eye-line"></i>
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">New Password</label>

          <div className="relative">
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            />

            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <i className="ri-eye-line"></i>
            </button>
          </div>

          {/* Strength */}

          {/* <div className="mt-3">
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
            </div>

            <p className="text-sm text-green-600 mt-2">Strong Password</p>
          </div> */}
        </div>

        <div>
          <label className="block mb-2 font-medium">Confirm New Password</label>

          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            />

            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <i className="ri-eye-line"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Sessions */}

      <div className="mt-8 p-5 rounded-2xl bg-bg border border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-text-primary">Active Session</h3>

            <p className="text-sm text-text-secondary">
              Chrome • Windows • Delhi, India
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
            Current Device
          </span>
        </div>
      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-4 mt-8">
        <button className="bg-primary text-white px-8 py-3 rounded-2xl font-medium">
          Change Password
        </button>

        {/* <button className="border border-red-200 text-red-500 px-8 py-3 rounded-2xl font-medium hover:bg-red-50">
          Logout All Devices
        </button> */}
      </div>
    </section>
  );
}

export default Security