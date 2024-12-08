import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type NameFieldType = {
  className?: string;
  yourName?: string;
  placeholder?: string;

  /** Style props */
  nameFieldFlex?: CSSProperties["flex"];
  nameFieldAlignSelf?: CSSProperties["alignSelf"];
  yourNameWidth?: CSSProperties["width"];
};

const NameField: NextPage<NameFieldType> = ({
  className = "",
  nameFieldFlex,
  nameFieldAlignSelf,
  yourName,
  yourNameWidth,
  placeholder,
}) => {
  const nameFieldStyle: CSSProperties = useMemo(() => {
    return {
      flex: nameFieldFlex,
      alignSelf: nameFieldAlignSelf,
    };
  }, [nameFieldFlex, nameFieldAlignSelf]);

  const yourNameStyle: CSSProperties = useMemo(() => {
    return {
      width: yourNameWidth,
    };
  }, [yourNameWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-base text-black font-poppins ${className}`}
      style={nameFieldStyle}
    >
      <div
        className="w-[112.3px] relative font-medium inline-block z-[1]"
        style={yourNameStyle}
      >
        {yourName}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        <TextField
          className="[border:none] bg-[transparent] flex-1 font-poppins text-base text-darkgray max-w-full z-[1]"
          placeholder={placeholder}
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#9f9f9f" },
            "& .MuiInputBase-root": {
              height: "75px",
              backgroundColor: "#fff",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": { color: "#9f9f9f" },
          }}
        />
      </div>
    </div>
  );
};

export default NameField;
