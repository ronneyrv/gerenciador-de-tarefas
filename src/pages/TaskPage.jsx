import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-50 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={function () {
              navigate(-1);
            }}
            className="absolute left-0 top-0 bottom-0 text-purple-800 font-bold"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Destalhes da Tarefa</Title>
        </div>
        <div className="bg-purple-800 p-4 rounded-md">
          <h2 className="text-xl text-slate-950 font-bold">{title}</h2>
          <p className="text-slate-50 font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
