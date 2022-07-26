/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout class={tw`p-4 mx-auto max-w-screen-md`}>
      this is what i want
    </Layout>
  );
}
