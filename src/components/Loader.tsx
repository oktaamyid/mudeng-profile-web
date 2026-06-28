import { motion } from 'framer-motion';
const mudengLogo = 'https://cdn.mudeng.oktaa.my.id/logo/logo-mudeng.svg';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white/60 backdrop-blur-2xl overflow-hidden"
    >
      {/* Animated Gradient Clouds Background */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [0, 40, 0], 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1], 
          x: [0, -40, 0], 
          y: [0, 40, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full bg-primary-light/30 blur-[130px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.4, 0.7, 0.4] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/70 blur-[100px]"
      />

      {/* Foreground Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo dengan efek "breathing/pulsing" */}
        <motion.img
          src={mudengLogo}
          alt="MUDENG Loading"
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1, 0.98] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-10 h-10 object-contain drop-shadow-xl md:h-14"
        />

        {/* Progress Bar Elegan */}
        <div className="relative h-[3px] w-56 overflow-hidden rounded-full bg-primary/10 shadow-inner">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 top-0 w-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(79,55,179,0.6)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
