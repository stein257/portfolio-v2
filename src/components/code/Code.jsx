import TypeIt from "typeit-react";

const Code = () => {
  return (
    <div className={"pt-[6%] text-[2vw] pl-[5%] w-full font-source leading-[2.5vw]"}>
      <TypeIt
        options={{
          loop: true,
          loopDelay: 2000,
          speed: 150,
          deleteSpeed: 150,
        }}>
        <span className={"text-keyword italic"}>{"int "}</span>
        <span className={"text-function"}>{"main"}</span>
        <span className={"text-operator"}>{"(){"}</span>

        <br />
        <span className={"pl-[10%]"} />

        <span className={"text-attribute"}>{"person "}</span>
        <span className={"text-operator"}>{"*"}</span>
        <span className={"text-variable"}>{"simon "}</span>
        <span className={"text-operator"}>{"= "}</span>
        <span className={"text-keyword italic"}>{"new "}</span>
        <span className={"text-function"}>{"person"}</span>
        <span className={"text-operator"}>{";"}</span>

        <br />
        <span className={"pl-[10%]"} />

        <span className={"text-keyword italic"}>{"while"}</span>
        <span className={"text-operator"}>{"("}</span>
        <span className={"text-variable"}>{"simon "}</span>
        <span className={"text-operator"}>{"-> "}</span>
        <span className={"text-function"}>{"awake"}</span>
        <span className={"text-operator"}>{"()){"}</span>

        <br />
        <span className={"pl-[20%]"} />

        <span className={"text-variable"}>{"simon "}</span>
        <span className={"text-operator"}>{"-> "}</span>
        <span className={"text-function"}>{"code"}</span>
        <span className={"text-operator"}>{"();"}</span>

        <br />
        <span className={"pl-[10%]"} />
        <span className={"text-operator"}>{"}"}</span>

        <br />
        <span className={"text-operator"}>{"}"}</span>
      </TypeIt>
    </div>
  );
};

export default Code;
