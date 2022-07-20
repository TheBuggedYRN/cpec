import { instabugLibrary } from "@instabug/cpec";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return <pre>{JSON.stringify(instabugLibrary, null, 2)}</pre>;
};

export default Home;
