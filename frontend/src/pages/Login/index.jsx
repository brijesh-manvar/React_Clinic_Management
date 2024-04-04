import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    const isConfirmed = window.confirm("Login Sucessfully..");
    if (isConfirmed) {
      // If user confirms, navigate to the login page
      navigate("/admin");
    }
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[61px] items-center justify-start mx-auto w-full">
        <div className="bg-cyan-50 flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:pl-10 sm:pl-5 pl-[840px] w-full">
          <div
            className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[38px] items-start justify-end p-[5px] md:px-5 w-[53%] sm:w-full"
            style={{ backgroundImage: "url('images/img_group159.svg')" }}
          >
            <div className="flex flex-row items-start justify-start md:ml-[0] ml-[17px] mt-0.5 w-[30%] md:w-full">
              <Img
                className="h-[21px] md:h-auto object-cover w-[29%]"
                src="images/img_openenvelope.png"
                alt="openenvelope"
              />
              <Text
                className="ml-[5px] text-white-A700 text-xl"
                size="txtInterBold20"
              >
                Email:clinc@gmail.com
              </Text>
            </div>
          </div>
          <div className="bg-blue-300 flex sm:flex-1 flex-row gap-[7px] items-center justify-center p-[5px] md:px-5 w-[48%] sm:w-full">
            <Img
              className="h-[21px] md:h-auto ml-1.5 object-cover w-[11%]"
              src="images/img_phone.png"
              alt="phone"
            />
            <Text
              className="mr-[23px] text-white-A700 text-xl"
              size="txtInterBold20"
            >
              +91 9876543210
            </Text>
          </div>
        </div>
        <div className="h-[680px] md:px-5 relative w-full">
          <Img
            className="h-[680px] m-auto object-cover w-full"
            src="images/img_whatsappimage20240129_680x1385.png"
            alt="whatsappimageTwenty"
          />
          <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-2.5 rounded-[15px] top-[13%] w-[24%]">
            <div className="flex flex-col items-center justify-start mt-[15px] w-[85%] md:w-full">
              <a href="javascript:" className="text-black-900 text-xl">
                <Text size="txtInterExtraBold20">Login</Text>
              </a>
              <div className="flex flex-col gap-[42px] items-center justify-start mt-[19px] w-[83%] md:w-full">
                <Input
                  name="groupFortyThree"
                  placeholder="E-mail id"
                  className="font-hairline leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="border border-black-900_84 border-solid w-full"
                  type="email"
                  size="xs"
                ></Input>
                <Input
                  name="groupFortyTwo"
                  placeholder="Password"
                  className="font-hairline leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                  wrapClassName="border border-black-900_7a border-solid w-full"
                  type="password"
                ></Input>
              </div>
              
              <Button
        className="common-pointer cursor-pointer font-light leading-[normal] min-w-[84px] mt-[34px] text-center text-xs"
        onClick={handleRegisterClick} // Modified onClick handler
        color="deep_orange_800"
        size="xs"
      >
        Login
      </Button>
              <Text
                className="common-pointer mt-[83px] text-light_blue-700 text-xl"
                size="txtInterBold20Lightblue700"
                onClick={() => navigate("/register")}
              >
                Create a New Account
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
