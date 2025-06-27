import Image from 'next/image';

export default function Header() {
    return (
        <header >
                <nav className="container d-flex justify-content-between align-items-center">
                    <Image src="/images/Student Share.svg" alt="Student Share Logo" width={200} height={100} className='logo' />
                    <a href="/">Home</a>
                    <a href="/about" >About</a>
                    <a href="/contact">Contact</a>
                </nav>
        </header>
    );
}