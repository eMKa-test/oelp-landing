import { useState, useCallback, useEffect } from "react";

const useResize = (callback, deps) => {
    const [size, setSize] = useState({
        x: document.body.clientWidth,
        y: document.body.clientHeight,
    });

    const onResize = useCallback(() => {
        const sizes = {
            x: document.body.clientWidth,
            y: document.body.clientHeight,
        };
        setSize(sizes);
    }, [...deps]);

    useEffect(() => {
        if (typeof callback === "function") {
            callback(size);
        }
    }, [callback, size])

    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [...deps]);
};

export default useResize;
