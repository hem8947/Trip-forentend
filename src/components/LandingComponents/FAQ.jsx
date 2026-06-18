import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="px-20 py-20 w-1/2 mx-auto ">
      {/* heading */}

      <div className="text-5xl font-bold text-center mb-16">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="space-y-6">
        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
          <AccordionItem value="item-1" className="border border-gray-300 rounded-2xl px-2 ">
            <AccordionTrigger>How to invite Collaborators?</AccordionTrigger>
            <AccordionContent>
              To invite collaborators, simply go to your project settings and
              click on the "Invite Collaborators" button. You can then enter
              their email addresses and send them an invitation to join your
              project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border border-gray-300 rounded-2xl px-2">
            <AccordionTrigger>How to reset my password?</AccordionTrigger>
            <AccordionContent>
              To reset your password, click on the "Forgot Password" link on the
              login page. Enter your registered email address, and we will send
              you instructions to reset your password.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border border-gray-300 rounded-2xl px-2">
            <AccordionTrigger>
              How to contact customer support?
            </AccordionTrigger>
            <AccordionContent>
              You can contact our customer support team by clicking on the
              "Contact Us" link in the footer of our website. We are available
              24/7 to assist you with any inquiries or issues you may have.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border border-gray-300 rounded-2xl px-2">
            <AccordionTrigger>
              How to update my profile information?
            </AccordionTrigger>
            <AccordionContent>
              To update your profile information, go to your account settings
              and click on the "Edit Profile" button. You can then modify your
              personal details, contact information, and other preferences.
            </AccordionContent>
          </AccordionItem >
          <AccordionItem value="item-5" className="border border-gray-300 rounded-2xl px-2">
            <AccordionTrigger>How to cancel my subscription?</AccordionTrigger>
            <AccordionContent>
              To cancel your subscription, go to your account settings and click
              on the "Subscription" tab. From there, you can manage your
              subscription and choose to cancel it if you no longer wish to
              continue.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
