import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/components/accordion";
import faqs from "@/lib/json/faqs.json";

const FAQs = ({ sliced }) => {
  if (sliced) {
    return (
      <Accordion type="single" collapsible className="border border-green-600 rounded-md overflow-hidden">
        {faqs?.slice(0, sliced).map((faq, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="last:border-b-0"
          >
            <AccordionTrigger className="text-start">{faq?.que}</AccordionTrigger>
            <AccordionContent>{faq?.ans}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  } else {
    return (
      <Accordion type="single" collapsible className="border border-green-600 rounded-md overflow-hidden">
        {faqs?.map((faq, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="last:border-b-0"
          >
            <AccordionTrigger className="text-start">{faq?.que}</AccordionTrigger>
            <AccordionContent>{faq?.ans}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
};

export default FAQs;
