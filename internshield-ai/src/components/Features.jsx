import { FaRobot, FaFlag, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";


function Features() {
  const features = [
  {
    icon: <FaRobot className="text-5xl text-blue-600" />,
    title: "AI Risk Score",
    desc: "Generates a risk score from 0–100 based on internship authenticity.",
  },
  {
    icon: <FaFlag className="text-5xl text-red-500" />,
    title: "Scam Detection",
    desc: "Detects suspicious keywords and fake recruitment patterns.",
  },
  {
    icon: <FaStar className="text-5xl text-yellow-500" />,
    title: "Student Reviews",
    desc: "Read reviews from students who applied previously.",
  },
  {
    icon: <MdVerified className="text-5xl text-green-600" />,
    title: "Verified Companies",
    desc: "Shows internships from verified organizations.",
  },
];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-20 px-6">
      {features.map((feature, index) => (
        <div
  key={index}
  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
>
          <div className="text-5xl">{feature.icon}</div>
          <h2 className="font-bold text-xl mt-4">{feature.title}</h2>
          <p className="text-gray-600 mt-2">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;