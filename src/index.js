import fetch from "node-fetch";

/**
* Fetches home.
* 
* @param page The page to fetch. Leave empty to fetch the first page.
* @returns A array with all of the posts in the specified page.
*/
export async function getHome(page = 1) {
    let home = await fetch(`https://api.meower.org/home?autoget&page=${page}`).then(res => res.json());
    return home.autoget;
}

/**
* Gets the user's profile picture number.
* 
* @param user The user to get the profile picture of
* @returns The user's profile picture number
*/
export async function getProfilePicture(user) {
    let user_data = await fetch(`https://api.meower.org/users/${user}`).then(res => res.json());
    return user_data.pfp_data - 1;
}