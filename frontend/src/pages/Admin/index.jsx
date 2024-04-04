import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      // If user confirms, navigate to the login page
      navigate("/Login");
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[17px] items-center justify-start mx-auto pb-7 w-full">
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
        <div className="md:h-[659px] h-[696px] md:px-5 relative w-full">
          <Sidebar className="!sticky !w-[137px] flex h-screen md:hidden justify-start left-[2%] overflow-auto top-[0]">
            <Img
              className="h-[51px] md:h-auto object-cover w-[33%]"
              src="images/img_tooth.png"
              alt="tooth"
            />
            <Text
              className="my-[5px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-700"
              size="txtInterExtraBold32"
            >
              Clinic{" "}
            </Text>
          </Sidebar>
          <div className="absolute bottom-[0] h-[659px] inset-x-[0] mx-auto w-full">
            <Img
              className="h-[659px] m-auto object-cover w-full"
              src="images/img_admin1.png"
              alt="adminOne"
            />
            <div className="absolute bg-white-A700 bottom-[10%] flex flex-col gap-11 items-center justify-start p-5 right-[36%] rounded-[15px] w-[24%]">
              <Text
                className="text-black-900 text-center text-xl"
                size="txtInterExtraBold20"
              >
                Clinic
              </Text>
              <div className="flex flex-col gap-[52px] items-center justify-start mb-10 w-3/4 md:w-full">
                <Button
                  className="common-pointer border border-black-900_7a border-solid cursor-pointer font-medium leading-[normal] min-w-[210px] text-center text-xl"
                  onClick={() => navigate("/precription")}
                  color="white_A700"
                >
                  Precription{" "}
                </Button>
                <Button
                  className="common-pointer border border-black-900_84 border-solid cursor-pointer font-medium leading-[normal] min-w-[210px] text-center text-xl"
                  onClick={() => navigate("/patient")}
                  color="white_A700"
                >
                  Patient
                </Button>
                <Button
                  className="common-pointer border border-black-900_7a border-solid cursor-pointer font-medium leading-[normal] min-w-[210px] text-center text-xl"
                  onClick={() => navigate("/labtest")}
                  color="white_A700"
                >
                  Lab Test
                </Button>
                <Button
                  className="common-pointer border border-black-900_84 border-solid cursor-pointer font-medium leading-[normal] min-w-[210px] text-center text-xl"
                  onClick={handleRegisterClick}
                  color="white_A700"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between right-[2%] top-[1%] w-[52%]">
            <Text
              className="common-pointer text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/about")}
            >
              About
            </Text>
            <Text
              className="common-pointer text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Text>
            <Text
              className="common-pointer text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/receptionist")}
            >
              Receptionist
            </Text>
            <Text
              className="common-pointer text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/laboratorian")}
            >
              Laboratorian
            </Text>
            <Text
              className="common-pointer text-[15px] text-light_blue-700"
              size="txtInterSemiBold15"
              onClick={() => navigate("/docdetail")}
            >
              Doctor
            </Text>
            <a className="text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={() => navigate("/register")}
              >
                Register
              </Text>
            </a>
            <a className="text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={() => navigate("/login")}
              >
                Login
              </Text>
            </a>
            <a className="text-[15px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterSemiBold15"
                onClick={handleRegisterClick} 
                

              >
                Logout
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
