import toast from "react-hot-toast";
import supabase from "./supabase";

export async function signin({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  } catch (error) {
    if (!navigator.onLine) {
      toast.error("No internet connection");
    } else {
      toast.error(error.message || "Something went wrong");
    }

    throw error;
  }
}
export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null

    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
        throw new Error(error.message);
    }
    return user?.user;
}

export async function signup(email, password, fullName,phoneNumber,avatarFile ) {
  console.log({email, password, fullName,phoneNumber,avatarFile})

  //upload avatar
  const avatarPath=`userId-${Date.now()}-${avatarFile.name}`
  const {data:imageData, error:imageError } = await supabase
  .storage
  .from('avatar')
  .upload(avatarPath,avatarFile);

  if(imageError){
    throw new Error(imageError.message)
  }

  //get avatar public URL
  const {data:url}= supabase.storage.from('avatar').getPublicUrl(avatarPath);
  const avatarUploadedURL=url.publicUrl;
  console.log(avatarUploadedURL)

  //new user signup
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                phoneNumber,
                avatar:avatarUploadedURL,
                
            }
        }
    });

    if (error) {
        throw new Error(`${error.message}`);
    }
    return data;
}

export async function Signout() {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
        throw new Error(error.message);
    }
}

