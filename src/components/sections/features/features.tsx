import Link from "next/link";
import { Card } from "@/components/ui/card";

export function FeaturesSection(){
    return(
    <section className="w-full py-16 bg-secondary/0">
        <div className="container">
        <h2 className="text-3xl font-medium mb-16 text-center">Unlock the Latest Enterprise AI</h2>

        <div className="flex justify-center">
            <div className="bg-black/70 rounded-xl overflow-hidden w-full mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-start">
                    <div className="mb-4 w-8 h-8 rounded-sm bg-muted flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Enterprise-Grade Security</h3>
                    <p className="text-muted-foreground">
                        Robust, industry-standard protection with zero training on your data.
                    </p>
                    </div>

                    <div className="flex flex-col items-start">
                    <div className="mb-4 w-8 h-8 rounded-sm bg-muted flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Advanced Insights</h3>
                    <p className="text-muted-foreground"> Have a conversation with your data and unlock meaningful insights.
                    </p>
                    </div>

                    <div className="flex flex-col items-start">
                    <div className="mb-4 w-8 h-8 rounded-sm bg-muted flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Organization-Specific Models</h3>
                    <p className="text-muted-foreground">
                        High-performing custom models built for your specific use-case.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    );
}
