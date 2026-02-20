import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';

interface LogoMarkProps {
  size?: number;
}

export default function LogoMark({ size = 28 }: LogoMarkProps) {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
      alt="NorthSummit logo mark"
      width={size}
      height={size}
      priority
    />
  );
}
