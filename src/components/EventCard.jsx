export default function EventCard({ name, description, date }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-80 hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-sm text-gray-500 font-medium">📅 {date}</p>
    </div>
  );
}
