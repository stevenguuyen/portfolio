import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

export default function Contact() {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs.send(
      'service_lhvq11k',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formState.name,
        to_name: "Nguyen Tan Phat",
        from_email: formState.email,
        to_email: "contact@example.com",
        message: formState.message,
      },
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setLoading(false);
        setStatus({ type: "success", message: "Message sent!" });
        setFormState({ name: "", email: "", message: "" });
      }, (error) => {
        setLoading(false);
        console.error(error);
        setStatus({ type: "error", message: "Failed to send." });
      });
  };

  return (
    <section
      id="contact"
      className="h-screen snap-start flex flex-col justify-between relative z-10 pt-20 overflow-hidden"
    >
      <div className="flex-1 flex items-center justify-center w-full max-w-[1100px] mx-auto px-4">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full max-h-[500px]">


          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
            className="flex flex-col justify-start h-full p-6 bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact Me
            </h2>
            <p className="text-[#8b949e] mb-6 text-base">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>

            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/20 text-white shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[#c9d1d9] text-base">0775818141</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/20 text-white shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[#c9d1d9] text-base">ditconmemayhackcailon435@gmail.com</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">Social Platforms</h3>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/nguyen.tan.phat.165298/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/20 text-[#c9d1d9] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@daikanamky" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/20 text-[#c9d1d9] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://discord.gg/ygdKEThk" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/20 text-[#c9d1d9] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-7.6517 0 13.9113 13.9113 0 00-.616-1.1588.077.077 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                  </svg>
                </a>
                <a href="https://github.com/stevenguuyen" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full border border-white/20 text-[#c9d1d9] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
            className="flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl relative"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Send Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#c9d1d9] mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#c9d1d9] mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="block text-sm font-medium text-[#c9d1d9] mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full h-32 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(255,255,255,0.3)] text-sm disabled:opacity-50`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status.message && (
                <div className={`mt-4 p-3 rounded text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>

      <Footer />
    </section>
  );
}
