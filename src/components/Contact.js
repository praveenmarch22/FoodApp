const Contact = () => {
  return (
    <div className=" flex-col w-[35%] mx-auto justify-center items-center mt-8 text-center">
      <h1 className="text-2xl font-bold mx-auto">Contact Us</h1>
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Enter your name.."
          className="p-2 m-2 border border-black flex-1"
        />

        <input
          type="number"
          placeholder="Enter your number.."
          className="p-2 m-2 border border-black flex-1"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your mail.."
          className="p-2 m-2 border border-black w-full"
        />
      </div>
      <input
        type="text"
        placeholder="Enter your message.."
        className="p-2 pb-12 m-2 border border-black w-full"
      />
      <div>
        <input
          type="button"
          value={"Submit"}
          className="p-2 m-2 border border-black cursor-pointer w-full bg-green-300 hover:bg-slate-400"
        />
      </div>
    </div>
  );
};

export default Contact;
