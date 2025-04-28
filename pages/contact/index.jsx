import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants"; // Keep your existing animations

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpopjrn"); // Your Formspree form ID

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Success message */}
          {state.succeeded ? (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center p-8 bg-accent/10 rounded-lg border border-accent/50"
            >
              <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
              <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            /* form */
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  disabled={state.submitting}
                  aria-disabled={state.submitting}
                  required
                  aria-required="true"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input"
                  disabled={state.submitting}
                  aria-disabled={state.submitting}
                  required
                  aria-required="true"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                disabled={state.submitting}
                aria-disabled={state.submitting}
                required
                aria-required="true"
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="textarea"
                disabled={state.submitting}
                aria-disabled={state.submitting}
                required
                aria-required="true"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={state.submitting}
                aria-disabled={state.submitting}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {state.submitting ? "Sending..." : "Let's talk"}
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden="true"
                />
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;