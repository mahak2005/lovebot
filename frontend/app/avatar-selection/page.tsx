import AvatarSelection from "@/components/avatar-selection"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AvatarSelectionPage() {
    return (
        <div className="container flex items-center justify-center min-h-screen py-8">
            <Card className="w-full max-w-4xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Choose Your Avatar</CardTitle>
                    <CardDescription className="text-center">
                        Select an avatar for your LoveBot and try interacting with it
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AvatarSelection />
                </CardContent>
            </Card>
        </div>
    )
}

