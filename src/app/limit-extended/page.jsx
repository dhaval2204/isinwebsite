"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AppLayout from "@/components/AppLayout/AppLayout";

export default function LimitExtended() {
  const router = useRouter();

  useEffect(() => {
    console.log("[Frontend]: User redirected to limit-exceeded page.");
  }, []);

  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-2xl bg-white text-black rounded-md">
              <div className="p-5 text-center">
                <h2 className="text-3xl font-bold text-orange-500 mb-5">
                  Search Limit Reached!
                </h2>
                <div className="space-y-3">
                  <p className="font-light">
                    You have exceeded the maximum number of searches allowed
                    from your IP address.
                  </p>
                  <p className="font-light">
                    Only allowed 10 searches per IP address.
                  </p>
                  <Link href="/" className="btn btn-primary">
                    Go Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
