import { Button } from "@/components/ui/button";

export function CTA(){
    return (
    <section className="w-full py-16">
        <div className="container">
        <h3 className="text-2xl font-normal text-center mb-8">
            Enterprise AI, tailored to your needs.
        </h3>
        <div className="flex justify-center">
            <Button 
              className="rounded-full text-black/90 text-xs sm:text-base md:text-lg px-3 py-5 sm:px-5 md:px-6 sm:py-5 md:py-6 font-semibold border-0 transition-all duration-300 hover:shadow-glow"
              style={{
                background: "linear-gradient(to right, #B3EBF2, #7dd8e6)",
                boxShadow:
                  "0 4px 14px rgba(123, 216, 230, 0.5), 0 0 20px rgba(179, 235, 242, 0.3)",
              }}
            >
              <a href="/request-demo">Request a Demo</a>
            </Button>
        </div>
        </div>
    </section>
    );
}