import supabase from "./supabase";

export async function getUserProfile(id) {
    const { data: profile, error } = await supabase
        .from('Profile')
        .select('*')
        .eq('id', id)
        .single();
    if (error) {
        throw new Error(error.message);
    }
    return profile;
}