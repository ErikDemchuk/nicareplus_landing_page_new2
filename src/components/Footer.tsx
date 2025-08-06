"use client"
import { motion } from "motion/react"
import { useState } from "react"

// Animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
}

const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
}

// Footer data
const footerData = {
  newsletter: {
    title: "Stay Connected",
    description: "Join our newsletter for the latest updates and exclusive offers.",
    placeholder: "Enter your email"
  },
  quickLinks: {
    title: "Quick Links",
    links: ["Home", "About Us", "Services", "Products", "Contact"]
  },
  contact: {
    title: "Contact Us",
    address: "123 Innovation Street",
    city: "Tech City, TC 12345",
    phone: "(123) 456-7890",
    email: "hello@example.com"
  },
  social: {
    title: "Follow Us",
    links: [
      { href: "#", label: "Facebook", icon: "📘" },
      { href: "#", label: "Twitter", icon: "🐦" },
      { href: "#", label: "Instagram", icon: "📷" },
      { href: "#", label: "LinkedIn", icon: "💼" },
    ]
  }
}

// Newsletter Section Component
const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-4">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl font-bold text-gray-900 mb-3"
      >
        {footerData.newsletter.title}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-600 text-sm leading-relaxed mb-4"
      >
        {footerData.newsletter.description}
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex gap-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={footerData.newsletter.placeholder}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

// Quick Links Section Component
const QuickLinksSection = () => (
  <motion.div variants={itemVariants} className="flex flex-col gap-2">
    <motion.h3
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-xl font-bold text-gray-900 mb-3"
    >
      {footerData.quickLinks.title}
    </motion.h3>
    {footerData.quickLinks.links.map((link, index) => (
      <motion.a
        key={index}
        variants={linkVariants}
        href="#"
        whileHover={{
          x: 8,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm group relative"
      >
        <span className="relative">
          {link}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </span>
      </motion.a>
    ))}
  </motion.div>
)

// Contact Section Component
const ContactSection = () => (
  <motion.div variants={itemVariants} className="flex flex-col gap-3">
    <motion.h3
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-xl font-bold text-gray-900 mb-3"
    >
      {footerData.contact.title}
    </motion.h3>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-2"
    >
      <p className="text-gray-600 text-sm">{footerData.contact.address}</p>
      <p className="text-gray-600 text-sm">{footerData.contact.city}</p>
      <p className="text-gray-600 text-sm">Phone: {footerData.contact.phone}</p>
      <p className="text-gray-600 text-sm">
        Email: <a href={`mailto:${footerData.contact.email}`} className="text-blue-600 hover:text-blue-800">{footerData.contact.email}</a>
      </p>
    </motion.div>
  </motion.div>
)

// Social Media Section Component
const SocialSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-4">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl font-bold text-gray-900 mb-3"
      >
        {footerData.social.title}
      </motion.h3>

      {/* Social Media Icons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
        className="flex gap-3 mb-4"
      >
        {footerData.social.links.map((social, index) => (
          <motion.a
            key={social.label}
            variants={socialVariants}
            href={social.href}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300 group"
            aria-label={social.label}
          >
            <span className="text-lg">{social.icon}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Dark/Light Mode Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="text-yellow-500 text-lg">☀️</span>
        <motion.button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className={`absolute top-1 w-4 h-4 rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-blue-400' : 'bg-white'
            }`}
            animate={{
              x: isDarkMode ? 24 : 4
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.button>
        <span className="text-blue-600 text-lg">🌙</span>
      </motion.div>
    </motion.div>
  )
}

export default function Footer() {
  return (
    <div className="relative h-[70vh]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100vh+70vh)] -top-[100vh]">
        <div className="h-[70vh] sticky top-[calc(100vh-70vh)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6 md:px-12 h-full w-full flex flex-col justify-center relative overflow-hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

            <motion.div
              variants={backgroundVariants}
              className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              variants={backgroundVariants}
              className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Footer Content */}
            <motion.div variants={containerVariants} className="relative z-10 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <NewsletterSection />
                <QuickLinksSection />
                <ContactSection />
                <SocialSection />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}