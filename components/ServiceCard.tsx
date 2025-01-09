import Image from "next/image";

type ServiceCardProps = {
  count: string;
  image: string;
  title: string;
  description: string;
};

const ServiceCard = ({
  count,
  image,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="relative light:shadow-2xl bg-[var(--blue2)] light:bg-[var(--light-blue)] p-10 pt-40 overflow-hidden rounded-2xl">
      <h1 className="absolute -left-4 -top-10 text-[120px] font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-100">
        {count}
      </h1>
      <div className="absolute top-4 right-4">
        <Image
          src={image}
          alt="service-image"
          width={500}
          height={500}
          className="object-contain max-w-[170px] max-h-[170px]"
        />
      </div>
      <h2
        className="text-3xl font-semibold mb-4 text-[var(--light-blue)] light:text-[var(--gray-70)]
"
      >
        {title}
      </h2>
      <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
