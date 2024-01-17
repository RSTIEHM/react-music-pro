import supabase from "./supaBase";
// import { supabaseUrl } from "./supaBase";

// SUPABASE SQL

export async function getAlbums() {
  const { data, error } = await supabase.from("albums").select("*");
  if (error) {
    console.log(error);
    throw new Error("Could Not Load The Data");
  }
  return data;
}

// export async function getAlbum() {
//     const { data, error } = await supabase.from("albums").select("*");
//     if (error) {
//       console.log(error);
//       throw new Error("Could Not Load The Data");
//     }
//     return data;
//   }
