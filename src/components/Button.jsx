import useTheme from "../hooks/useThem";

function Button () {
    const { toggleTheme } = useTheme ()
    return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default Button