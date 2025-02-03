import React from "react";
import "./media.css"; // Optional: You can use an external CSS file

const CssTest = () => {
    return (
        <div>
            <h2>Media Queries</h2>
            <p>Resize the browser window.</p>

            <p>Make sure you reach the breakpoint at 800px when resizing this frame.</p>

            <div class="left">
                <p>Left Menu</p>
            </div>

            <div class="main">
                <p>Main Content</p>
            </div>

            <div class="right">
                <p>Right Content</p>
            </div>
            {/* <h1>My First CSS Example</h1>
            <p>This is a paragraph.</p>
            <h2>Style a link with a color</h2>
<a href="default.asp" target="_blank">This is a link</a> */}
        </div>
    );
};

export default CssTest;
