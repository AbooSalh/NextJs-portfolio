"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const text = "Say hello";
const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    message: yup.string().required("Pls Write us a message"),
    email: yup.string().email("Write a valid email").required("Email required"),
  });

  const form = useRef();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // submit handler
  const onSubmitHandler = (e) => {
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
    reset();
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, i) => {
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </div>
        </div>
        {/* form container */}
        <form
          noValidate
          onSubmit={handleSubmit(onSubmitHandler)}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Ahmed Saleh</span>
          <textarea
            {...register("message")}
            row={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none h-56"
            name="message"
          />
          <label>Email</label>
          <input
            {...register("email")}
            name="email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none "
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-3">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              your message has been sent successfully!
            </span>
          )}
          {errors && (
            <span className="text-red-600 font-semibold">
              {errors?.email?.message}
              <br />
              {errors?.message?.message}
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Somthing went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
