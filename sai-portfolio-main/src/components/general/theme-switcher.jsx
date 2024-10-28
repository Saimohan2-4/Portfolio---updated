import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';

import IconButton from './icon-button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../slices/themeSlice';
const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <IconButton aria-label={"theme-switcher"}
                role="button"
                id={"theme-switcher"}>
                <Sun />
            </IconButton>
        );
    }

    return (
        <IconButton aria-label={"theme-switcher"}
            role="button"
            id={"theme-switcher"} onClick={() => dispatch(toggleTheme())}>
            {theme === 'dark' ? <Sun /> : <MoonStar />}
        </IconButton>
    );
};

export default ThemeSwitcher;

