import Link from 'next/link';

export default function NavbarItem({ title, param }) {
  return (
    <Link href={`/?genre=${param}`}>
      <span className="cursor-pointer text-white">{title}</span>
    </Link>
  );
}
