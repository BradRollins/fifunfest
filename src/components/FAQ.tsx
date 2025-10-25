import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What should I bring?",
      answer: "Pack comfortable outdoor clothing, insect repellent, hiking shoes, sunscreen, and any personal items you need. Bedding, linens and meals are provided. Don't forget your sense of adventure!"
    },
    {
      question: "Are pets really allowed?",
      answer: "Pets are welcome in cabins! If you’re sharing a cabin with someone outside your household, please coordinate in advance to make sure your roommate is comfortable with a pet.  All pets must remain on a leash when outside and under their owner’s control at all times.  Please notify us ahead of time if you plan to bring a pet so we can confirm appropriate accommodations."
    },
    {
      question: "What if I'm new to the FI community?",
      answer: "Perfect! This retreat is designed to welcome everyone, whether you're new to FI or a seasoned community member. It's all about connection and learning from each other."
    },
    {
      question: "Is there cell phone service?",
      answer: "Yes, there is cell service, but we encourage an 'unplugged' mindset to fully embrace the community experience and natural setting."
    },
    {
      question: "What's the weather like?",
      answer: "Florida weather can be variable. We recommend layered clothing and checking the forecast before you come. Indoor and covered outdoor spaces are available for all weather conditions."
    },
    {
      question: "Can I come alone?",
      answer: "Absolutely! The cabins are duplex style with 2 adults per side. If an attendee comes solo, they'll be paired with a roommate."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "We can accommodate most dietary needs. Please let us know of any restrictions or allergies at least 2 wks in advance, and the kitchen team at Montgomery Center should be able to accomodate most dietary needs."
    },
    {
      question: "Is there a refund policy?",
      answer: "Tickets are non-refundable, but they can be transferred or sold to another guest. You’ll be responsible for finding a buyer, though we’re happy to help connect you with someone if possible. If you plan to transfer your ticket, please let us know at least two weeks before the event so we can update our records and make sure everything runs smoothly. 💛"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-hero font-bold text-center mb-16 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-hero font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have more questions? We'd love to help!
            </p>
            <a 
              href="mailto:fifunfest@gmail.com" 
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Contact us at fifunfest@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;