import { ChangeEvent, FormEvent } from "react";

export type TodoProps = {
    id: string;
    task: string;
    completed: boolean;
};

export type TodoRowProps = {
    todo: TodoProps;
    handleToggle: (id: string) => void;
    handleDelete: (id: string) => void;
}

export type AddTodoPorps = {
    task: string;
    handleChanges: (e: ChangeEvent) => void;
    handleSubmit: (e: FormEvent) => void;
}
