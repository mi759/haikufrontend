import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    type Item = {
        message: string
    }
    const res = await fetch('http://localhost:8080/ping');
    const item: Item = await res.json();

    return { item };
};