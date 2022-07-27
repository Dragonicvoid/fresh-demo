/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { PageProps} from "$fresh/server.ts";
import { tw } from "@twind";

export default function SearchGithubUser(props: PageProps) {
  const [user, setUser] = useState()
  const [query, setQuery] = useState()

  async function onSubmit(e){
    e.preventDefault()
    const res = await fetch('/users/github/', {
        method:"POST",
    body: JSON.stringify({query: query})
    });
    const data = await res.json()
    if(res.ok){
        setUser(data)
    }
  }

  function handleInput(e){
    setQuery(e.target.value)
  }

  return (
    <div class={tw`flex flex-col p-4 gap-y-10`}>
      <form onSubmit={onSubmit}>
        <input name="query" onChange={handleInput} value={query} type="text" placeholder="username" />
        <button type="submit">search</button>
      </form>

      {user?.name && (
        <section>
          <p>hello {user.login}</p>
          <img src={user.avatar_url} alt={user.login}></img>
        </section>
      )
      }
      
    </div>
  );
}