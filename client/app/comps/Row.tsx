'use client';
import { cn } from '@/lib';
import { IconType } from 'react-icons';
import { LuChevronRight } from 'react-icons/lu';
import { TextH, TextP } from './custom';

export type IRow = {
  title: string;
  subtitle: string;
  Icon?: IconType;
  imgPath?: string;
  imgComp?: JSX.Element;
  color?: string;
  onClick?: VoidFunction;
  hideArrow?: boolean;
  isLast?: boolean;
};
export function Row(props: IRow) {
  const { Icon } = props;
  return (
    <div
      className={cn(
        'flex justify-between items-center py-2',
        props.isLast || 'border-b border-muted',
        props.color
      )}
      onClick={props.onClick}
    >
      <div className="flex items-center justify-center">
        {Icon && <Icon size={20} className={cn('text-accent mr-3')} />}
        {props.imgPath && <img src={props.imgPath} className="size-[50px] rounded-lg" />}
        {props.imgComp && props.imgComp}

        <div>
          <TextH v="h5" className={'text-card-foreground mb-1'}>
            {props.title}
          </TextH>
          <TextP className="text-muted">{props.subtitle}</TextP>
        </div>
      </div>
      {!props.hideArrow && <LuChevronRight size={20} />}
    </div>
  );
}

export function SimpleRow(props: { left: string; right: string; color?: string; isLast?: boolean }) {
  return (
    <div className={cn('flex justify-between items-center py-2', props.isLast || 'border-accent')}>
      <TextP className={'text-muted'}>{props.left} </TextP>
      <TextP className="font-semibold">{props.right}</TextP>
    </div>
  );
}
