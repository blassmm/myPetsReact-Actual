const datacard = [
  {
    id: "0",
    title: "card1",
    image: "https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg",
    desc: "description test1",
  },
  {
    id: "1",
    title: "card1",
    image: "https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg",
    desc: "description test1",
  },
  {
    id: "2",
    title: "card2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png",
    desc: "description test1",
  },
  {
    id: "3",
    title: "card1",
    image: "https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg",
    desc: "description test1",
  },
  {
    id: "4",
    title: "card4",
    image: "https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg",
    desc: "description test1",
  },
  {
    id: "5",
    title: "card1",
    image: "https://www.fdd.cl/wp-content/uploads/2017/09/Test.jpg",
    desc: "description test1",
  },
];

const Card = ({ data, index }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 py-4 relative w-full border border-black rounded-xl p-2"
      key={index}
    >
      <strong className="text-black font-bold text-xl">{data.title}</strong>

      <div className="cards w-full border h-[8rem] text-center">
        <img
          className="mx-auto text-center h-full object-cover"
          src={data.image}
          alt={data.title}
        />
      </div>

      <div className="text-black">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

const GridTest2 = () => {
  return (
    <div className="w-full relative min-h-[50vh] grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-3 py-10 px-3">
      {datacard.map((data, index) => (
        <Card data={data} index={index} />
      ))}
    </div>
  );
};
export default GridTest2;
