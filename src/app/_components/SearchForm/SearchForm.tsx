export default function SearchForm() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        action="/search"
        className="max-w-xs flex flex-col gap-4 text-black bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <span className="text-xl">What are you looking for?</span>
        <div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
