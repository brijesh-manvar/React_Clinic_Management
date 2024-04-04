import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const LabTestPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    const isConfirmed = window.confirm("LabTest Data added Succesfully");
    if (isConfirmed) {
      // If user confirms, navigate to the login page
      navigate("");
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-cyan-50 flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:pl-10 sm:pl-5 pl-[840px] w-full">
            <div
              className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[38px] items-start justify-end p-1.5 md:px-5 w-[53%] sm:w-full"
              style={{ backgroundImage: "url('images/img_group159.svg')" }}
            >
              <div className="flex flex-row items-start justify-start ml-3.5 md:ml-[0] w-[29%] md:w-full">
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
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1337px] mt-[17px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-[51px] md:h-auto object-cover w-[4%] sm:w-full"
              src="images/img_tooth.png"
              alt="tooth"
            />
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-700"
              size="txtInterExtraBold32"
            >
              Clinic{" "}
            </Text>
            <Text
              className="common-pointer sm:ml-[0] ml-[489px] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/about")}
            >
              About
            </Text>
            <Text
              className="common-pointer sm:ml-[0] ml-[33px] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Text>
            <Text
              className="common-pointer sm:ml-[0] ml-[33px] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/receptionist")}
            >
              Receptionist
            </Text>
            <Text
              className="common-pointer ml-8 sm:ml-[0] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/laboratorian")}
            >
              Laboratorian
            </Text>
            <Text
              className="common-pointer sm:ml-[0] ml-[31px] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/docdetail")}
            >
              Doctor
            </Text>
            <a className="sm:ml-[0] ml-[21px] text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={() => navigate("/register")}
              >
                Register
              </Text>
            </a>
            <a className="sm:ml-[0] ml-[35px] text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={() => navigate("/login")}
              >
                Login
              </Text>
            </a>
            <a className="ml-8 sm:ml-[0] text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={() => navigate("/login")}
              >
                Logout
              </Text>
            </a>
          </div>
          <div className="h-[659px] md:h-[673px] mt-3.5 md:px-5 relative w-full">
            <Img
              className="h-[659px] m-auto object-cover w-full"
              src="images/img_labtest1.png"
              alt="labtestOne"
            />
            <div className="absolute bg-blue-300_0c border border-blue-300_7a border-solid bottom-[3%] h-[34px] left-[0] w-[44%]"></div>
            <div className="absolute bg-blue-300_23 border border-blue-300_7a border-solid bottom-[8%] h-[34px] left-[0] w-[44%]"></div>
            <div className="absolute bg-blue-300_68 border border-blue-300_7a border-solid bottom-[13%] h-[34px] left-[0] w-[44%]"></div>
            <Button className="absolute border border-blue-300_7a border-solid bottom-[18%] cursor-pointer font-semibold leading-[normal] left-[0] min-w-[604px] md:min-w-full text-[15px] text-center">
              Grid View
            </Button>
            <div className="absolute flex flex-col md:gap-10 gap-[81px] items-center justify-start left-[7%] top-[13%] w-[22%]">
              <Text
                className="text-black-900 text-xl"
                size="txtInterExtraBold20"
              >
                Lab Test
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Input
                  name="groupEighty"
                  placeholder="Lab Test"
                  className="font-hairline leading-[normal] p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                  wrapClassName="border border-black-900_7a border-solid w-full"
                ></Input>
                <Input
                  name="timeZone"
                  placeholder="Test Cost"
                  className="font-hairline leading-[normal] p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                  wrapClassName="border border-black-900_7a border-solid mt-16 w-full"
                ></Input>
                <Button
        className="common-pointer cursor-pointer font-light leading-[normal] min-w-[84px] mt-[34px] text-center text-xs"
        onClick={handleRegisterClick} // Modified onClick handler
        color="deep_orange_800"
        size="xs"
      >
        Submit
      </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabTestPage;
