import { library } from "@instabug/cpec";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const MethodPage: NextPage = () => {
  const router = useRouter();
  const { module, method } = router.query;

  const libModule = library.modules.find((m) => m.name === module);
  if (!libModule) return <p>Module not found</p>;

  const libMethod = libModule.methods.find((m) => m.name === method);
  if (!libMethod) return <p>Method not found</p>;

  return (
    <div>
      <h1>{libMethod.name}</h1>
      <p>{libMethod.description}</p>
      <p>
        <b>Android: </b>
        {libMethod.native.android
          .toString()
          .replace("function ", "")
          .replace(" {}", "")}
      </p>
      <p>
        <b>iOS: </b>
        {libMethod.native.ios
          .toString()
          .replace("function ", "")
          .replace(" {}", "")}
      </p>
      <h2>Parameters</h2>
      <ul>
        {libMethod.params.map((param) => (
          <li key={param.name}>
            <h5>{`${param.type} ${param.name}`}</h5>
            {param.defaultValue && <h6>Default: {param.defaultValue}</h6>}
            <p>{param.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MethodPage;
