"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";

function ContactForm() {
    const [state, handleSubmit] = useForm("mdknzkbn");
    if (state.succeeded) {
        return <p>Thanks for sending! 😊😊😊</p>;
    }
    return (
        <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(1)}
            onSubmit={handleSubmit}
            className="space-y-4 max-w-lg"
        >
            <input
                required
                id="email"
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="form-input border-2 border-purple-500 bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <input
                required
                id="name"
                type="name"
                name="name"
                placeholder="Your Name"
                className="form-input border-2 border-purple-500 bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition"
            />
            <ValidationError prefix="Name" field="string" errors={state.errors} />
            <textarea
                required
                id="message"
                name="message"
                placeholder="Message"
                className="form-input border-2 border-purple-500 bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition min-h-[120px]"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
                type="submit"
                disabled={state.submitting}
                className="relative w-full h-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-lg shadow-md group"
            >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    Send Message
                </span>
                <span className="relative invisible">Submit</span>
            </button>
        </motion.form>
    );
}

const Contact = () => {
    return (
        <div
            className="relative h-full bg-transparent text-gray-200 shadow-lg p-[15px] mb-11"
            id="contact-me"
        >
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                        Contact
                    </h1>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.5)}
                >
                    <h3 className="text-[20px] text-white mb-11">
                        Have a Question? or Just want to say Hi? Drop me a message!
                    </h3>

                </motion.div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
