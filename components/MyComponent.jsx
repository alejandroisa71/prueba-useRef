import { useRef, useEffect } from "react";

export const MyComponent = () => {
  const boxRef = useRef(null);
  let otroRef = useRef(0);

  useEffect(() => {
    otroRef.current = otroRef.current + 1;
  }, []);

  const handleOnClick = () => {
    boxRef.current.style.transform = "translateX(100px) translateY(250px)";
    boxRef.current.style.transition = "transform .1s ease-out";
    boxRef.animation-duration
    boxRef.current.style.background='green'
    boxRef.current.style.borderRadius= '20px'
  };

  const handleOnClickOtroRef = () => {
    otroRef.current = otroRef.current + 2;
    console.log(otroRef);
  };
  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "50px", height: "50px", background: "red" }}
      />

      <button onClick={handleOnClick}>Animar</button>
      <button onClick={handleOnClickOtroRef}>OtroRef</button>
    </div>
  );
};
