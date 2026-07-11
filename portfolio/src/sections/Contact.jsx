import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiLoader } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import MagneticButton from "../components/ui/MagneticButton";
import { profile } from "../data/resumeData";

// Fill these in with your own EmailJS credentials (https://www.emailjs.com/).
// Until configured, the form falls back to opening the user's email client.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const contactCards = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiMapPin, label: "Location", value: "Pune, Maharashtra", href: null },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;

    const isConfigured =
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

    if (!isConfigured) {
      // Fallback: open the visitor's mail client with a pre-filled message
      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio contact from ${name}`
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      return;
    }

    try {
      setStatus("sending");
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="section-pad relative py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          comment="// Contact"
          title="Let's build"
          highlight="something together."
          align="center"
          description="Have a role, a project, or just want to talk architecture? My inbox is open."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info */}
          <div className="space-y-4">
            {contactCards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="flex items-center gap-4 p-5" tilt={false}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet to-cyan text-white">
                    <c.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs opacity-55">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-medium hover:text-violet-light">
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-medium">{c.value}</p>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GlassCard className="p-5" tilt={false}>
                <p className="font-mono text-xs opacity-60">
                  <span className="text-violet-light">status</span>: currently in the
                  C-DAC PGCP-AC program — open to internship &amp; full-stack roles.
                </p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" type="text" required />
                <Field label="Your email" name="email" type="email" required />
              </div>
              <Field label="Subject" name="subject" type="text" />
              <Field label="Message" name="message" as="textarea" rows={5} required />

              <MagneticButton
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
              >
                {status === "sending" && (
                  <>
                    <FiLoader className="animate-spin" /> Sending…
                  </>
                )}
                {status === "sent" && (
                  <>
                    <FiCheck /> Message sent
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    Send message <FiSend />
                  </>
                )}
              </MagneticButton>
              {status === "error" && (
                <p className="text-xs text-red-400">
                  Something went wrong — please email me directly instead.
                </p>
              )}
            </GlassCard>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", as, rows, required }) {
  const Tag = as === "textarea" ? "textarea" : "input";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs opacity-60">{label}</span>
      <Tag
        name={name}
        type={as ? undefined : type}
        rows={rows}
        required={required}
        className="w-full rounded-xl border border-violet/15 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-40 focus:border-violet/50"
        placeholder={label}
      />
    </label>
  );
}
