import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    const isConfirmed = window.confirm("Register Succesfully");
    if (isConfirmed) {
      // If user confirms, navigate to the login page
      navigate("/login");
    }
  };
  
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[121px] items-center justify-start mx-auto pb-[206px] w-full">
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
              className="mr-[17px] text-white-A700 text-xl"
              size="txtInterBold20"
            >
              +91 9876543210
            </Text>
          </div>
        </div>
        <div className="h-[414px] md:px-5 relative w-full">
          <Img
            className="h-[414px] m-auto object-cover w-full"
            src="images/img_regs1.png"
            alt="regsOne"
          />
          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] justify-center m-auto p-1 w-[16%]">
            <Text
              className="md:ml-[0] mt-[3px] mx-[58px] text-base text-black-900"
              size="txtInterBold16"
            >
              Registration
            </Text>
            <div className="flex flex-col items-center justify-start mt-[25px] mx-auto w-[68%] md:w-full">
            <Input
                name="group115"
                placeholder="Name"
                className="!placeholder:text-black-900_71 !text-black-900_71 leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="border border-blue_gray-100 border-solid mt-3.5 w-full"
                type="text"
                size="xs"
              ></Input>
              <Input
                name="group115"
                placeholder="Phone number"
                className="!placeholder:text-black-900_71 !text-black-900_71 leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="border border-blue_gray-100 border-solid mt-3.5 w-full"
                type="integer"
                size="xs"
              ></Input>        
              <Input
                name="group115"
                placeholder="E-mail id"
                className="!placeholder:text-black-900_71 !text-black-900_71 leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="border border-blue_gray-100 border-solid mt-3.5 w-full"
                type="Text"
                size="xs"
              ></Input>
              <Input
                name="group115"
                placeholder="Password"
                className="!placeholder:text-black-900_71 !text-black-900_71 leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="border border-blue_gray-100 border-solid mt-3.5 w-full"
                type="password"
                size="xs"
              ></Input>
              <Input
                name="group115"
                placeholder="Re-enter Password"
                className="!placeholder:text-black-900_71 !text-black-900_71 leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="border border-blue_gray-100 border-solid mt-3.5 w-full"
                type="password"
                size="xs"
              ></Input>
               <Button
        className="common-pointer cursor-pointer font-light leading-[normal] min-w-[84px] mt-[34px] text-center text-xs"
        onClick={handleRegisterClick} // Modified onClick handler
        color="deep_orange_800"
        size="xs"
      >
        Register
      </Button>
            </div>
            
            <Text
              className="md:ml-[0] ml-[18px] mr-[71px] mt-6 text-[10px] text-black-900"
              size="txtInterLight10"
            >
              Do you have an Account ?
            </Text>
            <a className="md:ml-[0] ml-[140px] mr-[46px] text-[10px] text-light_blue-700">
              <Text
                className="common-pointer"
                size="txtInterLight10Lightblue700"
                onClick={() => navigate("/login")}
              >
                Login
              </Text>
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
