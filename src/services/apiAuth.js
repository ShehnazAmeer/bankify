import supabase from "./supabase";

export async function signin({email,password}) {
    console.log('from api Auth')
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        throw new Error(error.message)
    }
    console.log(data);
    return data;

}
export async function getCurrentSession() {
    const { data: session } = supabase.auth.getSession();
    
    if (!session.session) return null
    const { data: user, error } = supabase.auth.getUser();
    if (error) {
        throw new Error(error.message);
    }
    return user?.user;
}