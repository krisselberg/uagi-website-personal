'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/page-layout";
import { SpaceBackground } from "@/components/animations/SpaceBackground";

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
  const [canSubmit, setCanSubmit] = useState(false);
  
  // Update validation whenever relevant fields change
  const validateForm = () => {
    if (shouldValidate) {
      setIsNameValid(name.trim() !== '');
      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.includes('.'));
      setIsJobTitleValid(jobTitle.trim() !== '');
      setIsOrganizationValid(organization.trim() !== '');
    }
    
    const isValid = name.trim() !== '' && 
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && 
                    jobTitle.trim() !== '' && 
                    organization.trim() !== '';
    
    setCanSubmit(isValid);
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
    
    // Trigger validation
    setShouldValidate(true);
    validateForm();
    
    // Check if form is valid
    if (!canSubmit) {
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
        message: helpRequest
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
      <main className="flex min-h-screen flex-col bg-transparent relative pt-20">
        {/* Space background for the entire page */}
        <div className="absolute inset-0 w-full h-full">
          <SpaceBackground starCount={300} speed={0.5} />
        </div>
        
        {/* Header Section */}
        <section className="w-full py-24 relative z-10">
          <div className="container relative max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-normal mb-6 text-white">
              Request a Demo
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Experience our enterprise-grade AI solutions tailored to your business needs
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 relative z-10">
          <div className="container max-w-3xl mx-auto">
            {isSubmitted ? (
              <Card className="group rounded-2xl border border-gray-800 hover:border-gray-700 backdrop-blur-sm bg-black/40 transition-all duration-500 p-16 w-full mx-auto overflow-hidden">
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#B3EBF2]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#B3EBF2]">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-medium mb-4 text-white group-hover:text-[#B3EBF2] transition-colors duration-300">
                    Request Submitted
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
                    Thank you for your interest in our services. Our team will contact you shortly to schedule your personalized demo.
                  </p>
                  <Button 
                    onClick={handleRequestAnother} 
                    className="rounded-full text-black/90 text-base px-6 py-3 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
                    style={{ 
                      background: 'linear-gradient(to right, #B3EBF2, #7dd8e6)',
                      boxShadow: '0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)'
                    }}
                  >
                    Request Another Demo
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="group rounded-2xl border border-gray-800 hover:border-gray-700 backdrop-blur-sm bg-black/40 transition-all duration-500 p-8 md:p-12 w-full mx-auto overflow-hidden">
                <form className="space-y-8" onSubmit={handleSubmit}>
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
                      className={`py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 ${!isNameValid && shouldValidate ? 'border-red-500' : ''}`}
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
                      className={`py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 ${!isEmailValid && shouldValidate ? 'border-red-500' : ''}`}
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
                      className={`py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 ${!isJobTitleValid && shouldValidate ? 'border-red-500' : ''}`}
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
                      className={`py-4 bg-black/60 border-gray-700 focus:border-[#B3EBF2]/70 focus:ring-[#B3EBF2]/20 ${!isOrganizationValid && shouldValidate ? 'border-red-500' : ''}`}
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
                      className="flex w-full rounded-md border border-gray-700 bg-black/60 px-3 py-4 text-base shadow-sm transition-colors placeholder:text-gray-500 focus:outline-none focus:border-[#B3EBF2]/70 focus:ring-1 focus:ring-[#B3EBF2]/20"
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
                      className="flex min-h-32 w-full rounded-md border border-gray-700 bg-black/60 px-3 py-3 text-base shadow-sm transition-colors placeholder:text-gray-500 focus:outline-none focus:border-[#B3EBF2]/70 focus:ring-1 focus:ring-[#B3EBF2]/20"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-center mt-12 w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
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
                        'Request Demo'
                      )}
                    </button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </section>
      </main>
    </PageLayout>
  );
} 