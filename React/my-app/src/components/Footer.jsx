import React from "react";

const year = new Date().getFullYear()

export function Footer () {
    return <footer><p>copyright {year}</p></footer>
}