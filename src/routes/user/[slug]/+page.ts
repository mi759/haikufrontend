import type { PageLoad } from './$types';
import type { User } from '$lib/types';

export const load: PageLoad = async ({ fetch, params }) => {

    const res = await fetch(`http://localhost:8080/user/${params.slug}`);
    const user: User = await res.json();

    return { user };
};