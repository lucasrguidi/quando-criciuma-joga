import Image from 'next/image';

interface IOtherLogoBoxProps {
  team: string;
  logo: string;
}

export default function OtherLogoBox({ team, logo }: IOtherLogoBoxProps) {
  return <Image src={logo} alt="Logo" width={80} height={80} />;
}
