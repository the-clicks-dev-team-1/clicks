import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="bg-[var(--bgnew)] py-20">
      <div className="text-center">
        <h2 className="mb-10 text-2xl sm:text-3xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/val.png"
              alt="Team Member 1"
              className="rounded-full mb-4 mx-auto"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Valerii Kryshtal
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              CEO & Co-founder
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/kate.png"
              alt="Team Member 2"
              className="rounded-full mb-4 mx-auto"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Kateryna Kovalenko
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Creative Director & Co-founder
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Vira.png"
              alt="Team Member 3"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Vira Hladyniuk
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Project Coordinator
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Taras.png"
              alt="Team Member 4"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Taras Khutornyi
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Graphic Designer
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Artem.png"
              alt="Team Member 5"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Artem Martyniuk
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] max-w-52 w-full mx-auto text-center">
              Full-Stack Developer | Web2 & Web3 Specialist
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Anastasia.png"
              alt="Team Member 6"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Anastasia Dorfman
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] max-w-52 w-full mx-auto text-center">
              Full-Stack Developer | Web2 & Web3 Specialist
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Borys.png"
              alt="Team Member 7"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Borys Zahorodnii
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] max-w-52 w-full mx-auto text-center">
              Full-Stack Developer | Web2 & Web3 Specialist
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Viktor.png"
              alt="Team Member 8"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Viktor Lytvynenko
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] max-w-52 w-full mx-auto text-center">
              Full-Stack Developer | Web2 & Web3 Specialist
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Kostiantyn.png"
              alt="Team Member 9"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Konstantin
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] max-w-52 w-full mx-auto text-center">
              Full-Stack Developer | Web2 & Web3 Specialist
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <Image
              src="/images/employees/Gabe-Morris.png"
              alt="Team Member 10"
              className="rounded-full mb-4 mx-auto w-[200px] h-[200px] object-cover"
              width={200}
              height={200}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Gabriel Morris
            </h3>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] max-w-52 w-full mx-auto text-center">
              Full-Stack Developer | Web2 & Web3 Specialist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
