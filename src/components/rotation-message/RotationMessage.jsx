import { useEffect, useState } from "react";

const RotationMessage = () => {
  const [phoneRotation, setPhoneRotation] = useState(0);
  const [firstLineTranslateY, setFirstLineTranslateY] = useState(-15);
  const [secondLineTranslateY, setSecondLineTranslateY] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setPhoneRotation(-90);
      setFirstLineTranslateY(8);
      setSecondLineTranslateY(-14);
    }, 1000);
  }, []);

  return (
    <div
      className={
        "hidden absolute w-full h-[75vw] bg-background [@media(max-width:500px)]:block text-stroke font-rubik"
      }>
      <p
        className={"absolute  text-center w-full transition-all ease duration-1500"}
        style={{
          transform: "translateY(" + firstLineTranslateY.toString() + "vw)",
        }}>
        Please
      </p>
      <div
        className={
          "w-[40%] h-full mx-[30%] border-[1vw] rounded-[2vw] border-stroke transform transition-all duration-1500 ease"
        }
        style={{ transform: "rotateZ(" + phoneRotation.toString() + "deg)" }}></div>
      <p
        className={"absolute text-center w-full transition-all ease duration-1500"}
        style={{
          transform: "translateY(" + secondLineTranslateY.toString() + "vw)",
        }}>
        rotate your phone
      </p>
    </div>
  );
};

export default RotationMessage;
