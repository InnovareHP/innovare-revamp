import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/60">
      <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
    </div>
  );
};

export default PageLoader;
