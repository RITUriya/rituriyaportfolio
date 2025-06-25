import profileImage from "../assets/profile.jpg";
import {
  About_Me_Verbase1,
  About_Me_Verbase2,
  About_Me_Verbase3,
  About_Me_Verbase4,
  About_Me_Verbase5,
  About_Me_Verbase5D,
  About_Me_Verbase5A,
  About_Me_Verbase5B,
  About_Me_Verbase5C,
} from "../const/pageText";

const About = () => {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={profileImage}
          alt="Ritu"
          className="rounded-2xl shadow-xl w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
          <p className="mb-4">{About_Me_Verbase1}</p>
          <p className="mb-4">{About_Me_Verbase2}</p>
          <p className="mb-4">{About_Me_Verbase3}</p>
          <p className="mb-4">{About_Me_Verbase4}</p>
          <p className="mb-4">{About_Me_Verbase5}</p>
          <ul>
            <li>{About_Me_Verbase5A}</li>
            <li>{About_Me_Verbase5B}</li>
            <li>{About_Me_Verbase5C}</li>
            <li>{About_Me_Verbase5D}</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default About;
