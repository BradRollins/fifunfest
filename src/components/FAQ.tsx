import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I come alone?",
      answer: "Absolutely! We would love to have you. The cabins are duplex-style, with each side accommodating up to 2 adults, plus any children staying with their parent(s). Each side has its own bathroom with showers and AC. Spouses/partners will automatically be paired together. If you're coming solo, you'll be paired with another attendee. If you've already made arrangements to room with a specific attendee, just let us know in advance — preferably at least two weeks before the event — and we'll make sure you're paired together."
    },
    {
      question: "Can I bring my children?",
      answer: "Absolutely! FI FunFest is family-friendly, though the weekend is designed more around adult connection and community than kid-focused programming. Children will stay in the cabin with their parent(s). If you're bringing children, please be sure to add a ticket for each child when purchasing, including children ages 0–4 (whose tickets are free), so everyone is registered under your reservation."
    },
    {
      question: "Are pets allowed?",
      answer: "Absolutely! Pets are welcome at FI FunFest. They are allowed in the cabins and on the grounds, but are not permitted inside the Dining Hall. For everyone's comfort and safety, we require that pets be kept on a leash when outside and under their owner's control at all times. If you're sharing a cabin with someone outside your household, please let us know when you register that you'll be bringing a pet or if you're not comfortable sharing a cabin with one. If we pair you with a roommate, we'll take those preferences into consideration when making roommate assignments. If you've already arranged your own roommate, please make sure everyone sharing the cabin is comfortable with any pets staying there. There is no additional charge for pets."
    },
    {
      question: "What if I'm new to the FI community?",
      answer: "Perfect! FI FunFest is for anyone with an interest in financial independence, intentional living, or the FI community — whether you're just getting started or you've been on the journey for years. You don't need to be an FI expert or know anyone when you arrive. We're here to build a closer community through laughter, meaningful conversations, and making memories together. And if you're joining us as the partner of someone on the FI journey, we're excited to show you that the FI community is about so much more than numbers and spreadsheets!"
    },
    {
      question: "What should I bring?",
      answer: "Pack comfortable outdoor clothing, insect repellent, hiking or comfortable walking shoes, sunscreen, and any personal items you need. Bedding and linens are provided, but if you prefer a little extra cushioning, you may want to bring a mattress pad, sleeping bag, or air mattress. A flashlight or headlamp is also strongly recommended — it gets very dark around the grounds at night! And don't forget your sense of adventure!"
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "We can accommodate most dietary needs. When purchasing your ticket, please let us know about any food restrictions or allergies so the kitchen team at Montgomery Center can plan accordingly."
    },
    {
      question: "What's the weather like?",
      answer: "November weather in Florida can be variable. We recommend bringing layers and checking the forecast before you come. Indoor and covered outdoor spaces are available, so we'll make the most of the weekend whatever the weather brings!"
    },
    {
      question: "Is there cell phone service?",
      answer: "Yes, there is cell service at Montgomery Center. We encourage an 'unplugged' mindset, though, so you can fully enjoy the community experience, beautiful surroundings, and time together."
    },
    {
      question: "Is there a refund policy?",
      answer: "Tickets are non-refundable, but they may be transferred or sold to another guest. If you can no longer attend, you're responsible for finding a replacement attendee and arranging payment directly with them. Once you've made arrangements, please let us know at least two weeks before the event so we can update the registration and make sure everything runs smoothly. While we can't guarantee that we'll find a replacement for you, we're happy to help connect you with a potential replacement if possible."
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