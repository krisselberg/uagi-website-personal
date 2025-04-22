import { Button } from "@/components/ui/button";

export function CTA(){
    return (
    <section className="w-full py-16">
        <div className="container">
        <h3 className="text-2xl font-medium text-center mb-8">
            Enterprise AI, tailored to your needs.
        </h3>
        <div className="flex justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-4 py-2 rounded-full font-bold">
              <a href="/request-demo">Request a Demo</a>
            </Button>
        </div>
        </div>
    </section>
    );
}