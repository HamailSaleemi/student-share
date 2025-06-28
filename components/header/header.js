import Image from 'next/image';
import Link from 'next/link';
import './header.css';
export default function Header() {
    return (
        <header className='d-flex justify-content-between align-items-center'>
                <nav className="d-flex justify-content-between align-items-center w-100">
                    <Image src="/images/Student Share.svg" alt="Student Share Logo" width={200} height={100} className='logo' />
                    <div className='d-flex justify-content-between align-items-center gap-3 '>
                    <Link href={'/'}>How it works</Link>
                    <Link href={'/'}>Download</Link>
                    <Link href={'/'}>Upgrade</Link>
                    <Link href={'/'}>Feedback</Link>
                    <Link href={'/'}>Login / register</Link>
                    </div>
                </nav>
        </header>
    );
}