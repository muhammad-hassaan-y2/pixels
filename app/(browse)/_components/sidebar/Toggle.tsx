"use client"

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidebar'
import React from 'react'

const Toggle = () => {
  const {
    collapsed,
    onExpand,
    onCollapse
  } = useSidebar((state) => state);

  const label = collapsed ? 'Expand' : 'Collapsed';

    return (
    <>
    {collapsed && (
        <div className='hidden lg:flex w-full items-center pt-4 mb-4 
         justify-center '>
         <Hint label={label} side='right' asChild>
          <Button 
          onClick={onExpand}
          variant={'ghost'} 
          className='h-auto p-2'>
             <ArrowRightFromLine className='h-4 w-4 ' />
          </Button>
         </Hint>
        </div>
    )}
        {!collapsed && (
            <div className='p-3 pl-6 mb-2 flex items-center w-full '>
               <p className='font-semibold text-primary'> 
                  Geared For You
                </p>
             <Hint 
              label={label} 
              side='right' 
              asChild>
              <Button onClick={onCollapse}
               className='h-auto p-2 ml-auto' 
               variant={'ghost'}>
                 <ArrowLeftFromLine className='h-4 w-4' />
              </Button>
            </Hint>
            </div>
        )}
    </>
  )
}

export default Toggle