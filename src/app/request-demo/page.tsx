'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageNavigationArrow } from "@/components/ui/page-navigation-arrow";
import { PageLayout } from "@/components/layout/page-layout";


export default function RequestDemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [source, setSource] = useState("");
  const [helpRequest, setHelpRequest] = useState("");
  
  // State to track if validation should run
  const [shouldValidate, setShouldValidate] = useState(false);
  
  // Derived state for validation
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isJobTitleValid, setIsJobTitleValid] = useState(true);
  const [isOrganizationValid, setIsOrganizationValid] = useState(true);
  
  // Update validation whenever relevant fields change
  const validateForm = () => {
    if (shouldValidate) {
      setIsNameValid(name.trim() !== '');
      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.includes('.'));
      setIsJobTitleValid(jobTitle.trim() !== '');
      setIsOrganizationValid(organization.trim() !== '');
    }
  };
  
  const resetForm = () => {
    setName("");
    setEmail("");
    setJobTitle("");
    setOrganization("");
    setSource("");
    setHelpRequest("");
    setErrorMessage(null);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setShouldValidate(true);
    const isValid =
      name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+$/.test(email) &&
      email.includes('.') &&
      jobTitle.trim() !== '' &&
      organization.trim() !== '';
    if (!isValid) {
      validateForm();
      return;
    }
  
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      // Split name into first and last name (best effort)
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Prepare the payload for the API
      const payload = {
        firstName,
        lastName,
        email,
        company: organization,
        title: jobTitle,
        message: helpRequest,
        source
      };

      // Send data to the API endpoint
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit request');
      }
      
      // Success
      const data = await response.json();
      if (data.calendly) {
        window.location.assign(data.calendly);
        return;
      }
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      // Handle error
      setErrorMessage(typeof error === 'string' ? error : 
                     (error instanceof Error ? error.message : 
                     "An unexpected error occurred. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleRequestAnother = () => {
    setIsSubmitted(false);
  };
  
  return (
    <PageLayout>
      {/* Background for the entire page */}
      <div className="fixed inset-0 w-full h-screen -z-10 bg-black"></div>
      
      <section className="w-full relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
          
          {/* Gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#B3EBF2]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7dd8e6]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight">
              Request a Demo
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience our enterprise-grade AI solutions—
              <span className="text-[#B3EBF2]"> tailored to your business needs </span>
              with personalized demonstrations and expert guidance.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="relative group">
                <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-12 sm:p-16 text-center transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <div className="w-20 h-20 bg-[#B3EBF2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#B3EBF2]">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-normal mb-4 text-white group-hover:text-[#B3EBF2] transition-colors duration-300">
                    Request Submitted
                  </h3>
                  <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
                    Thank you for your interest in our services. Our team will contact you shortly to schedule your personalized demo.
                  </p>
                  <Button 
                    onClick={handleRequestAnother} 
                    className="rounded-full text-black/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-semibold border-0 transition-all duration-300 hover:shadow-glow hover:scale-105"
                    style={{ 
                      background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
                      boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
                    }}
                  >
                    Request Another Demo
                    <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Button>
                </div>
                {/* Background Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B3EBF2]/20 via-transparent to-[#B3EBF2]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10"></div>
              </div>
            ) : (
              <div className="relative group">
                <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 sm:p-12 transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="bg-red-900/30 border border-red-500/50 text-red-100 py-3 px-4 rounded-md mb-6">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-base font-medium mb-2 text-gray-200">
                      Full Name <span className="text-[#B3EBF2]">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name" 
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (shouldValidate) validateForm();
                      }}
                      className={`py-4 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 transition-all duration-300 ${!isNameValid && shouldValidate ? 'border-red-500' : ''}`}
                    />
                    {!isNameValid && shouldValidate && (
                      <p className="text-red-400 text-sm mt-1">Please enter your name</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-base font-medium mb-2 text-gray-200">
                      Business Email <span className="text-[#B3EBF2]">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@company.com" 
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (shouldValidate) validateForm();
                      }}
                      className={`py-4 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 transition-all duration-300 ${!isEmailValid && shouldValidate ? 'border-red-500' : ''}`}
                    />
                    {!isEmailValid && shouldValidate && (
                      <p className="text-red-400 text-sm mt-1">Please enter a valid business email</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="jobTitle" className="block text-base font-medium mb-2 text-gray-200">
                      Job Title <span className="text-[#B3EBF2]">*</span>
                    </label>
                    <Input 
                      id="jobTitle" 
                      placeholder="Your position at the company" 
                      value={jobTitle}
                      onChange={(e) => {
                        setJobTitle(e.target.value);
                        if (shouldValidate) validateForm();
                      }}
                      className={`py-4 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 transition-all duration-300 ${!isJobTitleValid && shouldValidate ? 'border-red-500' : ''}`}
                    />
                    {!isJobTitleValid && shouldValidate && (
                      <p className="text-red-400 text-sm mt-1">Please enter your job title</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-base font-medium mb-2 text-gray-200">
                      Organization <span className="text-[#B3EBF2]">*</span>
                    </label>
                    <Input 
                      id="organization" 
                      placeholder="Company or organization name" 
                      value={organization}
                      onChange={(e) => {
                        setOrganization(e.target.value);
                        if (shouldValidate) validateForm();
                      }}
                      className={`py-4 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 transition-all duration-300 ${!isOrganizationValid && shouldValidate ? 'border-red-500' : ''}`}
                    />
                    {!isOrganizationValid && shouldValidate && (
                      <p className="text-red-400 text-sm mt-1">Please enter your organization</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="source" className="block text-base font-medium mb-2 text-gray-200">
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="flex w-full rounded-md border border-white/20 bg-white/5 text-white px-3 py-4 text-base shadow-sm transition-all duration-300 focus:outline-none focus:border-[#B3EBF2]/70 focus:ring-1 focus:ring-[#B3EBF2]/20"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="web_search">Web search</option>
                      <option value="social_media">Social media</option>
                      <option value="colleague">Colleague recommendation</option>
                      <option value="conference">Conference or event</option>
                      <option value="publication">Industry publication</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="helpRequest" className="block text-base font-medium mb-2 text-gray-200">
                      How can we help?
                    </label>
                    <textarea 
                      id="helpRequest"
                      placeholder="Tell us more about your needs and what you're looking to achieve with our solution"
                      value={helpRequest}
                      onChange={(e) => setHelpRequest(e.target.value)}
                      className="flex min-h-32 w-full rounded-md border border-white/20 bg-white/5 text-white placeholder:text-gray-400 px-3 py-3 text-base shadow-sm transition-all duration-300 focus:outline-none focus:border-[#B3EBF2]/70 focus:ring-1 focus:ring-[#B3EBF2]/20 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-center mt-8 w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full text-black/90 text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 font-semibold border-0 transition-all duration-300 hover:shadow-glow hover:scale-105 flex items-center justify-center min-w-[160px]"
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
                        <>
                          Request Demo
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                  </form>
                </div>
                {/* Background Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B3EBF2]/20 via-transparent to-[#B3EBF2]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10"></div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="bg-black">
        <PageNavigationArrow />
      </section>
    </PageLayout>
  );
} 