const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
});
function Tickets() {
  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Header section */}
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold font-inter">Business Dashboard</h1>
        <p className="mt-2 text-gray-600">Today is {formattedDate}</p>
      </div>
    </div>
  );
}

export default Tickets;
