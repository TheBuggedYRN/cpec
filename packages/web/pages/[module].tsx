import { library } from "@instabug/cpec";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const ModulePage: NextPage = () => {
  const router = useRouter();
  const { module } = router.query;

  const libModule = library.modules.find((m) => m.name === module);
  if (!libModule) return <p>Module not found</p>;

  return (
    <div>
      <h1>{libModule.name}</h1>
      <p>{libModule.description}</p>
      <h2>Methods</h2>
      <ul>
        {libModule.methods.map((method) => (
          <Link key={method.name} href={`/${libModule.name}/${method.name}`}>
            <a>
              <li>{method.name}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ModulePage;
