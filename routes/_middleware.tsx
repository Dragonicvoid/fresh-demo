import {MiddlewareHandlerContext} from "$fresh/server.ts";

interface State {
    data: string;
}

export async function handler(
    _: Request,
    ctx: MiddlewareHandlerContext<State>,
    ) {
    ctx.state.data = "Di sini adalah dunia yang jeruk";
    const resp = await ctx.next();
    resp.headers.set("server", "fresh sekali anda");
    return resp;
}
