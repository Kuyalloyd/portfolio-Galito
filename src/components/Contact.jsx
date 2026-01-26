import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  // Initialize EmailJS (replace with your public key)
  // Get this from: https://dashboard.emailjs.com/
  const EMAILJS_PUBLIC_KEY = 'xmVDz6LpgikOHGZBl';
  const EMAILJS_SERVICE_ID = 'service_13e7m4t';
  const EMAILJS_TEMPLATE_ID_ADMIN = 'template_3zh0gh8'; // Admin template (what you receive)
  const EMAILJS_TEMPLATE_ID_USER = 'template_1hsp6sh'; // User template (confirmation email)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Email 1: Send to your personal email (admin template)
      const adminEmailParams = {
        to_email: 'john.lloyd@urios.edu.ph',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_ADMIN,
        adminEmailParams
      );

      // Email 2: Send confirmation to the user (user template)
      const userEmailParams = {
        to_email: formData.email,
        from_name: formData.name,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_USER,
        userEmailParams
      );

      console.log('Emails sent successfully!');
      setSubmitted(true);
      setSubmittedEmail(formData.email);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'john.lloyd@urios.edu.ph',
      href: 'mailto:john.lloyd@urios.edu.ph',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '0939 ayg too',
      href: '',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'libertad, butuan city, brgy: Ambago',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Work Together?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I'm always interested in discussing new projects, opportunities, and partnerships. Feel free to reach out through any channel below, and I'll get back to you within 24 hours.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 border-l-2 border-primary bg-gray-200/50 dark:bg-slate-900/40 rounded-lg hover:bg-gray-300/50 dark:hover:bg-slate-800/60 transition-all"
                >
                  <div className="text-2xl text-primary">
                    <IconComponent />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-500 text-sm">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-semibold hover:text-secondary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-primary/20 rounded-xl p-8 transition-colors duration-300"
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-900 dark:text-white font-semibold mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-slate-700 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-gray-900 dark:text-white transition-all"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-900 dark:text-white font-semibold mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-slate-700 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-gray-900 dark:text-white transition-all"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-900 dark:text-white font-semibold mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-slate-700 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-gray-900 dark:text-white transition-all resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⏳</span> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
              >
                <div>✓ Message sent successfully!</div>
                <div className="text-sm mt-2">Confirmation sent to: <span className="font-semibold">{submittedEmail}</span></div>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center"
              >
                ✗ {error}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
