"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [achievements, setAchievements] = useState("");
  
  // State to track if validation should run (e.g., after first submit attempt or on blur)
  const [shouldValidate, setShouldValidate] = useState(false);
  
  // Derived state for validation
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [canSubmit, setCanSubmit] = useState(false);
  
  // Update validation whenever relevant fields change
  useEffect(() => {
    // Only run validation if shouldValidate is true
    if (shouldValidate) {
      setIsNameValid(name.trim() !== '');
      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      setIsPhoneValid(phone === '' || /^\+?[\d\s\(\)-]{7,}$/.test(phone));
    }
    
    // Always update canSubmit
    const isValid = name.trim() !== '' && 
                      email.trim() !== '' && 
                      isEmailValid && 
                      isPhoneValid && 
                      achievements.trim() !== '';
    setCanSubmit(isValid);
  }, [name, email, phone, achievements, shouldValidate, isEmailValid, isPhoneValid]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
    setAchievements("");
    setErrorMessage(null);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Trigger validation
    setShouldValidate(true);
    
    // Check if form is valid
    if (!canSubmit) {
      return;
    }
  
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          linkedin,
          github,
          achievements,
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }
      
      // Success - form submitted
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      // Handle submission error
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSubmitAnother = () => {
    setIsSubmitted(false);
  };
  
  if (isSubmitted) {
    return (
      <Card className="group rounded-2xl border border-gray-800 hover:border-gray-700 backdrop-blur-sm bg-black/40 transition-all duration-500 p-16 w-full mx-auto overflow-hidden">
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-[#B3EBF2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#B3EBF2]">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-3xl font-medium mb-4 text-white group-hover:text-[#B3EBF2] transition-colors duration-300">Application Submitted</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
            Thank you for your interest in joining our team. We'll review your application and get back to you soon.
          </p>
          <Button 
            onClick={handleSubmitAnother} 
            className="rounded-full text-black/90 text-base px-6 py-3 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
            style={{ 
              background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
              boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
            }}
          >
            Submit Another Application
          </Button>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className="group rounded-2xl border border-gray-800 hover:border-gray-700 backdrop-blur-sm bg-black/40 transition-all duration-500 p-8 md:p-12 lg:p-16 w-full mx-auto overflow-hidden">
      <form className="space-y-8" onSubmit={handleSubmit}>
        {errorMessage && (
          <div className="bg-red-900/30 border border-red-500/50 text-red-100 py-3 px-4 rounded-md mb-6">
            {errorMessage}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-base font-medium mb-2 text-gray-200">Full Name <span className="text-[#B3EBF2]">*</span></label>
            <Input 
              id="name" 
              placeholder="Enter your full name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium mb-2 text-gray-200">Email Address <span className="text-[#B3EBF2]">*</span></label>
            <Input 
              id="email" 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-base font-medium mb-2 text-gray-200">Phone Number <span className="text-[#B3EBF2]">*</span></label>
            <Input 
              id="phone" 
              placeholder="Enter your phone number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-base font-medium mb-2 text-gray-200">
              LinkedIn URL
            </label>
            <Input 
              id="linkedin" 
              placeholder="https://linkedin.com/in/yourprofile" 
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="github" className="block text-base font-medium mb-2 text-gray-200">
            GitHub URL
          </label>
          <Input 
            id="github" 
            placeholder="https://github.com/yourusername" 
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20"
          />
        </div>
        
        <div>
          <label htmlFor="achievements" className="block text-base font-medium mb-2 text-gray-200">Key Achievements (2-3 bullet points) <span className="text-[#B3EBF2]">*</span></label>
          <textarea 
            id="achievements" 
            className="flex min-h-48 w-full rounded-md border border-gray-700 bg-black/60 px-3 py-3 text-base shadow-sm transition-colors placeholder:text-gray-500 focus:outline-none focus:border-[#B3EBF2]/70 focus:ring-1 focus:ring-[#B3EBF2]/20" 
            placeholder={`• Developed a machine learning model that improved performance by 30%
• Led a team of 5 engineers to deliver a critical project
• Published research on [topic] in [journal/conference]`}
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          ></textarea>
        </div>
       
        
        <div className="flex justify-center mt-12 w-full">
          <button
            type="submit"
            disabled={isSubmitting || !canSubmit}
            className="rounded-full text-black/90 text-base px-6 py-3 font-semibold border-0 transition-all duration-300 hover:shadow-glow flex items-center justify-center"
            style={{ 
              background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
              boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
            }}
          >
            {isSubmitting ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black/90 border-t-transparent" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>
      </form>
    </Card>
  );
} 