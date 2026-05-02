import { ReactNode } from "react";

export default async function StudentLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <aside className="bg-gray-300 w-80 flex justify-center items-center">
                <h1 className="text-5xl flex justify-center items-center w-full">aside</h1>

            </aside>
            <main  className="flex-1">
                {children}
            </main>
        </>
    )
}



