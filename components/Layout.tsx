/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Layout({children}: any) {
  return (
    <div>
        <nav class={tw`flex items-center justify-center bg-red-300`}>
            <div>
              <a class={tw`block py-2 pr-4 pl-3`} href = "/">Home</a>
            </div>
            <div>
              <a class={tw`block py-2 pr-4 pl-3`} href = "/about">About</a>
            </div>
            <div>
              <a class={tw`block py-2 pr-4 pl-3`} href = "/users/github">Github</a>
            </div>
            <div>
              <a class={tw`block py-2 pr-4 pl-3`} href = "/countdown">Countdown</a>
            </div>
            <div>
              <a class={tw`block py-2 pr-4 pl-3`} href = "/hello">Hello</a>
            </div>
        </nav>
      {children}
    </div>
  );
}