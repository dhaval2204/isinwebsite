import AppLayout from "@/components/AppLayout/AppLayout";
import React from "react";

const IsinDetails = () => {
  return (
    <AppLayout>
      <section className="relative w-full py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <div className="relative w-full text-center">
                <h2 className="text-4xl font-bold text-green-600 mb-2">
                  ISIN information
                </h2>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-y-2">
                <div className="relative font-bold">ISIN: <span className="text-green-800">US5949181045</span></div>
                <div className="relative">
                  <strong>Title:</strong> Microsoft Corp.
                </div>
                <div className="relative">
                  <strong>Description:</strong> Equity, ISIN US5949181045, WKN
                  870747, MSF
                </div>
                <div className="relative">
                  <strong>Country:</strong> US
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-5">
            <div className="relative">
              <div className="relative w-full">
                <h2 className="text-2xl font-medium text-green-900 mb-2">
                  ISIN Details
                </h2>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6">
                  <div className="relative w-full mb-4">
                    <h4 className="font-bold">Master Data</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered table-stripped border border-orange-50 text-sm">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Name</strong>
                          </td>
                          <td>Microsoft Corp.</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>WKN</strong>
                          </td>
                          <td>870747, MSF</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Type</strong>
                          </td>
                          <td>Equity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="relative w-full mb-4">
                    <h4 className="font-bold">Issuer Data</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered table-stripped border border-orange-50 text-sm">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Address</strong>
                          </td>
                          <td>One Microsoft Way, US-98052-6399 Redmond, WA</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Phone</strong>
                          </td>
                          <td>+1 (0) 425-706-4400</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Fax</strong>
                          </td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Contact</strong>
                          </td>
                          <td>msft@microsoft.com</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Internet</strong>
                          </td>
                          <td>www.microsoft.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default IsinDetails;
