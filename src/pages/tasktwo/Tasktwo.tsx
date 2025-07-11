import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import type { PokemonType } from "../../types/PokemonType";

export default function Tasktwo() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [allPokemon, setAllPokemon] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [data, setData] = useState<PokemonType | null>(null)

  // Fetch semua di API
  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon")
      const json = await res.json()
      const names = json.results.map((item: any) => item.name)
      setAllPokemon(names)
    }
    fetchList()
  }, [])

  // Fetch data
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim())
    }, 500)
    return () => clearTimeout(timer)
  }, [query])

  // Saran
  useEffect(() => {
    if (query.length > 0) {
      const matches = allPokemon.filter(name =>
        name.toLowerCase().startsWith(query.toLowerCase())
      )
      setSuggestions(matches.slice(0, 7))
    } else {
      setSuggestions([])
    }
  }, [query, allPokemon])

  // Fetch query debounce
  useEffect(() => {
    if (!debouncedQuery) return
    fetchPokemon(debouncedQuery)
  }, [debouncedQuery])

  // Fetch pokemon
  const fetchPokemon = async (name: string) => {
    if (!name) {
      setError("Input tidak boleh kosong.")
      setData(null)
      return
    }

    setLoading(true)
    setError("")
    setData(null)

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)

        if (!res.ok) throw new Error("Pokemon tidak ditemukan.")
        const result = await res.json()

        await new Promise(resolve => setTimeout(resolve, 1000))
        setData(result)

    } 
    catch (err: any) {
      setError(err.message || "Gagal memuat data.")
    } 
    finally {
      setLoading(false)
    }
  }

  const handleSuggestionClick = (name: string) => {
    setQuery(name)
    setSuggestions([])
    setDebouncedQuery(name)
  }

  const handleSearchClick = () => {

    setSuggestions([])
    fetchPokemon(query.trim())
  }

  return (
    <div className="flex flex-col items-center min-h-svh p-4">
        <h1 className="text-3xl font-bold mb-6">Day 2</h1>
        <Card className="w-full max-w-md border-green-400">
            <CardHeader>
              <CardTitle className="text-2xl">Cari Pokemon</CardTitle>
            </CardHeader>
            <CardContent>

              <Label className="mb-2">Nama Pokemon</Label>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                  <Input
                  id="pokemon"
                  type="text"
                  placeholder="Contoh: pika"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoComplete="off"
                  />
                  
                  {suggestions.length > 0 && (
                  <ul className="border rounded bg-white dark:bg-zinc-900 shadow max-h-40 overflow-y-auto">
                      {suggestions.map((name) => (
                      <li
                          key={name}
                          className="px-4 py-2 hover:bg-gray-100 hover:dark:bg-zinc-900 cursor-pointer capitalize"
                          onClick={() => handleSuggestionClick(name)}>
                          {name}
                      </li>
                      ))}
                  </ul>
                  )}
                  <Button
                  type="submit"
                  onClick={handleSearchClick}
                  className="bg-green-600 hover:bg-green-700 text-white mt-2"
                  >
                  Cari
                  </Button>
              </form>
            </CardContent>
        </Card>

        {loading && <p className="mt-4 text-blue-600">Loading...</p>}

        {!loading && error && <p className="mt-4 text-red-500">{error}</p>}

        {!loading && data && (
            <Card className="w-full max-w-md mt-2">
                <CardContent>
                    <CardTitle className="text-xl font-semibold mb-2">{data.name}</CardTitle>
                    <img
                    src={data.sprites.front_default}
                    className="w-24 h-24 mx-auto mb-2"
                    />
                </CardContent>
            </Card>
        )}
    </div>
  )
}