import React from 'react'

function Notification() {
  return (
    <section className="bg-white border border-border rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
          <i className="ri-notification-3-line text-2xl text-amber-500"></i>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-primary">
            Notifications
          </h2>

          <p className="text-text-secondary">
            Control how and when BizSphere contacts you.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Email Notifications */}

        <div className="flex items-center justify-between p-4 rounded-2xl border border-border">
          <div>
            <h3 className="font-semibold text-text-primary">
              Email Notifications
            </h3>

            <p className="text-sm text-text-secondary">
              Receive important updates via email.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 accent-primary"
          />
        </div>

        {/* Service Requests */}

        <div className="flex items-center justify-between p-4 rounded-2xl border border-border">
          <div>
            <h3 className="font-semibold text-text-primary">
              Service Requests
            </h3>

            <p className="text-sm text-text-secondary">
              Get notified when customers contact you.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 accent-primary"
          />
        </div>

        {/* Messages */}

        <div className="flex items-center justify-between p-4 rounded-2xl border border-border">
          <div>
            <h3 className="font-semibold text-text-primary">Messages</h3>

            <p className="text-sm text-text-secondary">
              Notifications for new chats and replies.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 accent-primary"
          />
        </div>

        {/* Reviews */}

        <div className="flex items-center justify-between p-4 rounded-2xl border border-border">
          <div>
            <h3 className="font-semibold text-text-primary">
              Reviews & Ratings
            </h3>

            <p className="text-sm text-text-secondary">
              Know when customers leave feedback.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 accent-primary"
          />
        </div>

        {/* Marketing */}

        <div className="flex items-center justify-between p-4 rounded-2xl border border-border">
          <div>
            <h3 className="font-semibold text-text-primary">
              Marketing Emails
            </h3>

            <p className="text-sm text-text-secondary">
              Product news, offers and platform updates.
            </p>
          </div>

          <input type="checkbox" className="w-5 h-5 accent-primary" />
        </div>

        {/* Browser Push */}

        <div className="flex items-center justify-between p-4 rounded-2xl border border-border">
          <div>
            <h3 className="font-semibold text-text-primary">
              Browser Notifications
            </h3>

            <p className="text-sm text-text-secondary">
              Receive real-time notifications in your browser.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 accent-primary"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="bg-primary text-white px-6 py-3 rounded-2xl font-medium">
          Save Preferences
        </button>

        <button className="border border-border px-6 py-3 rounded-2xl font-medium">
          Reset
        </button>
      </div>
    </section>
  );
}

export default Notification