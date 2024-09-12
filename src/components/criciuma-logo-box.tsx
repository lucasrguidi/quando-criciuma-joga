import Image from 'next/image';

interface ICriciumaLogoBoxProps {
  team: string;
  logo: string;
}

export default function CriciumaLogoBox({ team, logo }: ICriciumaLogoBoxProps) {
  return <Image src={logo} alt={team} width={100} height={100} title={team} />;
}
