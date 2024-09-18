import { useRef, useState } from "react";
import { validateEmail } from "../utils/utils";
import HeaderNewsletter from "./HeaderNewsletter";
import FormNewsletter from "./FormNewsletter";

function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = inputRef.current.value;

    if (validateEmail(email)) {
      inputRef.current.value = "";
      setError(false);
      setSubscribed(true);
    } else {
      inputRef.current.value = "";
      setError(true);
    }
  };

  return (
    <div className="bg-primaryColor3 h-[550px] flex flex-col items-center justify-center gap-12 rounded-[24px] px-5 sm:h-[400px] lg:h-[500px]">
      <HeaderNewsletter />

      {subscribed ? (
        <h1 className="font-bold text-[24px] uppercase text-light text-center leading-snug">
          Thanks for subscribing!
        </h1>
      ) : (
        <FormNewsletter
          handleSubmit={handleSubmit}
          inputRef={inputRef}
          error={error}
        />
      )}
    </div>
  );
}

export default Newsletter;
