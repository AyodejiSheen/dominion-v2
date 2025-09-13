import { FC } from 'react';
import { Icon } from '@iconify/react';

interface Props {
  icon: string;
  className?: string;
}

export const Iconify: FC<Props> = ({ icon, className }: Props) => {
  return <Icon icon={icon} className={className} />;
};
