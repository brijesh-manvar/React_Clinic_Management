import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const HomeTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-cyan-50 flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:pl-10 sm:pl-5 pl-[838px] w-full">
            <div
              className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[38px] items-start justify-end p-[5px] md:px-5 w-[53%] sm:w-full"
              style={{ backgroundImage: "url('images/img_group159.svg')" }}
            >
              <div className="flex flex-row items-start justify-start md:ml-[0] ml-[17px] mt-0.5 w-[29%] md:w-full">
                <Img
                  className="h-[21px] md:h-auto object-cover w-[30%]"
                  src="images/img_openenvelope.png"
                  alt="openenvelope"
                />
                <Text
                  className="ml-[3px] text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Email:clinc@gmail.com
                </Text>
              </div>
            </div>
            <Line className="bg-white-A700 h-[38px] sm:h-px sm:w-full w-px" />
            <div className="bg-blue-300 flex sm:flex-1 flex-row gap-[9px] items-center justify-center p-[5px] md:px-5 w-[48%] sm:w-full">
              <Img
                className="h-[21px] md:h-auto ml-[9px] object-cover w-[11%]"
                src="images/img_phone.png"
                alt="phone"
              />
              <Text
                className="mr-[18px] text-white-A700 text-xl"
                size="txtInterBold20"
              >
                +91 9876543210
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[26px] mt-[17px] md:px-5 w-[91%] md:w-full">
            <Img
              className="h-[51px] sm:h-auto object-cover w-[4%] md:w-full"
              src="images/img_tooth_51x45.png"
              alt="tooth"
            />
            <Text
              className="md:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-700"
              size="txtInterExtraBold32"
            >
              Clinic{" "}
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[489px] md:mt-0 mt-2 text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/about")}
            >
              About
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[33px] md:mt-0 mt-2 text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[33px] md:mt-0 mt-[9px] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/receptionist")}
            >
              Receptionist
            </Text>
            <Text
              className="common-pointer ml-8 md:ml-[0] md:mt-0 mt-[7px] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/laboratorian")}
            >
              Laboratorian
            </Text>
            <Text
              className="common-pointer md:ml-[0] ml-[31px] md:mt-0 mt-2 text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/docdetail")}
            >
              Doctor
            </Text>
            <a className="md:ml-[0] ml-[21px] md:mt-0 mt-[9px] text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={() => navigate("/register")}
              >
                Register
              </Text>
            </a>
            <a className="md:ml-[0] ml-[35px] md:mt-0 mt-[9px] text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={() => navigate("/login")}
              >
                Login
              </Text>
            </a>
          </div>
          <div className="h-[659px] md:h-[673px] sm:h-[962px] mt-3.5 md:px-5 relative w-full">
            <Img
              className="h-[659px] m-auto object-cover w-full"
              src="images/img_whatsappimage20240129_659x1385.png"
              alt="whatsappimageTwenty"
            />
            <div className="absolute bg-indigo-900_cc flex flex-col h-full inset-[0] items-center justify-center m-auto p-[63px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mb-[104px] mt-[137px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterExtraBold24"
                >
                  KEEP YOUR BODY HEALTHY
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[19px] w-full">
                  <Img
                    className="common-pointer h-[63px] md:h-auto sm:mt-0 mt-[62px] object-cover"
                    src="images/img_back.png"
                    alt="back"
                    onClick={() => navigate("/")}
                  />
                  <Text
                    className="md:text-5xl text-[64px] text-white-A700"
                    size="txtInterExtraBold64"
                  >
                    <>
                      Take The Best Quality
                      <br /> Dental Treatment{" "}
                    </>
                  </Text>
                  <Img
                    className="common-pointer h-[63px] md:h-auto sm:mt-0 mt-[62px] object-cover"
                    src="images/img_forward.png"
                    alt="forward"
                    onClick={() => navigate("/")}
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-center mt-[11px] w-[32%] md:w-full">
                  <Button
                    className="!text-white-A700 cursor-pointer font-extrabold leading-[normal] min-w-[183px] text-center text-xl"
                    size="md"
                  >
                    Appointment
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-extrabold leading-[normal] min-w-[183px] text-center text-xl"
                    onClick={() => navigate("/contact")}
                    color="deep_orange_300"
                    size="md"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTwoPage;
