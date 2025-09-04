import TwoFactorForm from "@/components/two-factor/two-factor";

const page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="w-full max-w-sm md:max-w-3xl">
        <TwoFactorForm />
      </div>
    </div>
  );
};

export default page;
