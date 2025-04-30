'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils'; // optional utility for classnames

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

// ✅ Define the props properly
interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  className?: string;
  children?: React.ReactNode; // ✅ Add children
}

// ✅ Updated DialogContent
export const DialogContent = ({ className, children, ...props }: DialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
    <DialogPrimitive.Content
      className={cn(
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg",
        className
      )}
      {...props}
    >
      {/* Add DialogTitle for accessibility */}
      <DialogPrimitive.Title className="text-lg font-semibold mb-4">
        Dialog Title
      </DialogPrimitive.Title>

      {/* Render the rest of the content */}
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);
