"use client"
import { CareersForm } from "@/components/sections/careers/careers-form";

export function Careers(){
    return(
    <section className="w-full py-32 bg-transparent" id="careers">
        <div className="container mx-auto">
        <h2 className="text-5xl font-medium mb-6 text-center">Join Our Team</h2>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Are you a brilliant, relentless AI engineer? We're looking for exceptional talent to help us build the future of Enterprise AI.
        </p>

        <CareersForm />
        </div>
    </section>
    );
}