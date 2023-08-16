import ButtonComponent from "./components/Buttons/Button";
import SwitchButton from "./components/Buttons/SwitchButton";
import InputField from "./components/Input/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          <InputField type="text" variant="outlined" label="write something"/>
          <ButtonComponent variant="outlined" label="Click me" />
          <SwitchButton label="Switch" className="font-mono"/>
          <br />
        </h1>
      </div>
    </main>
  );
}
