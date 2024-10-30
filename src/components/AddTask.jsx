import Input from "./Input";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescripition] = useState("");
  return (
    <div className="space-y-4 p-6 bg-purple-800 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={function (event) {
          setTitle(event.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={function (event) {
          setDescripition(event.target.value);
        }}
      />
      <button
        onClick={function () {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o campo Título e Descrição!");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescripition("");
        }}
        className="bg-slate-400 text-black px-4 py-2 rounded-md font-bold"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
