import Image from "next/image";

const Block: React.FC = () => {
  return (
    <div className="mb-10 px-4 md:px-10 mx-auto relative z-10 w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center">
      <div className="md:w-1/2 px-4 md:px-8">
        <div className="text-2xl mb-10 md:text-4xl text-left bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          While you spent time <br />
          with your family,
          <br />
          our solutions work <br />
          towards your success.
        </div>
        <p className="text-lg font-normal text-[var(--gray-blue)] light:text-[var(--gray-70)] max-w-lg text-left">
          We leverage top-tier Internet marketing tools to ensure the success of
          our valued partners. Our commitment includes a customer-centric
          approach, delivering predictable results, and an unwavering focus on
          enhancing profitability.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center pb-5">
        <Image
          src="/images/wave.png"
          alt="Marketing Wave"
          width={521}
          height={640}
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Block;
