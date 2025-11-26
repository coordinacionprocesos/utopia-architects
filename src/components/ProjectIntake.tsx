import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Building2, GitBranch, ArrowRight, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

type AssetType = 'fix-flip' | 'new-construction' | 'bridge' | null;

interface FormData {
  assetType: AssetType;
  address: string;
  loanAmount: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
}

const assetTypes = [
  { id: 'fix-flip' as const, label: 'Fix & Flip', icon: Hammer, description: 'Renovation funding' },
  { id: 'new-construction' as const, label: 'New Construction', icon: Building2, description: 'Ground-up projects' },
  { id: 'bridge' as const, label: 'Bridge', icon: GitBranch, description: 'Short-term capital' },
];

const loanAmounts = [
  'Under $250k',
  '$250k - $500k',
  '$500k - $1M',
  '$1M - $2M',
  '$2M+',
];

export default function ProjectIntake() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    assetType: null,
    address: '',
    loanAmount: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const canProceedStep1 = formData.assetType !== null;
  const canProceedStep2 = formData.address && formData.loanAmount && formData.timeline;
  const canProceedStep3 = formData.name && formData.email && formData.phone;

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto glass-strong rounded-sm p-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" />
          <h3 className="text-3xl font-cinzel font-bold mb-4">Application Received</h3>
          <p className="text-muted-foreground font-grotesk text-lg mb-2">
            Your project intake has been logged.
          </p>
          <p className="text-sm text-muted-foreground/60 font-mono">
            Reference: UTX-{Date.now().toString().slice(-6)}
          </p>
          <p className="text-sm text-muted-foreground/60 font-grotesk mt-6">
            Our underwriting team will contact you within 24 hours.
          </p>
        </motion.div>
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className="w-full max-w-2xl mx-auto glass-strong rounded-sm p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="w-12 h-12 text-gold mx-auto mb-6 animate-spin" />
          <h3 className="text-2xl font-cinzel font-bold mb-2">Underwriting Algorithm Initiated</h3>
          <p className="text-muted-foreground font-grotesk">
            Analyzing asset parameters...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto glass-strong rounded-sm p-8 md:p-12">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm transition-all ${
                s <= step
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-border text-muted-foreground'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-0.5 mx-2 transition-all ${
                  s < step ? 'bg-gold' : 'bg-border'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <h2 className="text-3xl font-cinzel font-bold mb-2">Asset Classification</h2>
              <p className="text-muted-foreground font-grotesk mb-8">
                Select your project type
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {assetTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.assetType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, assetType: type.id })}
                      className={`p-6 rounded-sm border transition-all text-left ${
                        isSelected
                          ? 'border-gold bg-gold/5 shadow-gold-glow'
                          : 'border-border hover:border-gold/50 glass-weak'
                      }`}
                    >
                      <Icon className={`w-10 h-10 mb-4 ${isSelected ? 'text-gold' : 'text-muted-foreground'}`} />
                      <h3 className="font-grotesk font-semibold mb-1">{type.label}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <h2 className="text-3xl font-cinzel font-bold mb-2">The Numbers</h2>
              <p className="text-muted-foreground font-grotesk mb-8">
                Project specifications
              </p>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-grotesk text-muted-foreground mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Enter full address"
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground font-grotesk focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-grotesk text-muted-foreground mb-2">
                    Loan Amount Required
                  </label>
                  <select
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground font-grotesk focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select range</option>
                    {loanAmounts.map((amount) => (
                      <option key={amount} value={amount}>
                        {amount}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-grotesk text-muted-foreground mb-2">
                    Project Timeline (Months)
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g., 6-12 months"
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground font-grotesk focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <h2 className="text-3xl font-cinzel font-bold mb-2">Identity</h2>
              <p className="text-muted-foreground font-grotesk mb-8">
                Contact information
              </p>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-grotesk text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground font-grotesk focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-grotesk text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground font-grotesk focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-grotesk text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(210) 284-0647"
                    className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground font-grotesk focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-grotesk"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {step < 3 ? (
          <MagneticWrapper strength={0.3}>
            <button
              onClick={nextStep}
              disabled={
                (step === 1 && !canProceedStep1) ||
                (step === 2 && !canProceedStep2)
              }
              className="flex items-center gap-2 px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-midnight transition-all disabled:opacity-30 disabled:cursor-not-allowed font-grotesk rounded-sm"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticWrapper>
        ) : (
          <MagneticWrapper strength={0.3}>
            <button
              onClick={handleSubmit}
              disabled={!canProceedStep3}
              className="flex items-center gap-2 px-6 py-3 bg-gold text-midnight hover:shadow-gold-glow transition-all disabled:opacity-30 disabled:cursor-not-allowed font-grotesk rounded-sm font-semibold"
            >
              Submit Application
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticWrapper>
        )}
      </div>
    </div>
  );
}
