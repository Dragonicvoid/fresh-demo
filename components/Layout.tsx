/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Layout({children}:any) {
  return (
    <div>
        <nav class={tw`flex justify-content`}>
            <a href = "/">Home</a>
            <a href = "/about">About</a>
            <a href = "/users/github">Github</a>
        </nav>
      {children}
    </div>
  );
}