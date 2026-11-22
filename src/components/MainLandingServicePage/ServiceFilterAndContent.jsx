import { useEffect, useState } from "react";
import ServicesCards from "../Common/ServicesCards";

function ServiceFilterAndContent({ data }) {
  const [clickedValue, setClickedValue] = useState("All");
  const [service, setService] = useState([]);

  const categories = [
    "All",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Mobile App Development",
    "Cross Platform App Development",
    "iOS App Development",
    "Android App Development",
    "Software Development",
    "Desktop Application Development",
    "Game Development",
    "AI Development",
    "Machine Learning",
    "Data Science",
    "Blockchain Development",
    "Cloud Computing",
    "DevOps",
    "Cyber Security",
    "IT Support",
    "Technical Support",
    "Network Setup",
    "Database Development",
    "API Development",
    "Website Maintenance",
    "Website Migration",
    "WordPress Development",
    "Shopify Development",
    "E-commerce Development",
    "CMS Development",
    "UI/UX Design",
    "Web Design",
    "Graphic Design",
    "Logo Design",
    "Brand Identity Design",
    "Print Design",
    "Packaging Design",
    "Illustration",
    "Animation",
    "Motion Graphics",
    "3D Modeling",
    "3D Rendering",
    "Video Editing",
    "Videography",
    "Photography",
    "Drone Photography",
    "Wedding Photography",
    "Product Photography",
    "Photo Editing",
    "Audio Editing",
    "Music Production",
    "Voice Over",
    "Podcast Editing",
    "Digital Marketing",
    "Social Media Marketing",
    "Search Engine Optimization (SEO)",
    "Search Engine Marketing (SEM)",
    "Email Marketing",
    "Content Marketing",
    "Influencer Marketing",
    "Affiliate Marketing",
    "Marketing Strategy",
    "Brand Management",
    "Content Writing",
    "Copywriting",
    "Technical Writing",
    "Ghostwriting",
    "Blog Writing",
    "Script Writing",
    "Translation",
    "Transcription",
    "Proofreading",
    "Editing",
    "Resume Writing",
    "Virtual Assistant",
    "Customer Support",
    "Data Entry",
    "Data Analysis",
    "Business Consulting",
    "Financial Consulting",
    "Accounting",
    "Bookkeeping",
    "Tax Consulting",
    "Legal Services",
    "Human Resources",
    "Recruitment",
    "Project Management",
    "Event Planning",
    "Travel Planning",
    "Interior Design",
    "Architecture",
    "Real Estate Services",
    "Cleaning Services",
    "Home Repair",
    "Electrical Services",
    "Plumbing Services",
    "Painting Services",
    "Carpentry",
    "Landscaping",
    "Fitness Coaching",
    "Personal Training",
    "Nutrition Consulting",
    "Health Coaching",
    "Online Tutoring",
    "Language Tutoring",
    "Career Coaching",
    "Life Coaching",
    "Counseling",
    "Pet Care",
    "Child Care",
    "Delivery Services",
    "Courier Services",
    "Printing Services",
    "Printing & Publishing",
    "Research Services",
    "Survey Services",
    "Quality Assurance",
    "Product Management",
  ];

  useEffect(() => {
    if (clickedValue === "All") {
      setService(data?.data);
    } else {
      const filteredData = data?.data.filter(
        (item) => item.serviceCategory === clickedValue,
      );

      setService(filteredData);
    }
  }, [clickedValue, data]);
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* FILTERS */}
        <aside className="bg-white rounded-3xl border border-border p-6 h-fit">
          <h3 className="font-semibold text-lg mb-6">Filters</h3>

          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-3">Category</h4>

              <div className="space-y-3 overflow-auto p-2 h-70 rouded-sm">
                {categories.map((item, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-3"
                    htmlFor={item}
                  >
                    <input
                      type="checkbox"
                      id={item}
                      checked={clickedValue === item}
                      onChange={(e) => setClickedValue(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Budget</h4>

              <select className="w-full border border-border rounded-xl p-3">
                <option>Any Budget</option>
                <option>₹0 - ₹5,000</option>
                <option>₹5,000 - ₹15,000</option>
                <option>₹15,000+</option>
              </select>
            </div>
          </div>
        </aside>

        {/* SERVICES */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-text-primary">
              124 Services Found
            </h2>

            <select className="border border-border rounded-xl px-4 py-3 bg-white">
              <option>Highest Rated</option>
              <option>Newest</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {service?.length == 0 ? (
              <h4 className="text-2xl font-semibold flex justify-center items-center py-8">
                No service available
              </h4>
            ) : (
              service?.map((item, idx) => (
                <ServicesCards item={item} key={idx} />
              ))
            )}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-12 gap-3">
            <button className="w-11 h-11 rounded-xl border border-border bg-white">
              1
            </button>

            <button className="w-11 h-11 rounded-xl border border-border bg-white">
              2
            </button>

            <button className="w-11 h-11 rounded-xl border border-border bg-white">
              3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceFilterAndContent;
