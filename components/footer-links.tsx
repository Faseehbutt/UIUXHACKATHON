import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

export type FooterLinksType = {
  className?: string;
  countryRegion?: string;

  /** Style props */
  countryRegionDisplay?: CSSProperties["display"];
  countryRegionMinWidth?: CSSProperties["minWidth"];
};

const FooterLinks: NextPage<FooterLinksType> = ({
  className = "",
  countryRegion,
  countryRegionDisplay,
  countryRegionMinWidth,
}) => {
  const countryRegionStyle: CSSProperties = useMemo(() => {
    return {
      display: countryRegionDisplay,
      minWidth: countryRegionMinWidth,
    };
  }, [countryRegionDisplay, countryRegionMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full text-left text-base text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
        <div className="relative font-medium z-[1]" style={countryRegionStyle}>
          {countryRegion}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
          <FormControl
            className="h-[75px] w-[453px] font-poppins text-base text-darkgray max-w-full z-[1]"
            variant="standard"
            sx={{
              borderColor: "#9f9f9f",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "99.77973568281938%",
              height: "75px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "75px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "75px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "75px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "75px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#9f9f9f",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Poppins",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "30px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="20px"
                  height="20px"
                  src="/dashiconsarrowdownalt2-1.svg"
                  style={{ marginRight: "27px" }}
                />
              )}
            >
              <MenuItem>Sri Lanka</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
