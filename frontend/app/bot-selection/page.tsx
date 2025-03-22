import BotSelectionForm from "@/components/bot-selection-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BotSelectionPage() {
    return (
        <div className="container flex items-center justify-center min-h-screen py-8">
            <Card className="w-full max-w-2xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Customize Your LoveBot</CardTitle>
                    <CardDescription className="text-center">Choose your bot gender and personality traits</CardDescription>
                </CardHeader>
                <CardContent>
                    <BotSelectionForm />
                </CardContent>
            </Card>
        </div>
    )
}

