import AppLayout from "@/components/AppLayout/AppLayout";
import Link from "next/link";

const Success = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold text-green-500">
          ISIN Registration Successful!
        </h1>
        <p className="mt-4 text-lg">
          Your ISIN has been registered successfully. You can now proceed with
          other tasks.
        </p>
        <p>
          <Link className="text-2xl font-bold" href="/">
            Back to continue
          </Link>
        </p>
      </div>
    </AppLayout>
  );
};

export default Success;
