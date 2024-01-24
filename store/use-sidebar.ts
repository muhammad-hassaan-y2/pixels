import { create } from 'zustand'

interface SidebarStore {
    collapsed: boolean;
    onExpand: () => void;
    onCollapse: () => void; // Make sure this matches the name in the interface
}

export const useSidebar = create<SidebarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })), // Corrected the method name here
}))
