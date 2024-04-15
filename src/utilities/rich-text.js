import { Editor } from "draft-js";
import { Controller } from "react-hook-form";

const RichText = ({ name, control, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ value, onChange }) => {
        return (
          <Editor
            editorState={value}
            onChange={onChange}
            ref={ref}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};

export default RichText;
