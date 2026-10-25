'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const MotionAmbientGlow: React.FC<{
  color: string
  className?: string
}> = ({ color, className }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.18, 1],
        opacity: [0.12, 0.24, 0.12]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${color} ${className}`}
    />
  )
}

export const MotionContainer: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const MotionHeroText: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const MotionHeroMedia: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const MotionStaggerList: React.FC<{
  children: React.ReactNode
  className?: string
  delay?: number
}> = ({ children, className, delay = 0.15 }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const MotionStaggerItem: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const MotionSection: React.FC<{
  children: React.ReactNode
  className?: string
  delay?: number
}> = ({ children, className, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export const MotionBackLink: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ x: -4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
