import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopic = async () => {
  const mongoORI = `${process.env.API_URL}/api/topics`;
  try {
    const res = await fetch("https://apimongodb.barzdev.repl.co/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topic:", error);
  }
};

export default async function TopicList() {
  const data = await getTopic();
  const topics = data.topics;
  // console.log(topics);
  return (
    <>
      {topics.length === 0 ? (
        <div className="p-4 border border-slate-300 my-3 flex justify-center gap-5 items-start">
          <h1 className="font-bold text-2xl">DATA MASIH KOSONG</h1>
        </div>
      ) : (
        topics.map((t, index) => (
          <div
            key={index}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
