import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter") return;
    props.onAdd(title);
    setTitle("");
  };

  return (
    <div className="input-field mtrem2">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Введите название задачи"
      />
      <label htmlFor="title" className="active">
        Введите название задачи
      </label>
    </div>
  );
};
