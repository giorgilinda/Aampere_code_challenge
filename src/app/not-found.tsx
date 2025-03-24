import { BaseTemplate } from '@/templates/BaseTemplate';
import Link from 'next/link';

export default function NotFound() {
  return (
    <BaseTemplate>
      <img src="/404.jpg" alt="Car not found" />
      <Link href="/" className="flex ml-auto text-white bg-[#3ec099] border-0 py-2 px-6 focus:outline-none hover:bg-[#3ec099] rounded">Return Home</Link>
    </BaseTemplate>
  );
}
