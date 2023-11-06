import Image from "next/image";

const PublicidadeItem = () => {
  return (
    <div className="border p-2 rounded-md shadow-lg">
      <Image src="/publi.webp" width={500} height={500} />
      <hr className="mt-2" />
      <span className="text-xs font-normal">Publicidade</span>
    </div>
  );
};

export default PublicidadeItem;
