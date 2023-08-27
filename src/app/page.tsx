"use client"
import ButtonComponent from "../components/Buttons/Button";
import SwitchButton from "../components/Buttons/SwitchButton";
import InputField from "../components/Input/Input";
import { toastErrorNotify } from '../components/helper/Toast/toastHelper';

export default function Home() {
  const handleErrorClick = () => {
    toastErrorNotify("This is an error message.");
  };
   
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          <InputField type="text" variant="outlined" label="write something"/>
          <SwitchButton label="Switch" className="font-mono"/>
           <ButtonComponent variant="outlined" label="Error" onClick={handleErrorClick} />
          <br />
        </h1>
      </div>
    </main>
  );
}

