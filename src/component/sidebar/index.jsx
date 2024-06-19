import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

const Sidebar = ({ onPriceRangeChange }) => {
    const [selectedRange, setSelectedRange] = useState(""); 

    const handleRadioChange = (event) => {
        const newValue = event.target.value;
        setSelectedRange(newValue); 
        onPriceRangeChange(newValue); 
    };
    <RadioGroup >
    <FormControlLabel
        value="1"
        control={<Radio />}
        label="Comedy"
    />
    <FormControlLabel
        value="3"
        control={<Radio />}
        label="Hành động"
    />
    <FormControlLabel
        value="4"
        control={<Radio />}
        label="Phiêu lưu"
    />
    <FormControlLabel
        value="5"
        control={<Radio />}
        label="Romance"
    />
</RadioGroup>

    return (
        <div className="sidebar">
            <div className="card border-0 shadow">
                <h4>MỨC GIÁ</h4>
                <RadioGroup value={selectedRange} onChange={handleRadioChange}>
                    <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="0 - 100.000đ"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="100.000đ - 300.000đ"
                    />
                    <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label="300.000đ - 500.000đ"
                    />
                    <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="Trên 500.000đ"
                    />
                </RadioGroup>
              
            </div>
            <div className="card border-0 shadow">
                <h4>Tag</h4>
                <RadioGroup >
                    <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Comedy"
                    />
                    <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="Hành động"
                    />
                    <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label="Phiêu lưu"
                    />
                    <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="Romance"
                    />
                     <FormControlLabel
                        value="6"
                        control={<Radio />}
                        label="Hachi"
                    />
                     <FormControlLabel
                        value="7"
                        control={<Radio />}
                        label="Kinh dị"
                    />
                     <FormControlLabel
                        value="8"
                        control={<Radio />}
                        label="Novel"
                    />
                      <FormControlLabel
                        value="9"
                        control={<Radio />}
                        label="Kinh dị Hàn"
                    />
                     <FormControlLabel
                        value="8"
                        control={<Radio />}
                        label="Noben Novel"
                    />
                </RadioGroup>
            </div>

            
        </div>
    );
};

export default Sidebar;
