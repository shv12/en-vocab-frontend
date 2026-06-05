import { useEffect } from "react";

export const useKeyPress = (targetKey: string, callback: () => void) => {
    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            // console.log('useKeyPress :: event.key', event.key);
            if (event.key === targetKey) {
                callback();
            }
        };

        window.addEventListener('keydown', handler);

        return () => {
            window.removeEventListener('keydown', handler);
        }

    }, [callback, targetKey]);
}