// src/components/Events.jsx
import EventCard from "./EventCard";

export default function Events() {
  const events = [
    {
      title: "Hackathon 2025",
      description: "A 24-hour coding sprint where ideas meet execution 🚀",
      date: "12th Sept 2025",
    },
    {
      title: "Tech Talks",
      description: "Interactive sessions with industry experts 💡",
      date: "20th Sept 2025",
    },
    {
      title: "Workshops",
      description: "Hands-on learning on trending technologies 🛠️",
      date: "28th Sept 2025",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
        />
      ))}
    </div>
  );
}
