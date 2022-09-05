import { library } from "@instabug/cpec";
import type { NextPage } from "next";
import Link from "next/link";

const LibraryPage: NextPage = () => {
  return (
    <div>
      <small>{library.version}</small>
      <h1>{library.name}</h1>
      <p>{library.description}</p>
      <h2>Modules</h2>
      <ul>
        {library.modules.map((module) => (
          <Link key={module.name} href={`/${module.name}`}>
            <a>
              <li>{module.name}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LibraryPage;
