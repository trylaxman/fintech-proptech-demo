import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'PropTech Demo', description: 'Tenant rewards and open banking demo' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
