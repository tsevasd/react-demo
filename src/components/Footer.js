import React from "react";

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-darkcolor w-full mt-auto p-4 text-center text-xs text-primary-variant-light">
            &copy; {currentYear} | MYTVShows | Dimosthenis Tsevas
        </footer>
    );
}