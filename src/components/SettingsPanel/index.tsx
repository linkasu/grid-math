import React from "react";
import "./SettingsPanel.scss";
import ScaleSwitch from "../ScaleSwitch";
import PaintButton from "../PaintButton";

const SettingsPanel = () => {
    return (
        <div className="settings">
            <PaintButton/>
            <ScaleSwitch/>
        </div>
    );
};

export default SettingsPanel;
