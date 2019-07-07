import { useEffect, useState } from "react";
import * as theme from "./theme";

export default function useMobileListener() {
    const [ isMobile, setIsMobile ] = useState(true);

    useEffect(() => {
        if (window.innerWidth >= theme.mobileSwitchWidth) setIsMobile(false);
    }, [])

    const resizeListener = () => {
        if (window.innerWidth >= theme.mobileSwitchWidth && isMobile) setIsMobile(false);
        else if (window.innerWidth < theme.mobileSwitchWidth && !isMobile) setIsMobile(true);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeListener);
        return () => window.removeEventListener("resize", resizeListener);
    });

    return isMobile;
}