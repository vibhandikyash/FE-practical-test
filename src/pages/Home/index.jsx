import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-purple-100">
      <div className="lg:px-40 px:20 py-24">
        <div className="flex flex-col items-center md:gap-20 gap-9">
          <div className="lg:flex lg:flex-row flex flex-col-reverse justify-between items-center md:gap-20 gap-9">
            <img
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220923%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220923T080250Z&X-Amz-Expires=86400&X-Amz-Signature=e606cb0eb293be03c0162bb103156bfe5a49da2267986e37cd62eb4ecd7b9030&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
              alt="landing_image"
              className="drop-shadow-lg md:w-auto w-[165.63px]"
            />
            <div className="flex flex-col gap-14 lg:items-end lg:text-right text-center items-center">
              <div>
                <div className="text-[#240D57] md:text-[64px] text-4xl md:leading-[64px] leading-9 font-bold ">
                  Imagine if <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
                    Snapchat
                  </span>
                  <br />
                  had events.
                </div>
                <div className="md:text-2xl text-base font-light pt-4">
                  Easily host and share events with your friends <br /> across
                  any social media.
                </div>
              </div>
              <Link
                to="create-event"
                className="lg:block hidden text-center text-xl text-white w-80 font-bold py-4 rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
              >
                🎉 Create my event
              </Link>
            </div>
          </div>
          <Link
            to="create-event"
            className="cursor-pointer lg:hidden w-6/12 px-4 block text-center md:text-xl text-base text-white font-bold py-4 rounded-[10px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
          >
            🎉 Create my event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
