import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 xl:flew-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl bg-gray-400 border border-slate-400 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30"
      >
        <h3 className={`${styles.sectionHeadText} ${styles.jpHeadText}`}>
          連絡
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">お名前</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="お名前をご記入ください。"
              className="py-4 px-6 placeholder:text-slate border border-slate-100 text-white rounded-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">メール</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="メールアドラスをご記入ください。"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">メッセージ</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="メッセージをお書きください。"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "送信中" : "送信"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
