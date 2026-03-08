import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';

interface LogoMarkProps {
  size?: number;
}

export default function LogoMark({ size = 28 }: LogoMarkProps) {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === 'dark' ? '/new-logo-white.png' : '/new-logo.png'}
      alt="NorthSummit logo mark"
      width={size}
      height={size}
      priority
    />
  );
}
