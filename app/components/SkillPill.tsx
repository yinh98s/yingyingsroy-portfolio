'use client';

import { motion } from 'framer-motion';

export default function SkillPill({ label }: { label: string }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, backgroundColor: '#DBEAFE', color: '#1E40AF' }} // Light blue hover
            className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200
        transition-colors duration-300 shadow-sm"
        >
            {label}
        </motion.span>
    );
}
