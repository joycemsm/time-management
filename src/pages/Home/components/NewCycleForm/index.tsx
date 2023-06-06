import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

Import * as zod from 'zod';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Type the task"),
  minutesAmount: zod.number().min(5).max(60),
});

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  return (
    <FormContainer>
      <label htmlFor="task">I will work on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Name your project"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Project 1" />
        <option value="Project 2" />
      </datalist>

      <label htmlFor="">during</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes</span>
    </FormContainer>
  );
}
