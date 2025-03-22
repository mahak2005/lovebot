"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner" 

const personalityTraits = [
  "Kind",
  "Humble",
  "Talkative",
  "Techie",
  "Funny",
  "Romantic",
  "Adventurous",
  "Intellectual",
  "Artistic",
  "Supportive",
]

export default function BotSelectionForm() {
  const router = useRouter()
  const [gender, setGender] = useState("")
  const [selectedTraits, setSelectedTraits] = useState<string[]>([])

  const toggleTrait = (trait: string) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter((t) => t !== trait))
    } else {
      if (selectedTraits.length < 5) {
        setSelectedTraits([...selectedTraits, trait])
      } else {
        toast.error("Maximum traits selected", {
          description: "You can select up to 5 personality traits",
        }) 
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!gender) {
      toast.error("Gender required", {
        description: "Please select a gender for your bot",
      }) 
      return
    }

    if (selectedTraits.length === 0) {
      toast.error("Traits required", {
        description: "Please select at least one personality trait",
      }) 
      return
    }

    router.push("/avatar-selection")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="gender">Bot Gender</Label>
        <Select value={gender} onValueChange={setGender}>
          <SelectTrigger id="gender" className="w-full">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="non-binary">Non-binary</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>Personality Traits (Select up to 5)</Label>
        <div className="flex flex-wrap gap-2">
          {personalityTraits.map((trait) => (
            <Button
              key={trait}
              type="button"
              variant={selectedTraits.includes(trait) ? "default" : "outline"}
              onClick={() => toggleTrait(trait)}
              className="rounded-full"
            >
              {trait}
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">Selected: {selectedTraits.length}/5</p>
      </div>

      <Button type="submit" className="w-full">
        Next
      </Button>
    </form>
  )
}
