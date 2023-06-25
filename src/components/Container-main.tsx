interface ContainerMainProps {
  children: React.ReactNode;
}

const ContainerMain: React.FC<ContainerMainProps> = ({ children }) => {
  return (
    <div
      className="
        px-8
        py-4
        flex
        flex-col
        items-center
        justify-between
        bg-black
        "
    >
      {children}
    </div>
  );
};

export default ContainerMain;
