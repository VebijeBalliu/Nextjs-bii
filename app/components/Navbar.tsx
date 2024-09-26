import Link from 'next/link';


export default function Navbar() {
    return (
        <nav >
            <ul >
                <li >
                    <Link href="/home">Home</Link>
                </li>
                <li >
                    <Link href="/about">About</Link>
                </li>
               

              
                <li >
                    <Link href="/contact">Contact</Link>
                </li>

                <li >
                    <Link href="/list">All dogs</Link>
                </li>
            </ul>
        </nav>
    );
}

