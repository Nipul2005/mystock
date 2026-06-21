import React from "react";

function Delete() {
  return (
    <section className="bg-white border-2 border-red-200 rounded-3xl p-8 mt-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
          <i className="ri-delete-bin-6-line text-2xl text-red-500"></i>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-500">Danger Zone</h2>

          <p className="text-text-secondary">
            Actions performed here cannot be undone.
          </p>
        </div>
      </div>

      {/* Warning */}

      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
        <div className="flex gap-3">
          <i className="ri-error-warning-line text-red-500 text-xl mt-0.5"></i>

          <div>
            <h3 className="font-semibold text-red-700">
              Permanently Delete Account
            </h3>

            <p className="text-red-600 text-sm mt-1">
              This will permanently remove your account, profile, services,
              messages, reviews and all associated data. This action cannot be
              reversed.
            </p>
          </div>
        </div>
      </div>

      {/* Data Summary */}

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-bg border border-border">
          <p className="text-sm text-text-secondary">Profile Data</p>

          <p className="font-semibold text-text-primary">Will be deleted</p>
        </div>

        <div className="p-4 rounded-2xl bg-bg border border-border">
          <p className="text-sm text-text-secondary">Services</p>

          <p className="font-semibold text-text-primary">Will be removed</p>
        </div>

        <div className="p-4 rounded-2xl bg-bg border border-border">
          <p className="text-sm text-text-secondary">Reviews & Messages</p>

          <p className="font-semibold text-text-primary">Will be deleted</p>
        </div>
      </div>

      {/* Actions */}

      <button className="px-8 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-medium transition flex items-center gap-2">
        <i className="ri-delete-bin-line"></i>
        Delete Account
      </button>
    </section>
  );
}

export default Delete;
