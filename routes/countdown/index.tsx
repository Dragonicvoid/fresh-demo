/** @jsx h */
import { h } from "preact";
import Countdown from "../../islands/Countdown.tsx";
import Layout from "../../components/Layout.tsx";

export default function Page() {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 1);
  return (
    <Layout>
      The big event is happening <Countdown target={date.toISOString()} />.
    </Layout>
  );
}
