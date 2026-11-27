import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateProviderDetailsMutation } from "../../store/reducers/user";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    type: "Profile",
    name: "",
    userName: "",
    number: "",
    gender: "",
    location: "",
    bio: "",
  });

  const [updateProviderDetails] = useUpdateProviderDetailsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(
      Object.entries(formData).filter(([_, val]) => val !== ""),
    );

    console.log(data);
    const res = await updateProviderDetails(data).unwrap();
  };
  return (
    <section className="bg-white border border-border rounded-xl p-8">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center overflow-hidden">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <i className="ri-user-3-line text-5xl text-primary"></i>
              )}
            </div>

            <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
              <i className="ri-camera-line"></i>
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary">
              Profile Information
            </h2>

            <p className="text-text-secondary">
              Manage your personal information and preferences.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              user.isVerified
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {user.isVerified ? "Verified Account" : "Not Verified"}
          </span>

          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium capitalize">
            {user.type}
          </span>
        </div>
      </div>

      {/* Form */}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-medium">Full Name</label>

          <input
            type="text"
            defaultValue={user.name}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Username</label>

          <input
            type="text"
            defaultValue={user.userName}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email Address</label>

          <input
            type="email"
            defaultValue={user.email}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Phone Number</label>

          <input
            type="text"
            defaultValue={user.phone}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Gender</label>

          <select
            defaultValue={user.gender}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Location</label>

          <input
            type="text"
            defaultValue={user.location}
            placeholder="New Delhi, India"
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none focus:border-primary"
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Member Since</label>

          <input
            type="text"
            value={new Date(user.createdAt).toLocaleDateString()}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-slate-100 text-slate-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">Bio</label>

          <textarea
            rows={4}
            defaultValue={user.bio}
            placeholder="Tell people a little about yourself..."
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-border bg-bg outline-none resize-none focus:border-primary"
          />
        </div>
      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-4 mt-8">
        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-primary text-white px-8 py-3 rounded-2xl font-medium hover:bg-primary-hover transition"
        >
          Save Changes
        </button>

        <button className="border border-border px-8 py-3 rounded-2xl font-medium hover:bg-bg transition">
          Cancel
        </button>
      </div>
    </section>
  );
}

export default Profile;
