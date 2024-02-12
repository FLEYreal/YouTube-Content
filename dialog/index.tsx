'use client';

import { useState } from "react";

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Allowed dialog ids
export type dialogType = 'item-1' | 'item-2' | 'item-3'


export default function MultipleDialogs() {

  // State to define current dialog
  const [dialog, setDialog] = useState<dialogType>('item-1')

  return (
    <main>

      {/* Wrap entire menu (In this case context menu) inside "Dialog" component */}
      <Dialog>

        {/* Menu that needs to have multiple dialogs */}
        <ContextMenu>

          <ContextMenuTrigger asChild>
            <div className="w-32 h-32 m-6 border rounded-sm"/>
          </ContextMenuTrigger>

          {/* Menu items, each has its own dialog */}
          <ContextMenuContent>
            
            {/* On click, sets dialog associated dialog ID */}
            <DialogTrigger onClick={() => setDialog('item-1')} asChild>
              <ContextMenuItem>Item #1</ContextMenuItem>
            </DialogTrigger>

            <DialogTrigger onClick={() => setDialog('item-2')} asChild>
              <ContextMenuItem>Item #2</ContextMenuItem>
            </DialogTrigger>

            <DialogTrigger onClick={() => setDialog('item-3')} asChild>
              <ContextMenuItem>Item #3</ContextMenuItem>
            </DialogTrigger>
        
          </ContextMenuContent>

        </ContextMenu>

        {
          // Define what dialog item to open
          dialog === 'item-1' ? <DialogContent>Item 1</DialogContent> :
          dialog === 'item-2' ? <DialogContent>Item 2</DialogContent> :
          dialog === 'item-3' ? <DialogContent>Item 3</DialogContent> : null
        }

      </Dialog>

    </main>
  );
}
