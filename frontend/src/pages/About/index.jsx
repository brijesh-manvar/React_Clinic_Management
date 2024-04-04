import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const AboutPage = () => {
  const navigate = useNavigate();

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
              className="sm:ml-[0] ml-[489px] text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
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
              src="images/img_about1.png"
              alt="aboutOne"
            />
            <div className="absolute flex flex-col gap-[31px] items-start justify-start left-[6%] top-[5%]">
              <Text
                className="ml-1 md:ml-[0] text-black-900 text-center text-xl"
                size="txtInterSemiBold20"
              >
                About Us
              </Text>
              <Text
                className="text-[15px] text-black-900"
                size="txtInterSemiBold15Black900"
              >
                <span className="text-black-900 font-inter text-left font-semibold">
                  <>
                    Appointment Scheduling: The system allows you to schedule
                    appointments online, send reminders, and manage patient
                    waitlists.
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-semibold">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-semibold">
                  <>
                    <br />
                    Patient Records Management: The system provides a platform
                    for you to manage{" "}
                  </>
                </span>
                <a
                  href="javascript:"
                  className="text-black-900 font-inter text-left font-semibold underline"
                >
                  patient
                </a>
                <span className="text-black-900 font-inter text-left font-semibold">
                  <>
                    {" "}
                    records, including medical history, treatment plans, and
                    test results.
                    <br />
                    <br />
                    <br />
                    Billing and Invoicing: The system allows you to generate
                    invoices, manage payments, and track billing history.
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-semibold">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-inter text-left font-semibold">
                  <>
                    <br />
                    Inventory Management: The system can help you manage your
                    inventory by tracking medical supplies, medications, and
                    equipment.
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
