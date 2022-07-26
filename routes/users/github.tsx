/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers} from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";
import SearchGithubUser from "../../islands/SearchGithubUser.tsx";

export const handler: Handlers = {
  async GET(req, ctx){
    const url = new URL(req.url)
    const query = url.searchParams.get('query')

    const res = await fetch(`https://api.github.com/users/${query}`);
    if(res.status === 404){
      return ctx.render(null);
    }
    const user = await res.json();
    return await ctx.render(user);
  },

  async POST(req, ctx){
    const body = await req.json();

    const res = await fetch(`https://api.github.com/users/${body.query}`);
    if(res.status === 404){
      return new Response(null, {status:404});
    }

    const user = await res.json();
    console.log(user)
    return new Response(JSON.stringify(user));
  }
}

export default function user(props: PageProps) {
  return (
    <Layout>
      <SearchGithubUser />
    </Layout>
  );
}