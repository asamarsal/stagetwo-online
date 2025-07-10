import { useEffect, useState } from "react";
import { apiFilm } from "../service/apifilm";

import Lottie from "lottie-react";

import loadingworld from "../assets/animations/loadingworld.json";

"use client"
import { toast } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { MovieType } from "../types/MovieType";

export default function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);

  function savetoBookmark(product: MovieType) {
      const bookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
      const exists = bookmark.some((item: MovieType) => item.imdbID === product.imdbID);
      if (!exists) {
        bookmark.push(product);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
      }
    }

  useEffect(() => {
    apiFilm
      .get("")
      .then((res) => {
        setMovies(res.data.Search || []);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Movies</h1>
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Lottie animationData={loadingworld} loop={true} style={{ width: 300, height: 300 }} />
        </div>
      ) : (
        <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {movies.map((movie) => (
            <Dialog key={movie.imdbID}>
              <DialogTrigger asChild>
                <Card
                  onClick={() => setSelectedMovie(movie)}
                  className="cursor-pointer hover:shadow-emerald-500 h-full flex flex-col">
                  
                  <CardHeader className="flex flex-col flex-1 h-full">
                    <img
                      src={movie.Poster !== "N/A" ? movie.Poster : "assets/react.svg"}
                      alt={movie.Title}
                      className="w-full h-32 object-contain mb-2 rounded"/>

                    <CardTitle>{movie.Title}</CardTitle>

                    <CardDescription className="truncate">
                      {movie.Year} &middot; {movie.Type}
                    </CardDescription>
                    <Button className="mt-auto w-full">Detail</Button>
                  </CardHeader>

                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{selectedMovie?.Title}</DialogTitle>
                  
                  <DialogDescription>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={selectedMovie?.Poster !== "N/A" ? selectedMovie?.Poster : "assets/react.svg"}
                        alt={selectedMovie?.Title}
                        className="w-40 h-60 object-contain rounded mb-2"
                      />
                      <div><b>Year:</b> {selectedMovie?.Year}</div>
                      <div><b>Type:</b> {selectedMovie?.Type}</div>
                      <div><b>imdbID:</b> {selectedMovie?.imdbID}</div>

                      <Button
                        className="mt-2 w-full bg-green-400"
                        onClick={() => {
                          savetoBookmark(movie);
                          toast("Film added to bookmarks", {
                            description: selectedMovie?.Title,
                            action: {
                              label: "Undo",
                              onClick: () => console.log("Undo"),
                            },
                          });
                        }}
                      >Add to Bookmarks</Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </ul>
      )}
    </div>
  );
}