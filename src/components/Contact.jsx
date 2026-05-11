import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email message
    const emailSubject = `New Message from ${formData.name}`;
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:galitojohnlloyd29@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitStatus('success');
    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'galitojohnlloyd29@gmail.com',
      link: 'mailto:galitojohnlloyd29@gmail.com',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      value: 'John Lloyd Galito',
      link: 'https://www.facebook.com/johnlloyd.galito.33',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Butuan City, Agusan del Norte, Philippines',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/Kuyalloyd',
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/johnlloyd.galito.33',
    },
  ];

  return (
    <section id="contact" className="relative bg-transparent px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600 hover:border-orange-400 transition-all text-center group"
              >
                <Icon className="text-4xl text-orange-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                <p className="text-gray-300">{info.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full border-2 border-orange-400 flex items-center justify-center hover:bg-orange-400/20 transition-all"
                title={social.label}
              >
                <Icon className="text-2xl text-orange-400" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
            >
              ✓ Email client opened! Please send the message with your email address.
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-slate-600 text-white rounded border border-slate-500 focus:border-orange-400 outline-none focus:ring-2 focus:ring-orange-400/20"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-slate-600 text-white rounded border border-slate-500 focus:border-orange-400 outline-none focus:ring-2 focus:ring-orange-400/20"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-slate-600 text-white rounded border border-slate-500 focus:border-orange-400 outline-none focus:ring-2 focus:ring-orange-400/20"
                placeholder="Your message..."
                rows="5"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Opening Email...' : 'Send Message'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
