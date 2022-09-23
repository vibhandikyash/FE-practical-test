const Event = () => (
  <section className="flex p-0 gap-4 pb-4 justify-start flex-col-reverse sm:px-40 sm:py-24 sm:justify-between lg:gap-36 lg:flex-row">
    <div className="text-[#240D57] px-4 md:px-0 lg:w-[30rem]">
      <h1 className="text-[28px] font-bold md:text-5xl">Birthday Bash</h1>
      <h3>
        Hosted by <b>Elysia</b>
      </h3>

      <div className="mt-10 px-4 sm:px-0">
        <div className="flex justify-between ">
          <div className="flex gap-6 justify-center items-center">
            <img
              alt="Calendar"
              src="/icons/Calendar.png"
              className="shadow-lg w-fit p-2 rounded-md"
            />
            <div>
              <p>
                <b>18 August 6:00PM</b>
              </p>
              <p>
                to <b>19 August 1:00PM</b> UTC -10
              </p>
            </div>
          </div>
          <img src="/icons/arrow.svg" alt="arrow-icon" />
        </div>

        <div className="flex justify-between  mt-8">
          <div className="flex gap-6 justify-center items-center">
            <img
              alt="location"
              src="/icons/Location.png"
              className="shadow-lg w-fit p-2 rounded-md"
            />
            <div>
              <p>
                <b>Street name</b>
              </p>
              <p>Suburb, State, Postcode</p>
            </div>
          </div>
          <img src="/icons/arrow.svg" alt="arrow-icon" />
        </div>
      </div>
    </div>

    <img
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220923%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220923T081031Z&X-Amz-Expires=86400&X-Amz-Signature=8cab743c26d66af649471f3d3f25e7ca58c112d188181408616e3d48d1daebfc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
      alt="event"
      className="w-full h-full sm:w-[500px] sm:h-[500px]"
    />
  </section>
);

export default Event;
