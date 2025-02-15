import AppLayout from "@/components/AppLayout/AppLayout";
import { MailIcon, MapPinnedIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-5">
            <div className="relative">
              <div className="relative w-full space-y-5 mb-5">
                <h2 className="text-4xl font-bold">
                  Feel Free to Ask Questions
                </h2>
                <p>
                  Each individual, each team, each organization has its own,
                  unique set of challenges and goals. Whether you have a
                  question about our services or curious as to which of the
                  services cover your goals, use the contact details below. We
                  also welcome feedback!
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-12">
                      <div className="relative w-full h-full p-5 bg-[#f89939] text-white shadow rounded-md">
                        <div className="flex gap-5">
                          <span className="block">
                            <MapPinnedIcon size={28} />
                          </span>
                          <div>
                            <h4 className="text-lg font-bold mb-2">
                              ISIN Organization
                            </h4>
                            <p>
                              B1105 - 1108, K P Epitome, Nr. Makarba Lake, Nr.
                              Siddhi Vinayak Towers, Makarba, Ahmedabad -
                              380051.
                            </p>{" "}
                            size={28}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-12">
                      <div className="relative w-full h-full p-5 bg-[#f89939] text-white shadow rounded-md">
                        <div className="flex gap-5">
                          <span className="block">
                            <PhoneCallIcon />
                          </span>
                          <div>
                            <h4 className="text-lg font-bold mb-2">Phone</h4>
                            <p>+91-79-48000319</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-12">
                      <div className="relative w-full h-full p-5 bg-[#f89939] text-white shadow rounded-md">
                        <div className="flex gap-5">
                          <span className="block">
                            <MailIcon />
                          </span>
                          <div>
                            <h4 className="text-lg font-bold mb-2">Email</h4>
                            <p>investor@accuratesecurities.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default ContactUs;
