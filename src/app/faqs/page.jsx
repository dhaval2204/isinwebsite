import AppLayout from "@/components/AppLayout/AppLayout";
import FAQs from "@/components/FAQs/FAQs";

const FAQ = () => {
  return (
    <>
      <title>Questions and answers</title>
      <AppLayout>
        <section className="relative w-full py-10">
          <div className="container">
            <div className="grid grid-cols-1 gap-y-10">
              <div className="relative">
                <div className="relative w-full text-center">
                  <h2 className="text-4xl font-bold text-green-600 mb-2">
                    Questions and answers
                  </h2>
                </div>
              </div>
              <div className="relative">
                <FAQs />
              </div>
            </div>
          </div>
        </section>
      </AppLayout>
    </>
  );
};

export default FAQ;
