"use client";

interface ContainerStartProps {
  children: React.ReactNode;
}

const ContainerStart: React.FC<ContainerStartProps> = ({ children }) => {
  return (
    <div
      className="
        px-8
        py-4
        flex
        flex-col
        items-center
        bg-black
        "
    >
      {children}
    </div>
  );
};

export default ContainerStart;

// "max-w-[2520px]
//         mx-auto
//         xl:px-20
//         md:px-10
//         sm:px-2"
