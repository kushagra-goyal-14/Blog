"use client";
import { useRouter } from "next/navigation";

const Logo: React.FC = () => {
  const router = useRouter();
  return (
    <div className="py-6 md:py-2">
      <a className="block" onClick={() => router.push("/")}>
        <div
          className="text-white text-xl md:text-base"
          style={{ fontFamily: "Sulphur Point", cursor: "pointer" }}
        >
          Kushagra Goyal&apos;s
        </div>
        <div
          className="text-white text-4xl"
          style={{ fontFamily: "Sulphur Point", cursor: "pointer" }}
        >
          Blog
        </div>
      </a>
    </div>
  );
};

export default Logo;
