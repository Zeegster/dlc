import { Select,Option } from "@material-tailwind/react"


export const SelectInput = ({ text, values, isCorrect }) => {
  console.log(values);
  return (
    <Select variant="standard" label={text} {...isCorrect !== null && !isCorrect ? { error: true } : { success: true }}>
      {values.map((value) => {
        return <Option key={value}>{value}</Option>;
      })}
    </Select>
  );
 };