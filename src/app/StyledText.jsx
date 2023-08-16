import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./page.module.css";
import React from "react";

const StyledText = ({ text }) => {
    const formatText = (text) => {
        return text
            .replace(/SELECT|COUNT/g, '<span class="gum">$&</span>')
            .replace(/"[^"]*"/g, '<span class="neonGreen">$&</span>')
            .replace(/[A-Z]+/g, '<span class="cottonCandy">$&</span>')
            .replace(/[\+\-\*\/=]/g, '<span class="pistachio">$&</span>')
            .replace(/[^<>/\n]+/g, '<span class="cream">$&</span>');
    };

    const styledText = { __html: formatText(text) };

    return (
        <div className="styled-text" dangerouslySetInnerHTML={styledText}></div>
    );
};

export default StyledText;
