import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Send, Github, Linkedin, CheckCircle, Terminal } from 'lucide-react';

interface ContactProps {
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
}

export default function Contact({ email, phone, github, linkedin }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, `[system] ${message}`]);
        resolve();
      }, delay);
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setLogs([]);

    // Fun terminal log simulation before success!
    await addLog("Initiating handshakes...", 200);
    await addLog("Validating secure envelope configuration...", 300);
    await addLog(`Serializing data packet from: ${formData.email}`, 300);
    await addLog("Routing through smtp gateway host...", 400);
    await addLog("Message successfully delivered.", 400);

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F5F5] border-t border-[#D1D1D1] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E1E1E2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_80%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D1D1D1] font-mono text-[9px] font-bold tracking-widest text-[#1A1A1A] uppercase mb-4 shadow-sm"
          >
            <Mail size={12} />
            Secure Transmission
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light tracking-tight text-[#1A1A1A]"
          >
            Connect With <span className="italic font-serif">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-500 font-mono text-[10px] font-bold uppercase tracking-wider mt-2.5"
          >
            Collaborative inquiries, technical opportunities, or open software positions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct channels */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6 p-6 sm:p-8 rounded bg-white border border-[#D1D1D1] shadow-sm">
            <div className="space-y-6">
              <h3 className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-widest mb-2">
                Available Protocols
              </h3>
              
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-3.5 rounded bg-[#F5F5F5] border border-[#D1D1D1] hover:border-[#1A1A1A] transition-colors group"
                >
                  <Mail size={16} className="text-neutral-500 group-hover:text-[#1A1A1A]" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase">SMTP Email</span>
                    <span className="text-xs text-[#1A1A1A] font-semibold">{email}</span>
                  </div>
                </a>

                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 p-3.5 rounded bg-[#F5F5F5] border border-[#D1D1D1] hover:border-[#1A1A1A] transition-colors group"
                  >
                    <Phone size={16} className="text-neutral-500 group-hover:text-[#1A1A1A]" />
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase">Direct Line</span>
                      <span className="text-xs text-[#1A1A1A] font-semibold">{phone}</span>
                    </div>
                  </a>
                )}

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded bg-[#F5F5F5] border border-[#D1D1D1] hover:border-[#1A1A1A] transition-colors group"
                >
                  <Github size={16} className="text-neutral-500 group-hover:text-[#1A1A1A]" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase">GitHub Profile</span>
                    <span className="text-xs text-[#1A1A1A] font-semibold">github.com/sundus suleiman</span>
                  </div>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded bg-[#F5F5F5] border border-[#D1D1D1] hover:border-[#1A1A1A] transition-colors group"
                >
                  <Linkedin size={16} className="text-neutral-500 group-hover:text-[#1A1A1A]" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase">LinkedIn Sync</span>
                    <span className="text-xs text-[#1A1A1A] font-semibold">linkedin.com/in/sundus suleiman</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-[9px] font-mono font-bold text-neutral-400 border-t border-[#D1D1D1] pt-4 mt-6 uppercase tracking-wider">
              Remote First • open globally
            </div>
          </div>

          {/* Right Column: Interactive Form or Transmission Terminal */}
          <div className="md:col-span-7 rounded bg-white border border-[#D1D1D1] p-6 sm:p-8 flex flex-col justify-center overflow-hidden min-h-[360px] shadow-sm">
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                      Client Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Jane Thorne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D1D1D1] focus:border-[#1A1A1A] focus:outline-none text-xs text-[#1A1A1A] transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                      Secure Mailbox
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D1D1D1] focus:border-[#1A1A1A] focus:outline-none text-xs text-[#1A1A1A] transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-1.5">
                      Message Packet Specs
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline collaboration scope or potential work opportunities..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-[#D1D1D1] focus:border-[#1A1A1A] focus:outline-none text-xs text-[#1A1A1A] transition-colors font-mono resize-none font-light"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#1A1A1A] hover:bg-neutral-800 text-white font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-md"
                  >
                    <Send size={11} />
                    <span>Submit</span>
                  </button>
                </motion.form>
              )}

              {status === 'sending' && (
                <motion.div
                  key="sending-logs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#F5F5F5] border border-[#D1D1D1] p-4 rounded h-full min-h-[300px] flex flex-col justify-between font-mono"
                >
                  <div className="space-y-1.5 text-[10px] text-neutral-600 overflow-y-auto max-h-[220px]">
                    <div className="text-neutral-400 mb-2 flex items-center gap-1.5">
                      <Terminal size={12} />
                      <span>transmission_handshake_daemon...</span>
                    </div>
                    {logs.map((log, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="leading-relaxed"
                      >
                        {log}
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-center text-[9px] text-[#1A1A1A] font-bold mt-4 animate-pulse uppercase tracking-widest">
                    Routing Packets...
                  </div>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8 space-y-4 font-mono text-[#1A1A1A]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                    className="mx-auto w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600"
                  >
                    <CheckCircle size={24} />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">
                      Dispatched Successfully!
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed max-w-sm mx-auto font-light">
                      The packet specs have been serialized. I will review and reply to your mailbox as soon as possible.
                    </p>
                  </div>

                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 rounded border border-[#D1D1D1] bg-white hover:bg-[#F5F5F5] text-[10px] font-bold text-neutral-500 hover:text-[#1A1A1A] transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    Reopen Port
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
