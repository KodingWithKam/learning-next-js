export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <h1>HELLO BLOG GROUP LAYOUT</h1>
        {children}
        </>
    );
}