import { Button } from "@/components/ui/button"
import Image from "next/image"

export const EmptyBoards= () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
            src="/note.svg"
            width={110}
            height={110}
            alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your First Board!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your Organization!
            </p>
            <div className="mt-6">
                <Button size='lg'>
                    Create your board
                </Button>
            </div>
        </div>
    )
}