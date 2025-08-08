// components/ThemeClientWrapper.tsx
import { useEffect, useState } from "react";

export default function ThemeClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure this runs only on client side
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Prevent rendering until client has mounted
    return null;
  }

  return <>{children}</>;
}
