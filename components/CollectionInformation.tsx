type Props = {
  collection: any;
};

export default function CollectionInformation({ collection }: Props) {
  return (
    <>
      <h1 className="text-black text-4xl my-6">{collection.title}</h1>
      <p className="text-black text-base">{collection.description}</p>
    </>
  );
}
