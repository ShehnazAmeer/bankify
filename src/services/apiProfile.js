import supabase from "./supabase";

export async function getUserProfile(id) {
    const { data: profile, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('id', id)
    if (error) {
        throw new Error(error.message);
    }
    console.log(profile)
    return profile;
}