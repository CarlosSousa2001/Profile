"use client";
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

const useScrollReveal = (selector: string) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal();
            sr.reveal(selector, {
                delay: 200,
                duration: 1000,
                origin: 'bottom',
                distance: '20px',
                easing: 'ease-out',
            });
        }
    }, [selector]);
};

export default useScrollReveal;

