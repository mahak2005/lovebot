"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast, Toaster } from "sonner";
import { Mic, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarSelection() {
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);
  const [interactionMode, setInteractionMode] = useState<"chat" | "voice">("chat");

  // Sample avatars with image URLs
  const avatars = [
    { id: 1, name: "Alex", image: "/avatars/avatar1.png" },
    { id: 2, name: "Jordan", image: "/avatars/avatar2.png" },
    { id: 3, name: "Taylor", image: "/avatars/avatar3.png" },
  ];

  const handleConfirm = () => {
    if (selectedAvatar === null) {
      toast.error("Please select an avatar to continue");
      return;
    }
    toast.success(`You've selected ${avatars.find((a) => a.id === selectedAvatar)?.name}. Your LoveBot is ready!`);
  };

  return (
    <div className="space-y-6">
      <Toaster position="top-right" richColors />
      <Tabs defaultValue="1" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          {avatars.map((avatar) => (
            <TabsTrigger key={avatar.id} value={avatar.id.toString()} onClick={() => setSelectedAvatar(avatar.id)}>
              {avatar.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {avatars.map((avatar) => (
          <TabsContent key={avatar.id} value={avatar.id.toString()} className="flex justify-center py-4">
            <Avatar className="w-32 h-32 border-2 border-primary">
              <AvatarImage src={avatar.image} alt={avatar.name} />
              <AvatarFallback>{avatar.name[0]}</AvatarFallback>
            </Avatar>
          </TabsContent>
        ))}
      </Tabs>

      {selectedAvatar !== null && (
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <Button
              variant={interactionMode === "chat" ? "default" : "outline"}
              onClick={() => setInteractionMode("chat")}
              className="flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Chat
            </Button>
            <Button
              variant={interactionMode === "voice" ? "default" : "outline"}
              onClick={() => setInteractionMode("voice")}
              className="flex items-center gap-2"
            >
              <Mic className="h-4 w-4" />
              Voice
            </Button>
          </div>

          {interactionMode === "chat" && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-center text-sm">
                Chat interface would appear here. You can type messages to interact with your LoveBot.
              </p>
            </div>
          )}

          {interactionMode === "voice" && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-center text-sm">
                Voice interface would appear here. You can speak to your LoveBot and hear responses.
              </p>
            </div>
          )}
        </div>
      )}

      <Button onClick={handleConfirm} className="w-full" disabled={selectedAvatar === null}>
        Confirm Selection
      </Button>
    </div>
  );
}
