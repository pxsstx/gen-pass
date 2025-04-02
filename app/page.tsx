"use client";

import { Button } from "@/components/ui/button";
import { Copy, Repeat } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import generatePassword from "./service/generatePassword";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import TooltipWrapper from "@/components/TooltipWrapper";

export default function Home() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState<number>(16);
  const [select, setSelect] = useState<number[]>([1, 1, 1, 1]);

  useEffect(() => {
    setPassword(generatePassword(length, select));
  }, [length, select]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password is copied!");
  };

  const genPass = () => {
    toast.success("Password is regenerated!");
    setPassword(generatePassword(length, select));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value));
    setPassword(generatePassword(length, select));
  };
  const handleChangeSlider = (newValue: number[]) => {
    setLength(newValue[0]);
    setPassword(generatePassword(length, select));
  };

  const handleCheckboxChange = (index: number, checked: boolean) => {
    setSelect((prevSelect) => {
      const newSelect = [...prevSelect];
      newSelect[index] = checked ? 1 : 0;
      return newSelect;
    });
    setPassword(generatePassword(length, select));
    toast.info(
      `${checkboxLabels[index]} is ${checked ? "checked" : "unchecked"} `
    );
  };

  const checkboxLabels = ["Uppercase", "Lowercase", "Numbers", "Symbols"];

  return (
    <>
      <div className="bg-background w-full h-full flex justify-center items-center">
        <div className="w-[95%] lg:w-[40%] h-fit bg-background shadow-xl border-accent border rounded-2xl p-10">
          <div className="flex flex-col gap-y-5 text-center justify-center items-center">
            <div
              className="w-full h-[35px] overflow-hidden px-4 py-3 bg-accent rounded-lg flex items-center justify-center"
              onClick={copyPassword}
            >
              <p className="text-xl truncate">{password}</p>
            </div>

            <div className="flex gap-x-5">
              <TooltipWrapper message="Copy password">
                <Button
                  className="w-fit"
                  variant="default"
                  onClick={copyPassword}
                >
                  <Copy />
                </Button>
              </TooltipWrapper>

              <TooltipWrapper message="Regenerated password">
              <Button
                className="w-fit border"
                variant="outline"
                onClick={genPass}
              >
                <Repeat />
              </Button>
              </TooltipWrapper>
            </div>

            <div className="flex flex-col gap-y-5">
              <Slider
                className="w-[300px]"
                defaultValue={[length]}
                max={50}
                min={1}
                step={1}
                value={[length === 0 ? 1 : length]}
                onValueChange={handleChangeSlider}
              />
              <Input
                type="number"
                max={50}
                min={1}
                step={1}
                value={length === 0 ? 1 : length}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-y-4">
              {checkboxLabels.map((label, index) => (
                <div key={label} className="flex gap-x-3 items-center">
                  <Checkbox
                    className="w-6 h-6"
                    id={label.toLowerCase()}
                    checked={select[index] === 1}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(index, checked === true)
                    }
                  />
                  <p className="text-xl">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
