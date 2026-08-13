"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function GalleryAdmin() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    setSession(session);
    setLoading(false);

    if (session) {
      loadImages();
    }
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setSession(data.session);
    loadImages();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setImages([]);
  };

  const loadImages = async () => {
    const { data, error } = await supabase.storage
      .from("gallery")
      .list("", {
        sortBy: {
          column: "created_at",
          order: "desc",
        },
      });

    if (error) {
      console.error(error);
      return;
    }

    const urls = data
      .filter((file) => file.name)
      .map((file) => {
        const { data } = supabase.storage
          .from("gallery")
          .getPublicUrl(file.name);

        return data.publicUrl;
      });

    setImages(urls);
  };

  const uploadPhotos = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      for (const file of Array.from(files)) {
        const extension = file.name.split(".").pop();

        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}.${extension}`;

        const { error } = await supabase.storage
          .from("gallery")
          .upload(fileName, file);

        if (error) {
          throw error;
        }
      }

      await loadImages();
      alert("Photos uploaded successfully!");
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Upload failed");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const deletePhoto = async (url: string) => {
    const fileName = url.split("/").pop();

    if (!fileName) return;

    const confirmed = confirm("Delete this photo?");

    if (!confirmed) return;

    const { error } = await supabase.storage
      .from("gallery")
      .remove([fileName]);

    if (error) {
      alert(error.message);
      return;
    }

    await loadImages();
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold">
            Gallery Admin
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Login to manage gallery photos.
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-8 w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-red-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-red-600"
          />

          <button
            onClick={login}
            className="mt-6 w-full rounded-full bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Admin
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Gallery Manager
            </h1>
          </div>

          <div className="flex gap-3">
            <label className="cursor-pointer rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
              {uploading ? "Uploading..." : "+ Add Photos"}

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={uploadPhotos}
                className="hidden"
                disabled={uploading}
              />
            </label>

            <button
              onClick={logout}
              className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold hover:border-red-600 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-square overflow-hidden rounded-3xl bg-zinc-200"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover"
              />

              <button
                onClick={() => deletePhoto(image)}
                className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-2 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}