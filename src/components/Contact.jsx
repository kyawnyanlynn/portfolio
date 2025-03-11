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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1l4m46k",
        "template_a3kd8hf",
        {
          from_name: form.name,
          to_name: "Lynn",
          from_email: form.email,
          to_email: "contact@jsmastery.pro",
          message: form.message,
        },
        "ByH0E8Btrujj7OsA6"
      )
      .then(
        () => {
          setLoading(false);
          alert("ご送信、ありがとうございました。");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("申し訳ございません、何かがうまくいきませんでした。");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flew-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl card border border-[#e7e2e2] border-opacity-20"
      >
        <h3 className={`${styles.sectionHeadText} ${styles.jpHeadText}`}>
          Contact
        </h3>
        <p className="mt-3 text-[#e7e2e2] text-[17px] max-x-3xl leading-[30px]">
          ご興味を持っていただき誠にありがとうございます。ご質問などがあれば気軽にお問い合わせください。
        </p>
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
              className="py-4 px-6 placeholder:text-[#e7e2e297] border border-[#e7e2e2] border-opacity-30 text-white rounded-lg font-medium"
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
              className="py-4 px-6 placeholder:text-[#e7e2e297] border border-[#e7e2e2] border-opacity-30 text-white rounded-lg font-medium"
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
              className="py-4 px-6 placeholder:text-[#e7e2e297] border border-[#e7e2e2] border-opacity-30 text-white rounded-lg font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#000000] border border-[#e7e2e2] border-opacity-30 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "送信中" : "送信"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
