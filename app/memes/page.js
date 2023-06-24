import DisplayImg from "../components/DisplayImg";
import MemeForm from "../components/MemeForm";

export default function Memes() {
    return (
      <main className="flex flex-col items-center m-5 p-5">
        <div className=" my-10">
        <DisplayImg />
        </div>
        <div className="">
        <MemeForm />
        </div>
      </main>
    )
  }