import { Link } from "react-router-dom";

const CreateEvent = () => (
  <div>
    <div className="bg-grey-100">
      <div className="lg:px-96 px:20 py-24">
        <div className="bg-white rounded-[10px] px-5 py-10 shadow-lg">
          <div className="pb-10 text-xl font-bold text-[#240D57]">
            Create new event
          </div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Event name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-purple-800 shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Event name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Host name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-purple-800 shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Host name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Start date
                </label>
                <input
                  name="start"
                  type="date"
                  className="bg-gray-50 border border-purple-800 shadow-lg text-gray-900 sm:text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Select date start"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  End date
                </label>
                <input
                  name="end"
                  type="date"
                  className="bg-gray-50 border border-purple-800 shadow-lg text-gray-900 sm:text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Select date end"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Event photo
                </label>
                <input
                  className="bg-gray-50 border border-purple-800 shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
            </div>
            <Link to="/event">
              <button
                type="submit"
                className="text-white hover:shadow-lg bg-gradient-to-r from-[#8456EC] to-[#E87BF8] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default CreateEvent;
