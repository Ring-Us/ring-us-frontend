import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/global/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const segments = 4; // 총 세그먼트 수
  const segmentValue = (value || 0) / 100; // 전체 진행률 (0~1)
  const activeSegment = Math.floor(segmentValue * segments); // 활성화된 세그먼트 (정수값)
  const partialProgress = (segmentValue * segments) % 1; // 활성화된 세그먼트 내의 비율

  return (
    <div className={cn('flex gap-2', className)}>
      {Array.from({ length: segments }, (_, index) => (
        <ProgressPrimitive.Root
          ref={index === 0 ? ref : undefined} // 첫 번째 세그먼트에만 ref 전달
          key={index}
          className="relative h-[6px] flex-1 overflow-hidden rounded-lg bg-[#DCDCDC]"
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              'h-full transition-all duration-300',
              index < activeSegment
                ? 'bg-primary-1' // 이전 세그먼트는 전부 채움
                : index === activeSegment
                  ? 'bg-primary-1' // 활성 세그먼트는 일부만 채움
                  : 'bg-transparent', // 이후 세그먼트는 비움
            )}
            style={{
              transform: `translateX(${
                index < activeSegment
                  ? '0%' // 이전 세그먼트는 전부 채움
                  : index === activeSegment
                    ? `${-100 + partialProgress * 100}%` // 활성 세그먼트는 비율에 따라 채움
                    : '-100%' // 이후 세그먼트는 비움
              })`,
            }}
          />
        </ProgressPrimitive.Root>
      ))}
    </div>
  );
});
Progress.displayName = 'Progress';

export { Progress };
