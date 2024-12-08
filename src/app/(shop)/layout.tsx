export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1>HELLO SHOP GROUP LAYOUT</h1>
            {children}
        </>
    );
}