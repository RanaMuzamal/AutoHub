import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
    title: "AutoHub ",
    description: "Find, Drive, Empower",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
